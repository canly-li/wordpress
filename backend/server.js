import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.get("/api/message", (req, res) => {
  res.json({
    message: process.env.MESSAGE
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});