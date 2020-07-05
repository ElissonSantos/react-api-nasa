import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// API
import apiGet from "../../services/api";
// Style
import "./styles.css";
// Components
import Header from "../../components/header";

function Asteroides() {
  const [asteroides, setAsteroides] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDate, setShowDate] = useState(null);

  useEffect(() => {
    const day = String(selectedDate.getDate()).padStart(2, "0");
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const year = selectedDate.getFullYear();
    setShowDate(`${year}-${month}-${day}`);
  }, [selectedDate]);

  useEffect(() => {
    showDate && searchAsteroids();
  }, [showDate]);

  const searchAsteroids = async () => {
    setAsteroides([]);
    apiGet("neo/rest/v1/feed", {
      start_date: showDate,
      end_date: showDate,
    }).then((result) => {
      setAsteroides(result.data.near_earth_objects[showDate]);
    });
  };

  return (
    <div className="size">
      <Header />

      <div className="card-primary">
        <div className="date-area">
          <p>Selecione o dia:</p>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            maxDate={new Date()}
            dateFormat="dd/MM/yyyy"
            className="datepicker"
          />
        </div>
        <div className="title-area">
          <h3>
            Lista de Asteroides mais proximos a Terra neste dia.
            {selectedDate.format}
          </h3>
        </div>
      </div>

      <div className="card-list">
        {asteroides.map((infos) => (
          <div className="card">
            <div className="info">
              Nome: <h3 className="title">{infos.name}</h3>
            </div>
            <div className="info">
              Diametro Maximo:
              <h4>
                {Math.round(
                  infos.estimated_diameter.meters.estimated_diameter_max
                ) + " Metros"}
              </h4>
            </div>
            <div className="info">
              Diametro Minimo:
              <h4>
                {Math.round(
                  infos.estimated_diameter.meters.estimated_diameter_min
                ) + " Metros"}
              </h4>
            </div>
            <div className="info">
              Diametro Minimo:
              <h4>
                {Math.round(
                  infos.close_approach_data[0].relative_velocity
                    .kilometers_per_hour
                ) + " Km/h"}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Asteroides;
