import tasksServices from "../services/tasks.services.js";


const getAllTasks = (req, res)=>{
    const tasks = tasksServices.getAllTasks();
    res.status(200).json(tasks);
};

const getTasksbyId = (req, res)=>{
    const task = tasksServices.getTasksbyId(req.params);

    if(!task){
        res.status(400).json({message: "Task not found!"});
    }

    res.status(200).json(task);
};

const createTask = (req, res, next) => {
    try {
        if (!req.body.title) {
            return res.status(400).json({ success: false, message: "Title is required" });
        }
        
        const newTask = tasksServices.createTask(req.body);
        return res.status(201).json({
            success: true,
            data: newTask
        });
    } catch (error) {
        next(error);
    }
};

export default {
    getAllTasks,
    getTasksbyId,
    createTask
};