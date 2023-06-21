import React from "react";
import tech_stack_me from "../../../../src/assets/tech_stack_me.png";
import TECH from "./tech";

function TECHSTACK() {
  return (
    <div>
      <div className="py-4 font-bold text-3xl pt-20">TECH STACK</div>
      <div className="uppercase">all tools and tech i have worked with</div>
      <div className="lg:flex justify-around items-center gap-x-20 max-w-6xl mt-10 m-auto">
        <div className="invisible lg:visible">
          <img
            src={tech_stack_me}
            className="lg:max-h-[300px] lg:max-w-[300px] max-h-0"
          />
        </div>
        <div>
          <TECH />
        </div>
      </div>
    </div>
  );
}

export default TECHSTACK;
