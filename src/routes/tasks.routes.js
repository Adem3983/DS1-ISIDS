const express = require("express");
const router = express.Router();
const controller = require("../controllers/tasks.controller");
const auth = require("../middlewares/authJwt");
const manager = require("../middlewares/role");

// nasn3ou tâche
router.post("/", auth, controller.createTask);

// tâches d’un projet
router.get("/:projetId", auth, controller.getTaskByProject);

// update / delete
router.put("/:id", auth, controller.updateTask);
router.delete("/:id", auth, controller.deleteTask);

// assignation (manager uniquement)
router.put("/assign/:id", auth, manager, controller.assignTask);

// search
router.get("/search/query", auth, controller.searchTasks);

module.exports = router;
