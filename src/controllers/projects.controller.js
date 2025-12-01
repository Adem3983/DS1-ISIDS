const Project = require("../models/Project");

<<<<<<< HEAD
// *******
//   CREATE PROJECT
// *******
=======
// *********************
//   CREATE PROJECT
// *********************
>>>>>>> 7a52a08 (Routes + quelques autres petits modifications)
exports.createProject = async (req, res) => {
  try {
    const { nom, description, statut } = req.body;

    // nsajlou projet w na3tih propriétaire eli connecté
    const project = new Project({
      nom,
      description,
      statut: statut || "en cours",
      proprietaire: req.userId
    });

    await project.save();

    res.status(201).json({ message: "Projet créé", project });

  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", err });
  }
};


<<<<<<< HEAD
// *******
//   GET MY PROJECTS
// *******
=======
// *********************
//   GET MY PROJECTS
// *********************
>>>>>>> 7a52a08 (Routes + quelques autres petits modifications)
exports.getMyProjects = async (req, res) => {
  try {
    // njibou ken projets mta3 user li connecté
    const projects = await Project.find({ proprietaire: req.userId });

    res.json(projects);

  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", err });
  }
};


<<<<<<< HEAD
// *******
//  GET ALL PROJECTS (manager ONLY)
// *******
=======
// *********************
//  GET ALL PROJECTS (manager ONLY)
// *********************
>>>>>>> 7a52a08 (Routes + quelques autres petits modifications)
exports.getAllProjects = async (req, res) => {
  try {
    // ken manager ynejjem ychouf kol projets
    const projects = await Project.find().populate("proprietaire");

    res.json(projects);

  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", err });
  }
};


<<<<<<< HEAD
// *******
//       UPDATE PROJECT
// *******
=======
// *********************
//       UPDATE PROJECT
// *********************
>>>>>>> 7a52a08 (Routes + quelques autres petits modifications)
exports.updateProject = async (req, res) => {
  try {
    const id = req.params.id;

    // nupdateiw projet
    const updated = await Project.findByIdAndUpdate(id, req.body, { new: true });

    res.json(updated);

  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", err });
  }
};


<<<<<<< HEAD
// *******
//       DELETE PROJECT
// *******
=======
// *********************
//       DELETE PROJECT
// *********************
>>>>>>> 7a52a08 (Routes + quelques autres petits modifications)
exports.deleteProject = async (req, res) => {
  try {
    const id = req.params.id;

    await Project.findByIdAndDelete(id);

    res.json({ message: "Projet supprimé" });

  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", err });
  }
};


<<<<<<< HEAD
// *******
//   SEARCH PROJECTS
// *******
=======
// *********************
//   SEARCH PROJECTS
// *********************
>>>>>>> 7a52a08 (Routes + quelques autres petits modifications)
exports.searchProjects = async (req, res) => {
  try {
    const { q } = req.query;

    // nsearchiw selon nom
    const projects = await Project.find({
      nom: { $regex: q, $options: "i" }
    });

    res.json(projects);

  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", err });
  }
<<<<<<< HEAD
};
=======
};
>>>>>>> 7a52a08 (Routes + quelques autres petits modifications)
