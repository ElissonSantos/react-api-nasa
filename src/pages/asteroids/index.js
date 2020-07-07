import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { DatePicker } from "antd";
import moment from "moment";
import "antd/dist/antd.css";
// API
import apiGet from "../../services/api";
// Style
import "./styles.css";
// Components
import Loading from "../../components/loading";

function Asteroids() {
  const [isLoading, setLoading] = useState(true);
  const [asteroids, setAsteroids] = useState([]);
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
    asteroids.length ? setLoading(false) : setLoading(true);
  }, [asteroids]);

  const searchAsteroids = async () => {
    setAsteroids([]);
    apiGet("neo/rest/v1/feed", {
      start_date: showDate,
      end_date: showDate,
    }).then((result) => {
      setAsteroids(result.data.near_earth_objects[showDate]);
    });
  };

  return (
    <div className="size">
      <div className="card-primary">
        <div className="card-primary-date">
          <p>Selecione o dia:</p>
          <DatePicker
            disabledDate={(d) => !d || d.isAfter(new Date())}
            defaultValue={moment(selectedDate, "DD/MM/YYYY")}
            format={["DD/MM/YYYY"]}
            onChange={(date) => date && setSelectedDate(date._d)}
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
          {asteroids.map((infos) => (
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

export default Asteroids;
