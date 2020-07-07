/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// API
import apiGet from "../../services/api";
// Style
import "./styles.css";
// Components
import Loading from "../../components/loading";

function AsteroidDetails() {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [asteroid, setAsteroid] = useState({});
  const [notFound, setNotFound] = useState(true);

  useEffect(() => {
    searchAsteroid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchAsteroid = async () => {
    apiGet(`neo/rest/v1/neo/${id}`)
      .then((result) => {
        result && setAsteroid(result.data);
        setLoading(false);
        setNotFound(false);
      })
      .catch((err) => {
        setLoading(false);
        setNotFound(true);
      });
  };

  return (
    <div className="size">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {notFound ? (
            <div className="asteroid-card">
              <h3 className="asteroid-not-found">
                Não foi encontrado nenhum asteroide com este ID.
              </h3>
            </div>
          ) : (
            <div key={asteroid.id} className="asteroid-card">
              <div className="asteroid">
                <p className="asteroid-name">Nome:</p>
                <p className="asteroid-value">{asteroid.name}</p>
              </div>

              <div className="asteroid">
                <p className="asteroid-name">Magnitude:</p>
                <p className="asteroid-value">
                  {asteroid.absolute_magnitude_h}
                </p>
              </div>

              <div className="asteroid-tamanho">
                <p className="asteroid-name-size">Tamanho estimado em:</p>
                <div className="asteroid">
                  <p className="asteroid-diameter">Máximo:</p>
                  <p className="asteroid-name">Pés:</p>
                  <p className="asteroid-size">
                    {asteroid.estimated_diameter &&
                      Math.round(
                        asteroid.estimated_diameter.feet.estimated_diameter_max
                      )}
                  </p>
                  <p className="asteroid-name">Milhas:</p>
                  <p className="asteroid-size">
                    {asteroid.estimated_diameter &&
                      asteroid.estimated_diameter.miles.estimated_diameter_max}
                  </p>
                  <p className="asteroid-name">Km:</p>
                  <p className="asteroid-size">
                    {asteroid.estimated_diameter &&
                      asteroid.estimated_diameter.kilometers
                        .estimated_diameter_max}
                  </p>
                  <p className="asteroid-name">Metros:</p>
                  <p className="asteroid-size">
                    {asteroid.estimated_diameter &&
                      Math.round(
                        asteroid.estimated_diameter.meters
                          .estimated_diameter_max
                      )}
                  </p>
                </div>
                <div className="asteroid">
                  <p className="asteroid-diameter">Minimo:</p>
                  <p className="asteroid-name">Pés:</p>
                  <p className="asteroid-size">
                    {asteroid.estimated_diameter &&
                      Math.round(
                        asteroid.estimated_diameter.feet.estimated_diameter_min
                      )}
                  </p>
                  <p className="asteroid-name">Milhas:</p>
                  <p className="asteroid-size">
                    {asteroid.estimated_diameter &&
                      asteroid.estimated_diameter.miles.estimated_diameter_min}
                  </p>
                  <p className="asteroid-name">Km:</p>
                  <p className="asteroid-size">
                    {asteroid.estimated_diameter &&
                      asteroid.estimated_diameter.kilometers
                        .estimated_diameter_min}
                  </p>
                  <p className="asteroid-name">Metros:</p>
                  <p className="asteroid-size">
                    {asteroid.estimated_diameter &&
                      Math.round(
                        asteroid.estimated_diameter.meters
                          .estimated_diameter_min
                      )}
                  </p>
                </div>
              </div>

              <div className="asteroid">
                <p className="asteroid-name">É potencialmente perigoso:</p>
                {asteroid.is_potentially_hazardous_asteroid ? (
                  <p className="danger">Sim</p>
                ) : (
                  <p className="no-danger">Nao</p>
                )}
              </div>

              <div className="asteroid">
                <p className="asteroid-name">É objeto de sentinela:</p>
                {asteroid.is_sentry_object ? (
                  <p className="asteroid-value">Sim</p>
                ) : (
                  <p className="asteroid-value">Nao</p>
                )}
              </div>

              <div className="asteroid">
                <a
                  href="http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3263453"
                  target="_blank"
                  className="asteroid-link"
                >
                  Clique aqui para maiores informações
                </a>
              </div>

              <div className="asteroid-options">
                <Link to="/asteroides">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="options-back"
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AsteroidDetails;
