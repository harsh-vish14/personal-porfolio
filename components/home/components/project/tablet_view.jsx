import React from "react";
import { PROJECTS } from "./projects.json";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../../../ui/tooltip";

function TABLE_VIEW_PROJECT() {
  return (
    <div>
      {PROJECTS.map((item, index) => {
        return (
          <>
            <div
              className="bg-[#393C45] w-[80vw] rounded-lg h-[80vh] m-auto relative"
              style={{
                background: `url(${item.image}) center center / contain no-repeat`,
              }}
            >
              <div
                className="absolute top-5 -left-5 hidden sm:block"
                style={{ filter: "drop-shadow(0px 0px 5px #252831)" }}
              >
                <img
                  src={item.logo}
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
            <>
              <div className="md:text-4xl text-xl font-bold flex items-center justify-center mb-5">
                <a
                  href={item.deploy || "#"}
                  target="_blank"
                  className="w-fit text-pink hover:opacity-60"
                >
                  {item.title}
                </a>
                <div></div>
                {/* tooltip Start */}
                <Tooltip>
                  <TooltipTrigger>
                    {
                      <a href={item.github || "#"} target="_blank">
                        <img
                          src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
                          height="30px"
                          width="30px"
                          className="ml-3"
                          style={{ borderRadius: "50%" }}
                        />
                      </a>
                    }
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>github / Code</p>
                  </TooltipContent>
                </Tooltip>
                {/* tooltip end */}
              </div>
              <div className="text-xl">{item.description}</div>
              <div className="text-lg flex flex-wrap gap-2 mb-16 mt-5">
                {item.stack.map((tool, key) => {
                  return (
                    <div className="text-lg uppercase bg-[#393C4590] p-3 rounded-md">
                      {tool}
                    </div>
                  );
                })}
              </div>
            </>
          </>
        );
      })}
    </div>
  );
}

export default TABLE_VIEW_PROJECT;
