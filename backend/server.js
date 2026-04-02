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
app.use(express.json());

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
app.post("/api/form",contactLimiter, async (req, res) => {

  const { name, mail, message } = req.body;

  try {

    const createdAt = new Date();

    const query = 'INSERT INTO messages (name, email, message, created_at) VALUES (?, ?, ?, ?)';
    const [result] = await db.execute(query, [name, email, message, createdAt]);

    res.status(200).json({ success: true, id: result.insertId });
  } catch (error) {
    console.error("DB Error:", error);
    res.status(500).json({ error: "Can't connect database" });
  }
});
app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT} .`);
});
