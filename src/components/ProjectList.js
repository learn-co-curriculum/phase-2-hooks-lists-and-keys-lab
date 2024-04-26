import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div className="projects-list"> {projects.map((project) => (
      <ProjectItem key={project.id} {...project} />
    ))}
      
    </div>
  );
}

export default ProjectList;
