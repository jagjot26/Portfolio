import React from "react";

interface CustomTagProps {
  color: string;
  value: string;
}

function CustomTag(props: CustomTagProps): React.ReactElement {
  return (
    <div
      style={{
        backgroundColor: `${props.color}`,
        fontSize: ".65rem",
        padding: ".2rem .3rem",
        borderRadius: ".2rem",
      }}
    >
      {props.value}
    </div>
  );
}

export default CustomTag;
