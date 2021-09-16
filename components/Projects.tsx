import React from "react";
import styled from "styled-components";
import { Project, projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  activeProjectSetter: (project: Project) => void;
}

function Projects(props: ProjectsProps): React.ReactElement {
  const onClick = (project: Project): void => {
    props.activeProjectSetter(project);
  };

  return (
    <div className="ml-6 md:ml-8 lg:ml-14  dark:text-white mr-5 md:mr-8 lg:mr-14">
      <TitleText>Projects</TitleText>
      <DescriptionText>{"A list of projects I've worked on"}</DescriptionText>
      <GridContainer>
        {projects.map((project, id) => (
          <ProjectCard
            onClick={() => onClick(project)}
            key={id}
            title={project.title}
            banner={project.banner}
            description={project.description}
          />
        ))}
      </GridContainer>
    </div>
  );
}

export default Projects;

const GridContainer = styled.div`
  padding-top: 1.3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 0.7rem;
`;

const TitleText = styled.p`
  font-weight: 700;
  font-size: 1.75rem;
`;

const DescriptionText = styled.p`
  font-weight: 300;
  font-size: 1rem;
`;
