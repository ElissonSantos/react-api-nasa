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
import { Col, Row } from "antd";

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
            <Col className="asteroid-card" xs={15} md={18} lg={24}>
              <h3 className="asteroid-not-found">
                Não foi encontrado nenhum asteroide com este ID.
              </h3>
            </Col>
          ) : (
            <Col
              key={asteroid.id}
              className="asteroid-card"
              xs={24}
              md={24}
              lg={24}
            >
              <Row className="asteroid">
                <Col xs={8} md={8} lg={8}>
                  <p className="asteroid-name">Nome:</p>
                </Col>
                <Col xs={14} md={14} lg={14}>
                  <p className="asteroid-value">{asteroid.name}</p>
                </Col>
              </Row>

              <Row className="asteroid">
                <Col xs={8} md={8} lg={8}>
                  <p className="asteroid-name">Magnitude:</p>
                </Col>
                <Col xs={14} md={14} lg={14}>
                  <p className="asteroid-value">
                    {asteroid.absolute_magnitude_h}
                  </p>
                </Col>
              </Row>

              <Row className="asteroid-tamanho">
                <Col xs={20} md={20} lg={20}>
                  <p className="asteroid-name-size">Tamanho estimado em:</p>
                </Col>
              </Row>

              <Row className="asteroid">
                <Col xs={5} md={4} lg={3}>
                  <p className="asteroid-diameter">Máximo:</p>
                </Col>

                <Col className="asteroid" xs={6} md={5} lg={4}>
                  <p className="asteroid-name">Pés:</p>
                  <p className="asteroid-size">
                    {asteroid.estimated_diameter &&
                      Math.round(
                        asteroid.estimated_diameter.feet.estimated_diameter_max
                      )}
                  </p>
                </Col>

                <Col className="asteroid" xs={11} md={9} lg={6}>
                  <p className="asteroid-name">Milhas:</p>
                  <p className="asteroid-size">
                    {asteroid.estimated_diameter &&
                      asteroid.estimated_diameter.miles.estimated_diameter_max}
                  </p>
                </Col>

                <Col className="asteroid" xs={11} md={9} lg={6}>
                  <p className="asteroid-name">Km:</p>
                  <p className="asteroid-size">
                    {asteroid.estimated_diameter &&
                      asteroid.estimated_diameter.kilometers
                        .estimated_diameter_max}
                  </p>
                </Col>

                <Col className="asteroid" xs={6} md={5} lg={4}>
                  <p className="asteroid-name">Metros:</p>
                  <p className="asteroid-size">
                    {asteroid.estimated_diameter &&
                      Math.round(
                        asteroid.estimated_diameter.meters
                          .estimated_diameter_max
                      )}
                  </p>
                </Col>
              </Row>

              <Row className="asteroid">
                <Col xs={5} md={4} lg={3}>
                  <p className="asteroid-diameter">Minimo:</p>
                </Col>

                <Col className="asteroid" xs={6} md={5} lg={4}>
                  <p className="asteroid-name">Pés:</p>
                  <p className="asteroid-size">
                    {asteroid.estimated_diameter &&
                      Math.round(
                        asteroid.estimated_diameter.feet.estimated_diameter_min
                      )}
                  </p>
                </Col>

                <Col className="asteroid" xs={11} md={9} lg={6}>
                  <p className="asteroid-name">Milhas:</p>
                  <p className="asteroid-size">
                    {asteroid.estimated_diameter &&
                      asteroid.estimated_diameter.miles.estimated_diameter_min}
                  </p>
                </Col>

                <Col className="asteroid" xs={11} md={9} lg={6}>
                  <p className="asteroid-name">Km:</p>
                  <p className="asteroid-size">
                    {asteroid.estimated_diameter &&
                      asteroid.estimated_diameter.kilometers
                        .estimated_diameter_min}
                  </p>
                </Col>

                <Col className="asteroid" xs={6} md={5} lg={4}>
                  <p className="asteroid-name">Metros:</p>
                  <p className="asteroid-size">
                    {asteroid.estimated_diameter &&
                      Math.round(
                        asteroid.estimated_diameter.meters
                          .estimated_diameter_min
                      )}
                  </p>
                </Col>
              </Row>

              <Row className="asteroid">
                <Col xs={8} md={8} lg={8}>
                  <p className="asteroid-name">É potencialmente perigoso:</p>
                </Col>
                <Col xs={14} md={14} lg={14}>
                  {asteroid.is_potentially_hazardous_asteroid ? (
                    <p className="danger">Sim</p>
                  ) : (
                    <p className="no-danger">Nao</p>
                  )}
                </Col>
              </Row>

              <Row className="asteroid">
                <Col xs={8} md={8} lg={8}>
                  <p className="asteroid-name">É objeto de sentinela:</p>
                </Col>
                <Col xs={14} md={14} lg={14}>
                  {asteroid.is_sentry_object ? (
                    <p className="asteroid-value">Sim</p>
                  ) : (
                    <p className="asteroid-value">Nao</p>
                  )}
                </Col>
              </Row>

              <Row className="asteroid">
                <Col xs={20} md={20} lg={20}>
                  <a
                    href={`http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=${asteroid.id}`}
                    target="_blank"
                    className="asteroid-link"
                  >
                    Clique aqui para maiores informações
                  </a>
                </Col>
              </Row>

              <Row>
                <Col className="asteroid-options" xs={24} md={24} lg={24}>
                  <Link to="/asteroides">
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className="options-back"
                    />
                  </Link>
                </Col>
              </Row>
            </Col>
          )}
        </div>
      )}
    </div>
  );
}

export default AsteroidDetails;
