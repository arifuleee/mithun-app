// controllers/chatbotController.js

const multer = require("multer");
const dotenv = require("dotenv");
const OpenAI = require("openai/index.mjs");

// Load environment variables from .env file
dotenv.config();

const openai = new OpenAI(process.env.OPENAI_API_KEY);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

exports.chat = [
  upload.single("file"),
  async (req, res) => {
    const { question } = req.body;
    const file = req.file;

    let fileContent = "";
    if (file) {
      fileContent = file.buffer.toString("utf-8");
    }

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: question },
          ...(fileContent ? [{ role: "user", content: fileContent }] : []),
        ],
      });

      const answer = completion.choices[0].message.content.trim();
      res.json({ question, answer });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Failed to fetch response from OpenAI" });
    }
  },
];
