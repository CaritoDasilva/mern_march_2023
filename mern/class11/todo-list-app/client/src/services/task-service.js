import axios from "axios";

export const getTasks = () => axios.get('http://localhost:8080/api/task');
