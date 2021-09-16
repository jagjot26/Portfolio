import React from "react";

interface SubHeaderPropsInterface {
  title: string;
  description: React.ReactNode;
  classes?: string;
  children?: React.ReactNode;
  smallText?: Boolean;
}

function SubHeader(props: SubHeaderPropsInterface): React.ReactElement {
  const { title, description, classes, children } = props;
  return (
    <div
      className={`flex flex-col px-6 lg:px-10 pb-4 dark:text-white ${classes}`}
    >
      <span className="text-2xl lg:text-2xl font-bold mb-1">{title}</span>
      <span className="font-light text-md">{description}</span>
      {children}
    </div>
  );
}

export default SubHeader;
