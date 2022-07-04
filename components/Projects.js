import React from "react";
import CardsGridView from "./CardsGridView";

const Projects = ({ projects }) => {
  return (
    <div className="page-100">
      <section className="container m-auto">
        <h2>My recent Projects</h2>
        <div className="mt-10">
          <CardsGridView data={projects} />
        </div>
      </section>
    </div>
  );
};

export default Projects;
