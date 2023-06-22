import React, { useEffect, useRef, useState } from "react";

const PROJECTS = [
  {
    image: "image 1",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing lorem",
  },
  {
    image: "image 2",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing lorem",
  },
  {
    image: "image 3",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing lorem",
  },
];

function PROJECT() {
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

  const [showProjectIndex, setShowProjectIndex] = useState(0);

  return (
    <div className="pt-20">
      <div className="py-4 font-bold text-3xl">PROJECTS</div>
      <div className="flex items-start">
        <div className="bg-[#393C45] flex justify-center items-center capitalize text-5xl w-1/2 rounded-lg sticky h-[80vh] top-28 self-start">
          {PROJECTS[visibleDivId || 0].image}
        </div>
        <div className="w-1/2 ">
          {PROJECTS.map((item, key) => {
            return (
              <div className="ml-auto h-[100vh]" key={key}>
                <div className="ml-3" ref={createRefAndUpdate(key)} id={key}>
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PROJECT;
