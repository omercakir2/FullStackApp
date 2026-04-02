import 'dotenv/config'; 
import express from "express";
import cors from "cors";
import path from 'path';
import db from './db.js';
import { fileURLToPath } from 'url';
import rateLimit from 'express-rate-limit';



const app = express();
const PORT = 5001;



const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 dakika
  max: 5, // 15 dakikada en fazla 5 istek
  message: "Çok fazla istek gönderdiniz, lütfen 15 dakika sonra tekrar deneyin."
});

app.set('trust proxy', 1);

app.use(
  cors({
    origin: ["https://omercakirr.com",
            "http://localhost:5173",
            "https://full-stack-app-three-omega.vercel.app/",
            "https://www.omercakirr.com"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json({limit:'10kb'}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// İndirme Rotası
app.get('/api/download-resume', (req, res) => {
    const filePath = path.join(__dirname, 'assets', 'my-resume.pdf'); // Dosya yolun
    
    res.download(filePath, 'cv_Omer_Cakir.pdf', (err) => {
        if (err) {
            console.error("Download Error!", err);
            res.status(404).send("Not Found");
        } 
    });
});




app.get("/", () => {
  res.send("Backend BURDa!");
});
app.get("/api/data", (req, res) => {
  res.json({ message: "Selam! Backend'den geliyorum." });
});
app.post("/api/form", contactLimiter, async (req, res) => {
  try {
    const { name, mail, message } = req.body;

    // 1. Validation: Check if fields are empty
    if (!name || !mail || !message) {
      return res.status(400).json({ 
        error: "Missing fields! Name, email, and message are required." 
      });
    }

    // 2. Length Validation: Protect Database & Server
    if (name.length > 100) {
      return res.status(400).json({ error: "Name is too long (Max 100 characters)." });
    }
    
    if (mail.length > 150) {
      return res.status(400).json({ error: "Email address is too long." });
    }

    if (message.length > 2000) {
      return res.status(400).json({ error: "Message is too long (Max 2000 characters)." });
    }

    // 3. Format Validation: Simple Email Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    // 4. Database Insertion
    const createdAt = new Date();
    const query = 'INSERT INTO messages (name, email, message, created_at) VALUES (?, ?, ?, ?)';
    
    const [result] = await db.execute(query, [
      name.trim(), 
      mail.trim(), 
      message.trim(), 
      createdAt
    ]);

    console.log(`New message saved. ID: ${result.insertId}`);
    
    res.status(200).json({ 
      success: true, 
      message: "Your message has been sent successfully." 
    });

  } catch (error) {
    console.error("Critical DB Error:", error.message);
    res.status(500).json({ error: "Internal server error. Please try again later." });
  }
});
app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT} .`);
});
