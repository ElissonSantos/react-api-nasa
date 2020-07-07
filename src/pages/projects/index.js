/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import "antd/dist/antd.css";
// API
import apiGet from "../../services/api";
// Style
import "./styles.css";
// Components
import Loading from "../../components/loading";
import Table from "./table";

function Projects() {
  const [isLoading, setLoading] = useState(true);
  const [projectsData, setProjectsData] = useState([]);
  const [projectsShow, setProjectsShow] = useState([]);
  const [projectsId, setProjectsId] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDate, setShowDate] = useState(null);
  const [textSearch, setTextSearch] = useState();

  useEffect(() => {
    const day = String(selectedDate.getDate()).padStart(2, "0");
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const year = selectedDate.getFullYear();
    setShowDate(`${year}-${month}-${day}`);
  }, [selectedDate]);

  useEffect(() => {
    setLoading(true);
    filterProjects();
  }, [textSearch]);

  useEffect(() => {
    showDate && searchIds();
  }, [showDate]);

  useEffect(() => {
    projectsId.length && searchProjects();
  }, [projectsId]);

  const searchIds = async () => {
    setLoading(true);
    const result = await apiGet("techport/api/projects", {
      updatedSince: showDate,
    });
    result.data.projects.projects
      ? setProjectsId(result.data.projects.projects)
      : setLoading(false);
  };

  const searchProjects = async () => {
    setProjectsData([]);
    let arrayProjects = [];
    for (let i = 0; i < projectsId.length; i++) {
      const data = await apiGet(`techport/api/projects/${projectsId[i].id}`);
      arrayProjects.push(data.data.project);
    }
    setProjectsData(arrayProjects);
    setProjectsShow(arrayProjects);
    setLoading(false);
  };

  const filterProjects = () => {
    let projectsFilter = projectsData.filter((project) => {
      return project.title.toLowerCase().indexOf(textSearch.toLowerCase()) > -1;
    });
    setProjectsShow(projectsFilter);
    setLoading(false);
  };

  return (
    <div className="size">
      <div className="card-primary">
        <div className="card-primary-search">
          <h3>Pesquisar:</h3>
          <input
            className="input-project"
            type="text"
            placeholder="Digite aqui"
            onChange={(e) => setTextSearch(e.target.value)}
          />
        </div>
        <div className="project-date">
          <p className="date-text">Ultima atualização no Projeto:</p>
          <DatePicker
            disabledDate={(d) => !d || d.isAfter(new Date())}
            defaultValue={moment(selectedDate, "DD/MM/YYYY")}
            format={["DD/MM/YYYY"]}
            onChange={(date) => date && setSelectedDate(date._d)}
          />
        </div>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="card-table">
          {projectsShow.length ? (
            <Table data={projectsShow} />
          ) : (
            <h3>Não há projetos para mostrar</h3>
          )}
        </div>
      )}
    </div>
  );
}

export default Projects;
