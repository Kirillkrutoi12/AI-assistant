import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/server", async (req, res) => {
  try {
    const message = req.body.content;
    const URL = "https://api.groq.com/openai/v1/chat/completions";
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: message }],
      }),
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(3000);
