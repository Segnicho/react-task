import axios from "axios";

const apiUrl = "http://localhost:8080";

export let clientInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  baseURL: apiUrl,
});
