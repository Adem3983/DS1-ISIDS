const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Charger variables d'environnement
dotenv.config();

// Connexion à MongoDB
connectDB();

const app = express();

// Autoriser les requêtes depuis le navigateur (important pour front-end)
app.use(cors());

// Parser JSON (express l'implémente directement)
app.use(express.json());

// Route test
app.get("/", (req, res) => {
  res.send("API Express + MongoDB fonctionne 🎉");
});

// Routes API
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/projects", require("./routes/projects.routes"));
app.use("/api/tasks", require("./routes/tasks.routes"));

// Lancer serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});
