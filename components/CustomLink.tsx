import React from "react";

function CustomLink(props: {
  Icon: React.ReactNode;
  color: string;
  link: string;
  text: string;
}): React.ReactElement {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="outline-none"
    >
      <div
        className="mt-1 flex pl-1 pr-1 pt-0.5 pb-0.5 space-x-2 items-center text-white font-light rounded-md hover:opacity-80"
        style={{ backgroundColor: props.color, fontSize: ".82rem" }}
      >
        {props.Icon}
        <p>{props.text}</p>
      </div>
    </a>
  );
}

export default CustomLink;
