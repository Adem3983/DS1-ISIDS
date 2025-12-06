const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("🔍 MONGO_URI =", process.env.MONGO_URI); // <--- Debug

    if (!process.env.MONGO_URI) {
      throw new Error("La variable d'environnement MONGO_URI est introuvable !");
    }
  
    await mongoose.connect(process.env.MONGO_URI);
    console.log("📦 Connexion à MongoDB réussie !");
  } catch (err) {
    console.error("❌ Erreur de connexion MongoDB :", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

