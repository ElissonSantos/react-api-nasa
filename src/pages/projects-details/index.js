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

function ProjectsDetails() {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [project, setProject] = useState({});
  const [notFound, setNotFound] = useState(true);

  useEffect(() => {
    searchProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchProject = async () => {
    apiGet(`techport/api/projects/${id}`)
      .then((result) => {
        result && setProject(result.data.project);
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
            <div className="project-card">
              <h3 className="project-not-found">
                Não foi encontrado nenhum projeto com este ID.
              </h3>
              <div className="project-options">
                <Link to="/projetos">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="options-back"
                  />
                </Link>
              </div>
            </div>
          ) : (
            <div key={project.id} className="project-card">
              <div className="project-options">
                <Link to="/projetos">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="options-back"
                  />
                </Link>
              </div>
              <div className="project">
                <p className="project-name">Titulo:</p>
                <p className="project-value">{project.title}</p>
              </div>

              <div className="project">
                <p className="project-name">Beneficios:</p>
                <p className="project-value">{project.benefits}</p>
              </div>

              <div className="project-many">
                <div className="project">
                  <p className="project-name">Data Inicial:</p>
                  <p className="project-value">{project.startDate}</p>
                </div>
                <div className="project">
                  <p className="project-name">Data Final:</p>
                  <p className="project-value">{project.endDate}</p>
                </div>
                <div className="project">
                  <p className="project-name">Ultima Atualização:</p>
                  <p className="project-value">{project.lastUpdated}</p>
                </div>
              </div>

              <div className="project-many">
                <div className="project">
                  <p className="project-name">Líder:</p>
                  <p className="project-value">
                    {project.leadOrganization.name}
                  </p>
                </div>

                <div className="project">
                  <p className="project-name">Organização:</p>
                  <p className="project-value">
                    {project.leadOrganization.type}
                  </p>
                </div>

                <div className="project">
                  <p className="project-name">Cidade:</p>
                  <p className="project-value">
                    {project.leadOrganization.city}
                  </p>
                </div>

                <div className="project">
                  <p className="project-name">Estado:</p>
                  <p className="project-value">
                    {project.leadOrganization.state}
                  </p>
                </div>
              </div>

              <div className="project">
                <p className="project-name">
                  Direção ou Escritório responsável pela Missão:
                </p>
                <p className="project-value">
                  {project.responsibleMissionDirectorateOrOffice}
                </p>
              </div>

              <div className="project-many">
                <div className="project">
                  <p className="project-name">Responsável pelo programa:</p>
                  <p className="project-value">{project.responsibleProgram}</p>
                </div>

                <div className="project">
                  <p className="project-name">Status:</p>
                  <p className="project-value">{project.status}</p>
                </div>
              </div>

              <div className="project-many">
                <div className="project">
                  <p className="project-name">Maturidade Inicial:</p>
                  <p className="project-value">
                    {project.technologyMaturityStart}
                  </p>
                </div>
                <div className="project">
                  <p className="project-name">Maturidade Atual:</p>
                  <p className="project-value">
                    {project.technologyMaturityCurrent}
                  </p>
                </div>

                <div className="project">
                  <p className="project-name">Maturidade Final:</p>
                  <p className="project-value">
                    {project.technologyMaturityEnd}
                  </p>
                </div>
              </div>

              <div className="project">
                <p className="project-name">Descrição:</p>
                <p className="project-value">{project.description}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectsDetails;
