import axios from "axios";
import userModel from "../model/userModel.js";

export const generateImage = async (req, res) => {
  debugger;
  try {
    const userId = req.user.id;
    const { prompt } = req.body;

    const user = await userModel.findById(userId).select("creditBalance");
    if (!user || !prompt) {
      return res.status(400).json({
        success: false,
        message: "Missing details",
      });
    }
    if (user.creditBalance === 0 || user.creditBalance < 0) {
      return res.status(400).json({
        success: false,
        message: "No credit balance",
        creditBalance: user.creditBalance,
      });
    }
    const encodedPrompt = encodeURIComponent(prompt);
    const imageUrl = `${process.env.IMAGE_URL}/${encodedPrompt}?model=kontext&width=300&height=300&nologo=true&private=true&enhance=true`;

    const response = await axios.get(imageUrl, {
      responseType: "arraybuffer",
      headers: {
        Authorization: `Bearer ${process.env.IMAGE_API_KEY}`,
      },
    });
    if (response.status !== 200) {
      throw new Error(`Image generation failed: ${response.statusText}`);
    }
    const base64Image = Buffer.from(response.data, "binary").toString("base64");
    const dataUrl = `data:image/jpeg;base64,${base64Image}`;

    user.creditBalance -= 1;
    await user.save();
    return res.status(200).json({
      success: true,
      message: "Image generated",
      resultImage: dataUrl,
      creditBalance: user.creditBalance,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
