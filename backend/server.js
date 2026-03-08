// require yerine import kullanıyoruz
import express from "express";
import cors from "cors";

const app = express();
const PORT = 5001;

app.use(
  cors({
    origin: "*", // Tüm adreslerden gelen isteklere izin ver
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.get("/", () => {
  res.send("Backend BURDa!");
});
app.get("/api/data", (req, res) => {
  res.json({ message: "Selam! Backend'den geliyorum." });
});

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT} .`);
});
