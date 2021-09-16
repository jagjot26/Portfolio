import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";

function Screenshots(props: { screenshots: string[] }): React.ReactElement {
  return (
    <div className="px-6  lg:px-10 pb-4 dark:text-white">
      <span className="text-2xl lg:text-2xl font-bold">Screenshots</span>
      <ScrollContainer className="flex space-x-2 mt-1">
        {props.screenshots.map((screenshot) => (
          <ScreenshotImage key={screenshot} src={screenshot} alt="" />
        ))}
      </ScrollContainer>
    </div>
  );
}

export default Screenshots;

const ScreenshotImage = styled.img`
  height: 470px;
  width: 302px;
  border-radius: 0.3rem;
`;
