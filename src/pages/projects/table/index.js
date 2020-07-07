/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// Style
import "./styles.css";
// Components

function Table({ data }) {
  console.log(data);
  // const projetos = data.map((projeto) => {
  //   const see = (
  //     <Link to={`projetos/${projeto.id}`}>
  //       <FontAwesomeIcon icon={faSearch} />
  //     </Link>
  //   );
  //   let addOption = {
  //     ...projeto,
  //     see,
  //   };
  //   return addOption;
  // });
  // const columns = [
  //   { dataField: "title", text: "Titulo", style: { textAlign: "center" } },
  //   {
  //     dataField: "status",
  //     text: "Status",
  //     style: { textAlign: "center" },
  //   },
  //   {
  //     dataField: "see",
  //     text: "Visualizar",
  //     style: { textAlign: "center" },
  //   },
  // ];

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
}

export default Table;
