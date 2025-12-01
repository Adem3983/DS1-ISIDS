const Task = require("../models/Task");

<<<<<<< HEAD
// *******
//   CREATE TASK
// *******
=======
// *********************
//   CREATE TASK
// *********************
>>>>>>> 7a52a08 (Routes + quelques autres petits modifications)
exports.createTask = async (req, res) => {
  try {
    const { titre, description, statut, deadline, projet } = req.body;

    const task = new Task({
      titre,
      description,
      statut,
      deadline,
      projet,
      assigne: null
    });

    await task.save();

    res.status(201).json({ message: "Tâche créée", task });

  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", err });
  }
};


<<<<<<< HEAD
// *******
//   GET TASKS BY PROJECT
// *******
=======
// *********************
//   GET TASKS BY PROJECT
// *********************
>>>>>>> 7a52a08 (Routes + quelques autres petits modifications)
exports.getTaskByProject = async (req, res) => {
  try {
    const projectId = req.params.projetId;

    const tasks = await Task.find({ projet: projectId }).populate("assigne");

    res.json(tasks);

  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", err });
  }
};


<<<<<<< HEAD
// *******
//   UPDATE TASK
// *******
=======
// *********************
//   UPDATE TASK
// *********************
>>>>>>> 7a52a08 (Routes + quelques autres petits modifications)
exports.updateTask = async (req, res) => {
  try {
    const id = req.params.id;

    const updated = await Task.findByIdAndUpdate(id, req.body, { new: true });

    res.json(updated);

  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", err });
  }
};


<<<<<<< HEAD
// *******
//   DELETE TASK
// *******
=======
// *********************
//   DELETE TASK
// *********************
>>>>>>> 7a52a08 (Routes + quelques autres petits modifications)
exports.deleteTask = async (req, res) => {
  try {
    const id = req.params.id;

    await Task.findByIdAndDelete(id);

    res.json({ message: "Tâche supprimée" });

  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", err });
  }
};


<<<<<<< HEAD
// *******
//   ASSIGN TASK (manager ONLY)
// *******
=======
// *********************
//   ASSIGN TASK (manager ONLY)
// *********************
>>>>>>> 7a52a08 (Routes + quelques autres petits modifications)
exports.assignTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { userId } = req.body;

    const updated = await Task.findByIdAndUpdate(
      taskId,
      { assigne: userId },
      { new: true }
    ).populate("assigne");

    res.json({ message: "Tâche assignée", updated });

  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", err });
  }
};


<<<<<<< HEAD
// *******
//   SEARCH TASKS
// *******
=======
// *********************
//   SEARCH TASKS
// *********************
>>>>>>> 7a52a08 (Routes + quelques autres petits modifications)
exports.searchTasks = async (req, res) => {
  try {
    const { q } = req.query;

    const tasks = await Task.find({
      titre: { $regex: q, $options: "i" }
    });

    res.json(tasks);

  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", err });
  }
<<<<<<< HEAD
};
=======
};
>>>>>>> 7a52a08 (Routes + quelques autres petits modifications)
