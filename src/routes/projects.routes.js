const express = require("express");
const router = express.Router();
const controller = require("../controllers/projects.controller");
const auth = require("../middlewares/authJwt");
const manager = require("../middlewares/role");

// création projet (user ou manager)
router.post("/", auth, controller.createProject);

// mes projets
router.get("/my", auth, controller.getMyProjects);

// tous les projets (manager uniquement)
router.get("/all", auth, manager, controller.getAllProjects);

// update / delete
router.put("/:id", auth, controller.updateProject);
router.delete("/:id", auth, controller.deleteProject);

// search
router.get("/search", auth, controller.searchProjects);

module.exports = router;
