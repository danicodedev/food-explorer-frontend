import axios from "axios";

export const api = axios.create({
  baseURL: 'https://food-backend-nt8i.onrender.com'
});