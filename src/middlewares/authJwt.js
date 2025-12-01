const jwt = require("jsonwebtoken");

// middelware ta3 l'authentification b JWT
module.exports = (req, res, next) => {
  // njibo token mel header
  const token = req.headers["authorization"];

  // ken ma famech token → accès refusé
  if (!token) {
    return res.status(401).json({ message: "Token manquante" });
  }

  try {
    // nfaskhou le mot "Bearer "
    const realToken = token.split(" ")[1];

    // nverifyiw token b secret key
    const decoded = jwt.verify(realToken, process.env.JWT_SECRET);

    // nkhaliw userId disponible f les controllers
    req.userId = decoded.id;

    // n3adew lel étape el jeya
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token non valide" });
  }
};

