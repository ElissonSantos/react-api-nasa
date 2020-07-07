/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Table } from "antd";
import "antd/dist/antd.css";
// Style
import "./styles.css";
// Components

function TableProjects({ data }) {
  const projetos = data.map((projeto) => {
    const see = (
      <Link to={`projetos/${projeto.id}`}>
        <FontAwesomeIcon icon={faSearch} />
      </Link>
    );
    let addOption = {
      ...projeto,
      key: projeto.id,
      see,
    };
    return addOption;
  });

  const columns = [
    {
      title: "Titulo",
      dataIndex: "title",
      sorter: (a, b) => a.title.length - b.title.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status.length - b.status.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Visualizar",
      dataIndex: "see",
      sorter: (a, b) => a.see.length - b.see.length,
      sortDirections: ["descend", "ascend"],
    },
  ];

  return (
    <Table dataSource={projetos} columns={columns} style={{ width: "100%" }} />
  );
}

export default TableProjects;
