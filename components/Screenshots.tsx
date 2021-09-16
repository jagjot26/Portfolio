import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import Image from "next/image";

function Screenshots(props: {
  screenshots: string[];
  wide?: boolean;
}): React.ReactElement {
  return (
    <div className="px-6  lg:px-10 pb-4 dark:text-white">
      <span className="text-2xl lg:text-2xl font-bold">Screenshots</span>
      {props.wide && (
        <ScrollContainer className="flex space-x-2 mt-1">
          {props.screenshots.map((screenshot) => (
            // <WideImageDiv>
            //   <Image
            //     loading="eager"
            //     key={screenshot}
            //     src={screenshot}
            //     height={420}
            //     width={800}
            //     layout="intrinsic"
            //     alt=""
            //   />
            // </WideImageDiv>
            <ScreenshotWideImage key={screenshot} src={screenshot} alt="" />
          ))}
        </ScrollContainer>
      )}
      {!props.wide && (
        <ScrollContainer className="flex space-x-2 mt-1">
          {props.screenshots.map((screenshot) => (
            // <ImageDiv>
            //   <Image
            //     loading="eager"
            //     key={screenshot}
            //     src={screenshot}
            //     layout="fill"
            //     alt=""
            //   />
            // </ImageDiv>
            <ScreenshotImage key={screenshot} src={screenshot} alt="" />
          ))}
        </ScrollContainer>
      )}
    </div>
  );
}

export default Screenshots;

const ScreenshotImage = styled.img`
  height: 470px;
  width: 290px;
  border-radius: 0.3rem;
`;

const ScreenshotWideImage = styled.img`
  height: 420px;
  width: 800px;
  border-radius: 0.3rem;
`;

const ImageDiv = styled.div`
  height: 470px;
  width: 302px;
  border-radius: 0.3rem;
`;

const WideImageDiv = styled.div`
  height: 420px;
  width: 800px;
  border-radius: 0.3rem;
`;
