import axios from "axios";

export const getTasks = () => axios.get('http://localhost:8080/api/task');

export const getTask = (id) => axios.get(`http://localhost:8080/api/task/${id}`);

export const createTask = (task) => axios.post('http://localhost:8080/api/task', task);

export const updateTask = (id, task) => axios.put(`http://localhost:8080/api/task/${id}`, task);

export const deleteTask = (id) => axios.delete(`http://localhost:8080/api/task/${id}`);
