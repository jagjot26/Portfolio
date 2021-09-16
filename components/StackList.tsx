import React from "react";
import SubHeader from "./SubHeader";
import { Stack, StackInfo, WorkStack } from "../data/stack";
import CustomTag from "./CustomTag";

interface StackListProps {
  stackList?: Stack[];
}

function StackList(props: StackListProps): React.ReactElement {
  return (
    <div>
      <SubHeader
        smallText={true}
        title="Skills"
        description={
          <div className="flex space-x-1.5">
            {!props.stackList
              ? WorkStack.map((stack) => {
                  const { color, value } = StackInfo[stack];
                  return (
                    <div key={value} className="pb-1 text-white text-xs">
                      <CustomTag color={color} value={value} />
                    </div>
                  );
                })
              : props.stackList.map((stack) => {
                  const { color, value } = StackInfo[stack];
                  return (
                    <div key={value} className="pb-1 text-white text-xs">
                      <CustomTag color={color} value={value} />
                    </div>
                  );
                })}
          </div>
        }
      />
    </div>
  );
}

export default StackList;
