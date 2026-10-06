import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const fetchTodos = async () => {
  try {
    console.log("[API] Fetching todos from:", `${SERVER_URL}/api/todos`);
    return axios.get(`${SERVER_URL}/api/todos`);
  } catch (error) {
    console.error("[API] Fetch todos failed:", error.message);
    throw error;
  }
};

export const createTodo = async (payload) => {
  return axios.post(`${SERVER_URL}/api/todos`, payload);
};

export const deleteTodo = async (id) => {
  return axios.delete(`${SERVER_URL}/api/todos/${id}`);
};
export const updateTodo = async (id, updates) => {
  try {
    return axios.put(`${SERVER_URL}/api/todos/${id}`, updates);
  } catch (error) {
    console.error("[API] Update todo failed:", error.message);
    throw error;
  }
};

