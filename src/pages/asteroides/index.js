import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// API
import apiGet from "../../services/api";
// Style
import "./styles.css";
// Components
import Loading from "../../components/loading";
import { Link } from "react-router-dom";

function Asteroides() {
  const [isLoading, setLoading] = useState(true);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showDate]);

  useEffect(() => {
    asteroides.length ? setLoading(false) : setLoading(true);
  }, [asteroides]);

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
      <div className="card-primary">
        <div className="card-primary-date">
          <p>Selecione o dia:</p>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            maxDate={new Date()}
            dateFormat="dd/MM/yyyy"
            className="date-datepicker"
          />
        </div>
        <div className="card-primary-title">
          <h3>Lista de Asteroides mais proximos a Terra neste dia.</h3>
        </div>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="card-list">
          {asteroides.map((infos) => (
            <div key={infos.id} className="card">
              <div className="card-info">
                <p className="info-name">Nome:</p>
                <p className="info-value">{infos.name}</p>
              </div>

              <div className="info">
                <p className="info-name">Diametro Maximo:</p>
                <p className="info-value">
                  {Math.round(
                    infos.estimated_diameter.meters.estimated_diameter_max
                  )}
                  Metros
                </p>
              </div>

              <div className="info">
                <p className="info-name">Diametro Minimo:</p>
                <p className="info-value">
                  {Math.round(
                    infos.estimated_diameter.meters.estimated_diameter_min
                  )}
                  Metros
                </p>
              </div>

              <div className="info">
                <p className="info-name">Velocidade relativa:</p>
                <p className="info-value">
                  {Math.round(
                    infos.close_approach_data[0].relative_velocity
                      .kilometers_per_hour
                  )}
                  Km/h
                </p>
              </div>

              <div className="info-options">
                <Link to={`asteroides/${infos.id}`}>
                  <FontAwesomeIcon icon={faSearch} className="options-see" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Asteroides;
