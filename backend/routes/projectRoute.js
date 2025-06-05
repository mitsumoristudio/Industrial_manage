
import express from 'express';
import {updateProject,
        deleteProject,
        createProject,
        getProject,
        getMyProjects,
        getAllProjects} from "../controller/projectController.js";

const router = express.Router();

router.route("/").get(getAllProjects);
router.route("/:id").get(getProject);
router.route("/:id").put(updateProject);
router.route("/:id").delete(deleteProject);
router.route("/").post(createProject);
router.route("/:id/myProjects").get(getMyProjects);

export default router;