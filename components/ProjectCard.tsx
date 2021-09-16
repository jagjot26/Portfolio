import React from "react";
import styled from "styled-components";
import { useTheme } from "next-themes";

interface CardDivProps {
  dark: boolean;
}

interface ProjectCardProps {
  title: string;
  banner: string;
  description: string;
  onClick: VoidFunction;
}

function ProjectCard(props: ProjectCardProps): React.ReactElement {
  const { description, title, banner } = props;
  const { resolvedTheme } = useTheme();

  return (
    <CardDiv
      onClick={props.onClick}
      dark={resolvedTheme === "dark" ? true : false}
      className="shadow-md dark:text-white cursor-pointer rounded-md border-gray-400 dark:border-gray-700"
    >
      <BannerImage src={banner} alt="" />
      <div className="p-3">
        <TitleText>{title}</TitleText>
        <DescriptionText>
          {description.length > 60
            ? `${description.substring(0, 60)}...`
            : description}
        </DescriptionText>
      </div>
    </CardDiv>
  );
}

export default ProjectCard;

const CardDiv = styled.div`
  border: ${(props: CardDivProps) =>
    props.dark ? ".5px solid #292828" : ".5px solid #eee"};
`;

const BannerImage = styled.img`
  object-position: center;
  border-radius: 0.37rem 0.37rem 0 0;
  object-fit: cover;
  height: 12rem;
  width: 100%;
`;

const TitleText = styled.p`
  font-weight: 600;
  font-size: 1.19rem;
`;

const DescriptionText = styled.p`
  font-weight: 300;
  font-size: 0.9rem;
`;
