import axios from "axios";

const api = axios.create({
  baseURL: "https://api.nasa.gov/planetary/apod?api_key=3c0aDGuxR3r5xcVYQVZFnW4zKG9oETvx9ogQ1YR7";,
});

export default api;
