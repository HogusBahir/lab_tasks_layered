
const db = [
    {id: "1", title: "Take a shower", status: "false"},
    {id: "2", title: "Get wingstop for dinner", status: "false"},
    {id: "3", title: "Work on the project for 3330", status: "true"},
];



const getAllTasks = ()=>{
    return db;
};

const getTasksbyId = (params)=>{
    const id = (params.id);
    const task = db.find((task) => task.id === id);
    return task;
};

const createTask = (body) => {
    const newId = db.length > 0 ? Math.max(...db.map((task) => task.id)) + 1 : 1;
    const newTask = {
        id: newId,
        title: body.title ? body.title.trim() : "",
        status: "false"
    };
    db.push(newTask);
    return newTask;
};

export default {
    getAllTasks,
    getTasksbyId,
    createTask
};