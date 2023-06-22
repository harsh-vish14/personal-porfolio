import React from "react";
import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "./projects.json";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../../../ui/tooltip";

function WINDOW_VIEW_PROJECT() {
  const divRefs = useRef([]);
  const [visibleDivId, setVisibleDivId] = useState(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Adjust as per your requirement (0.6 means 60% of the element should be visible)
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;
        const divId = target.id;

        if (isIntersecting) {
          console.log(divId + " is intersecting");
          setVisibleDivId(divId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    divRefs.current.forEach((divRef) => {
      observer.observe(divRef.current);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const createRefAndUpdate = (index) => {
    const ref = useRef(null);
    divRefs.current[index] = ref;
    return ref;
  };

  return (
    <div className="flex items-start">
      <div
        className="bg-[#393C45] w-1/2 rounded-lg sticky h-[70vh] top-32 self-start"
        style={{
          background: `url(${
            PROJECTS[visibleDivId || 0].image
          }) center center / contain no-repeat`,
        }}
      >
        <div
          className="absolute top-5 -left-5"
          style={{ filter: "drop-shadow(0px 0px 5px #252831)" }}
        >
          <img
            src={PROJECTS[visibleDivId || 0].logo}
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
      <div className="w-1/2">
        {PROJECTS.map((item, key) => {
          return (
            <div className="ml-auto h-[100vh]" key={key}>
              <div className="ml-5" ref={createRefAndUpdate(key)} id={key}>
                <div className="md:text-4xl text-xl font-bold mb-2 flex items-center">
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
                <div className="text-lg flex flex-wrap gap-2">
                  {item.stack.map((tool, key) => {
                    return (
                      <div className="text-lg uppercase bg-[#393C4590] p-3 rounded-md">
                        {tool}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WINDOW_VIEW_PROJECT;
