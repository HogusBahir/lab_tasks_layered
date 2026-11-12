import express from "express";
import tasksControllers from "../controllers/tasks.controllers.js";

const router = express.Router();

router.get("/", tasksControllers.getAllTasks);

router.get("/:id", tasksControllers.getTasksbyId);

router.post("/", tasksControllers.createTask);



router.get("/api/tasks", (req, res, next) => {
    try{
        const allTasks = db;
        res.status(200).json({
            success: true,
            data: allTasks
        });
    }catch(error){
        next(error);
    }
});

router.post("/api/tasks", (req, res, next) => {
    try{
        const params = req.body;
        const newTask = {
            id: Math.max(...db.map( (user) => user.id )) + 1, 
            title: params.title.trim(),
            completed: false
          };
        db.push(newTask); 

        res.status(201).json({
            success: true,
            data: newTask
        });
    }catch(error){
        next(error);
    }
    return task;
});  

const errorHandler = (err, req, res, next) => {
    console.error(err);
    const status = err.status || 500;
    res.status(status).json({
        success: false,
        message: err.message || "Internal Server Error."
    });
};

router.use(errorHandler);

export default router;