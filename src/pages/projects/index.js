import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// API
import apiGet from "../../services/api";
// Style
import "./styles.css";
// Components

function Projetos() {
  const [projetos, setProjetos] = useState({});
  const [searchAvanced, setSearchAvanced] = useState(false);

  useEffect(() => {
    searchAsteroids();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchAsteroids = async () => {
    // setProjetos([]);
    //  https://api.nasa.gov/techport/api/projects/17792?api_key=DEMO_KEY
    // https://api.nasa.gov/techport/api/specification?api_key=DEMO_KEY
    // https://api.nasa.gov/techport/api/projects
    apiGet("techport/api/projects").then((result) => console.log(result.data));

    apiGet("techport/api/projects/17792").then((result) => {
      setProjetos(result.data.project);
    });
  };

  return (
    <div className="size">
      <div className="card-primary">
        <div className="title-area">
          <h3>Pesquisar:</h3>
          <input type="text" />
          <button onClick={() => setSearchAvanced(true)}>
            Pesquisa Avançada
          </button>
        </div>
      </div>
      {searchAvanced && (
        <div className="card-primary">
          <div className="title-area">
            <h3>Pesquisa Avançada:</h3>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>Pesquisar</button>
          </div>
        </div>
      )}
      <div className="card-list">
        <div className="card-projects">
          <div className="info">
            <h3 className="title">{projetos.title}</h3>
          </div>
          {/* <div className="info">
            <h4>{projetos.description}</h4>
          </div> */}
          <div className="info">
            <h4>See more</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projetos;

/*
additionalTas: []
benefits: "The anti-reflection coating (ARC) technology to be developed in the proposed program may be used to increase the efficiency of the multi-junction, Ge-based solar cells currently in use in many NASA applications.  It may also be used to increase the efficiency of forthcoming solar cells containing four or more junctions.  The ARC technology is also applicable to the lightweight, high-efficiency epitaxial lift-off (ELO) solar cell technology that has been developed by MicroLink.  It will therefore be possible to combine the increased efficiency enabled by the new ARC technology with the, ELO solar cells, which will enable a new generation of lightweight, high-efficiency solar panels which will be key to enabling solar electric propulsion (SEP).   Similarly, the new anti-reflection coating technology can be used to enhance the efficiency of solar cells for unmanned aerial vehicle (UAV) applications.<br /><br />The anti-reflection coating (ARC) technology to be developed in the proposed program may be used to increase the efficiency of the multi-junction, Ge-based solar cells currently in use in many commercial applications.  It may also be used to increase the efficiency of forthcoming solar cells containing four or more junctions.  The ARC technology is also applicable to the lightweight, high-efficiency epitaxial lift-off (ELO) solar cell technology that has been developed by MicroLink.  It will therefore be possible to combine the increased efficiency enabled by the new ARC technology with the, ELO solar cells, which will enable a new generation of lightweight, high-efficiency solar panels for commercial applications.   Similarly, the new anti-reflection coating technology can be used to enhance the efficiency of solar cells for unmanned aerial vehicle (UAV) applications.  Solar cells act as a supplement to the batteries that are used to power some of the current generation of small UAVs.  Increasing cell efficiency will result in further endurance enhancement.  Lightweight, high-efficiency cells are an enabling technology for high altitude, long endurance (HALE) UAVs, such as DARPA Vulture.   Lightweight, high-efficiency solar cells may be used in solar sheets for generation of electricity for high-value, off-grid applications, such as power generation for military field deployments, civilian outdoors and camping, and supplementary power for mobile devices such as phones."
closeoutDocuments: (2) ["https://techport.nasa.gov/file/23801", "https://techport.nasa.gov/file/21618"]
description: "MicroLink Devices will increase the efficiency of multi-junction solar cells by designing and demonstrating advanced anti-reflection coatings (ARCs) that will provide a better broadband spectral response than that of conventional anti-reflection coatings.  Advanced coatings of this nature are needed to realize the full performance of the forthcoming generation of multi-junction solar cells, which will contain four or more junctions.  Two approaches to improving the performance of the antireflection coatings will be investigated:   *  develop multilayer dielectric antireflection coatings incorporating LaTiO3 to achieve significantly improved optical coupling between the coverglass and cell at the ultraviolet and infrared ends of the spectral range of interest; and  *  develop a structure and corresponding fabrication process to oxidize the Al-containing window layer in order to reduce the absorption of light at the short-end of the spectral range of interest, thus providing extra useable photons to the cell.     These two technologies will be integrated into a hybrid design which will provide the best possible coupling of light from cover glass to cell in order to achieve the highest possible efficiency in next-generation devices containing four or more junctions.  It is expected that the new coatings will enable a relative efficiency increase of at least 7%, corresponding to a 2.5% absolute efficiency increase.  The reliability and radiation tolerance of these materials and the solar cells incorporating the new designs will be tested."
endDate: "Jun 2017"
id: 17792
lastUpdated: "2018-10-10"
leadOrganization: {name: "Glenn Research Center", type: "NASA Center", acronym: "GRC", city: "Cleveland", state: "OH", …}
libraryItems: (2) [{…}, {…}]
primaryTas: (3) [{…}, {…}, {…}]
principalInvestigators: ["Victor C Elarde"]
programDirectors: ["Jennifer L Gustetic"]
programManagers: ["Carlos Torrez"]
projectManagers: ["Anna Maria T Pal"]
responsibleMissionDirectorateOrOffice: "Space Technology Mission Directorate"
responsibleProgram: "SBIR/STTR"
startDate: "Apr 2014"
status: "Completed"
supportingOrganizations: [{…}]
technologyMaturityCurrent: "6"
technologyMaturityEnd: "6"
technologyMaturityStart: "3"
title: "Development of Advanced Anti-Reflection Coatings for High Performance Solar Energy Applications, Phase II"
workLocations: ["Illinois"]
*/
