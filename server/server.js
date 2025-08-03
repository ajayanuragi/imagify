import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";
const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://imagify-virid-xi.vercel.app",
    credentials: true,
  })
);

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.get("/", (req, res) => {
  res.send("API working...");
});

try {
  await connectDB();
  app.listen(PORT, () => {
    console.log("Server running on PORT:" + PORT);
  });
} catch (error) {
  console.error("Server startup aborted due to DB connection error", error);
  process.exit(1);
}
