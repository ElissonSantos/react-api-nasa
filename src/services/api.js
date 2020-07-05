import axios from "axios";

const api = axios.create({
  baseURL: "https://api.nasa.gov/",
});

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

  const data = await api.get(url, {
    params,
  });
  return data;
};

export default apiGet;

/*
  Imagem do Dia
  https://api.nasa.gov/planetary/apod
  Asteroides proximos a terra
  https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY
  Imagem da Terra
  https://api.nasa.gov/planetary/earth/imagery
  Imagem da Terra toda
  https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY 
  https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=DEMO_KEY 
  https://api.nasa.gov/EPIC/api/natural/all?api_key=DEMO_KEY 
  https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=DEMO_KEY
  */
