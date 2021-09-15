import React from "react";

interface HeaderTextProps {
  text: string;
  bgColor?: string;
  classes?: string;
  onclick?: VoidFunction;
}

function HeaderText(props: HeaderTextProps) {
  return (
    <span
      onClick={props.onclick}
      style={{ padding: ".22rem .52rem" }}
      className={`rounded-lg ${props.bgColor} dark:text-gray-900 cursor-pointer hover:opacity-70 ${props.classes}`}
    >
      {props.text}
    </span>
  );
}

export default HeaderText;
