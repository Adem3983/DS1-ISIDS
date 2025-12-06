const User = require("../models/User");

// middelware bch n3arfo ken user houwa manager wela lé
module.exports = async (req, res, next) => {
  try {
    // njibo user mel base selon l'ID eli jebneh mel token
    const user = await User.findById(req.userId);

    // ken user mawjoudch
    if (!user) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }

    // ken role mouch manager → maandouch l ha9 
    if (user.role !== "manager") {
      return res.status(403).json({ message: "Accès refusé (manager uniquement)" });
    }

    // kenou manager → n3adew lel étape elli ba3dha
    next();

  } catch (err) {
    return res.status(500).json({ message: "Erreur serveur" });
  }
};
