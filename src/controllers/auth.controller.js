const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// *********************
//      REGISTER
// *********************
exports.register = async (req, res) => {
  try {
    const { nom, login, password, role } = req.body;

    // nverifyiw ken login 3andou compte fil base
    const exists = await User.findOne({ login });
    if (exists) {
      return res.status(400).json({ message: "Login déjà utilisé" });
    }

    // ncryptiw password
    const hashedPassword = await bcrypt.hash(password, 10);

    // nsajlou user jdida
    const user = new User({
      nom,
      login,
      password: hashedPassword,
      role   // par défaut "user"
    });

    await user.save();

    return res.status(201).json({ 
      message: "Utilisateur créé avec succès" 
    });

  } catch (err) {
    return res.status(500).json({ message: "Erreur serveur", error: err });
  }
};

// *********************
//        LOGIN
// *********************
exports.login = async (req, res) => {
  try {
    const { login, password } = req.body;

    // njibo user selon login
    const user = await User.findOne({ login });
    if (!user) {
      return res.status(400).json({ message: "Login ou mot de passe incorrect" });
    }

    // nverifyiw password moch mwaf9
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Login ou mot de passe incorrect" });
    }

    // n7adrou token (valid 24h)
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    return res.json({
      message: "Connexion réussie",
      token,
      user: {
        id: user._id,
        nom: user.nom,
        login: user.login,
        role: user.role
      }
    });

  } catch (err) {
    return res.status(500).json({ message: "Erreur serveur", error: err });
  }
};
