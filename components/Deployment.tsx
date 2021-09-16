import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import { Deployment as DeploymentType, Maybe } from "../data/projects";
import CustomLink from "../components/CustomLink";
import { AiOutlineLink as LinkIcon } from "react-icons/ai";
import { FaGooglePlay as GooglePlay } from "react-icons/fa";
import { IoLogoGithub as GithubIcon } from "react-icons/io";

function Deployment(props: {
  deployment: DeploymentType;
  repo: Maybe<string>;
}): React.ReactElement {
  return (
    <div className="px-6  lg:px-10 pb-4 dark:text-white">
      <span className="text-2xl lg:text-2xl font-bold">Deployments</span>
      <div className="flex space-x-2">
        {props.deployment.web && (
          <CustomLink
            text="Web"
            Icon={<LinkIcon />}
            color="#336791"
            link={props.deployment.web}
          />
        )}
        {props.deployment.android && (
          <CustomLink
            text="Android"
            Icon={<GooglePlay />}
            color="#56A036"
            link={props.deployment.android}
          />
        )}
        {props.repo && (
          <CustomLink
            text="GitHub"
            Icon={<GithubIcon />}
            color="rgba(75, 85, 99)"
            link={props.repo}
          />
        )}
      </div>
    </div>
  );
}

export default Deployment;
