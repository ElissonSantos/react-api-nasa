import axios from "axios";

const api = axios.create({
  baseURL: "https://api.nasa.gov/",
});

// Metodo Get
const apiGet = async (url, urlParams = {}) => {
  let params = { api_key: "3c0aDGuxR3r5xcVYQVZFnW4zKG9oETvx9ogQ1YR7" };

  params = urlParams.date
    ? (params = { ...params, date: urlParams.date })
    : params;
  params = urlParams.start_date
    ? (params = { ...params, start_date: urlParams.start_date })
    : params;
  params = urlParams.end_date
    ? (params = { ...params, end_date: urlParams.end_date })
    : params;
  params = urlParams.updatedSince
    ? (params = { ...params, updatedSince: urlParams.updatedSince })
    : params;

  const data = await api.get(url, {
    params,
  });
  return data;
};

export default apiGet;
