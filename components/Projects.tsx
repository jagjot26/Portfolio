import React from "react";
import styled from "styled-components";
import { Project, projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects(): React.ReactElement {
  return (
    <div className="ml-6 md:ml-8 lg:ml-14  dark:text-white mt-5 mr-5 md:mr-8 lg:mr-14">
      <TitleText className="">Projects</TitleText>
      <DescriptionText className="">
        A list of projects I've worked on
      </DescriptionText>
      <GridContainer>
        {projects.map((project, id) => (
          <ProjectCard
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 0.7rem;
`;

const TitleText = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
`;

const DescriptionText = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
`;
