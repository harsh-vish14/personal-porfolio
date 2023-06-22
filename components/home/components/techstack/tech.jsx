import React from "react";
import STACK from "./techs.json";

function TECH() {
  return (
    <div className="flex flex-wrap gap-4 capitalize">
      {STACK.TOOLS.map((item, key) => {
        return (
          <div
            className="p-5 rounded-md bg-[#393C45] w-fit hover:bg-[#393C4560]"
            key={key}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default TECH;
