import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// API
import apiGet from "../../services/api";
// Style
import "./styles.css";

function EditCard() {
  const { id } = useParams();
  const [asteroide, setAsteroide] = useState({});
  const [notFound, setNotFound] = useState(true);

  useEffect(() => {
    buscaAsteroide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buscaAsteroide = async () => {
    apiGet(`neo/rest/v1/neo/${id}`).then((result) => {
      result && setAsteroide(result.data);
      setNotFound(false);
    });
  };

  return (
    <div className="size">
      {notFound ? (
        <div className="asteroide-card">
          <h3 className="asteroide-not-found">
            Não foi encontrado nenhum asteroide com este ID.
          </h3>
        </div>
      ) : (
        <div key={asteroide.id} className="asteroide-card">
          <div className="asteroide">
            <p className="asteroide-name">Nome:</p>
            <p className="asteroide-value">{asteroide.name}</p>
          </div>

          <div className="asteroide">
            <p className="asteroide-name">Magnitude:</p>
            <p className="asteroide-value">{asteroide.absolute_magnitude_h}</p>
          </div>

          <div className="asteroide-tamanho">
            <p className="asteroide-name-size">Tamanho estimado em:</p>
            <div className="asteroide">
              <p className="asteroide-diameter">Máximo:</p>
              <p className="asteroide-name">Pés:</p>
              <p className="asteroide-size">
                {asteroide.estimated_diameter &&
                  Math.round(
                    asteroide.estimated_diameter.feet.estimated_diameter_max
                  )}
              </p>
              <p className="asteroide-name">Milhas:</p>
              <p className="asteroide-size">
                {asteroide.estimated_diameter &&
                  asteroide.estimated_diameter.miles.estimated_diameter_max}
              </p>
              <p className="asteroide-name">Km:</p>
              <p className="asteroide-size">
                {asteroide.estimated_diameter &&
                  asteroide.estimated_diameter.kilometers
                    .estimated_diameter_max}
              </p>
              <p className="asteroide-name">Metros:</p>
              <p className="asteroide-size">
                {asteroide.estimated_diameter &&
                  Math.round(
                    asteroide.estimated_diameter.meters.estimated_diameter_max
                  )}
              </p>
            </div>
            <div className="asteroide">
              <p className="asteroide-diameter">Minimo:</p>
              <p className="asteroide-name">Pés:</p>
              <p className="asteroide-size">
                {asteroide.estimated_diameter &&
                  Math.round(
                    asteroide.estimated_diameter.feet.estimated_diameter_min
                  )}
              </p>
              <p className="asteroide-name">Milhas:</p>
              <p className="asteroide-size">
                {asteroide.estimated_diameter &&
                  asteroide.estimated_diameter.miles.estimated_diameter_min}
              </p>
              <p className="asteroide-name">Km:</p>
              <p className="asteroide-size">
                {asteroide.estimated_diameter &&
                  asteroide.estimated_diameter.kilometers
                    .estimated_diameter_min}
              </p>
              <p className="asteroide-name">Metros:</p>
              <p className="asteroide-size">
                {asteroide.estimated_diameter &&
                  Math.round(
                    asteroide.estimated_diameter.meters.estimated_diameter_min
                  )}
              </p>
            </div>
          </div>

          <div className="asteroide">
            <p className="asteroide-name">É potencialmente perigoso:</p>
            {asteroide.is_potentially_hazardous_asteroid ? (
              <p className="perigoso">Sim</p>
            ) : (
              <p className="sem-perigo">Nao</p>
            )}
          </div>

          <div className="asteroide">
            <p className="asteroide-name">É objeto de sentinela:</p>
            {asteroide.is_sentry_object ? (
              <p className="asteroide-value">Sim</p>
            ) : (
              <p className="asteroide-value">Nao</p>
            )}
          </div>

          <div className="asteroide">
            <a
              href="http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3263453"
              target="_blank"
              className="asteroide-link"
            >
              Clique aqui para maiores informações
            </a>
          </div>

          <div className="asteroide-options">
            <Link to="/asteroides">
              <FontAwesomeIcon icon={faArrowLeft} className="options-back" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditCard;
