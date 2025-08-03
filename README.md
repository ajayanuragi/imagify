# 🖼️ Imagify

**Imagify** is a full-stack AI-powered **text-to-image generator**. Users can sign up securely, input a text prompt, and download a high-quality AI-generated image — all in a simple, clean interface. No image history is stored.

🔗 [Live Demo](https://imagify-virid-xi.vercel.app/) • 🐛 [Report Issues](https://github.com/ajayanuragi/imagify/issues)

---

## ✨ Features

- 🧠 Generate images from natural language text prompts
- 🔐 User authentication using JWT + bcrypt
- 📥 One-click image download after generation
- ⚙️ RESTful backend built with Express.js and MongoDB
- 🖼️ Local image hosting (no Cloudinary)
- 🎨 Responsive UI built with React + Tailwind CSS

---

## 🧰 Tech Stack

| Layer      | Tech                        |
|------------|-----------------------------|
| Frontend   | React, Tailwind CSS         |
| Backend    | Express.js (Node.js)        |
| Auth       | JWT + bcrypt                |
| Database   | MongoDB (Mongoose)          |
| AI Engine  | Text-to-image API (e.g. Replicate, DALL·E) |
| Storage    | Local file system           |
| Deployment | Vercel / Render             |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ajayanuragi/imagify.git
cd imagify
```

### 2. Install Dependencies
Install dependencies in both frontend (client) and backend (server):

```bash
cd client
pnpm install

cd ../server
pnpm install
```

### 3. Configure Environment Variables

Create a `.env` file in **both** the `client` and `server` directories based on the example files:

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```


#### Example `.env` keys
server/.env.example
```

MONGODB_URI="mongodb+srv://user:password@cluster.mongodb.net/imagify"
JWT_SECRET="supersecretjwtkey123"
IMAGE_URL="https://image.pollinations.ai/prompt/"
IMAGE_API_KEY="random-api-key-456789"
```
client/ .env example

```
VITE_BACKEND_URL='http://localhost:3000'
``` 

### 🖥️ Run Locally

```bash
# Start Express backend
pnpm run server

# Start React frontend
pnpm run dev
```

Then go to: [http://localhost:3000](http://localhost:3000)

---

## 📁 Folder Structure

```
imagify/
├── client/               # React frontend
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── .env.example      # Frontend environment variables
├── server/               # Express backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── .env.example      # Backend environment variables
├── public/               # Static files and image output
├── .gitignore
└── README.md
```

---

## 🔐 Auth Flow

- Users register → passwords are hashed with `bcrypt`
- Users login → receive a `JWT` token
- Protected routes require: `Authorization: Bearer <token>`

---

## 📦 API Endpoints

| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| POST   | `/api/user/register` | Register new user               |
| POST   | `/api/user/login`  | Login and receive JWT           |
| POST   | `/api/image/generate-image`    | Generate image from text prompt |

> ⚠️ Generated images are not stored — users must **download immediately** after generation.

---

