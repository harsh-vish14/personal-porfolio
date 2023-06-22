import React from "react";
import WINDOW_VIEW_PROJECT from "./window_view";
import TABLE_VIEW_PROJECT from "./tablet_view";

function PROJECT() {
  return (
    <div className="pt-20">
      <div className="py-4 font-bold text-3xl">PROJECTS</div>
      <div className="hidden lg:block">
        <WINDOW_VIEW_PROJECT />
      </div>
      <div className="block lg:hidden">
        <TABLE_VIEW_PROJECT />
      </div>
    </div>
  );
}

export default PROJECT;
