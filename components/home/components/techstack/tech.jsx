import React from "react";

const STACK = [
  "Node js",
  "React js",
  "CSS",
  "SCSS",
  "JavaScript",
  "Next js",
  "Responsive Design",
  "Tailwind CSS",
  "Bootstrap",
  "User Authorization",
  "Express js",
  "REST API",
  "GraphQL",
  "MongoDB",
  "Firebase",
  "Cloudinary",
  "Github",
  "Github CLI",
  "heroku",
  "adobe XD",
  "Figma",
];

function TECH() {
  return (
    <div className="flex flex-wrap gap-4 capitalize">
      {STACK.map((item, key) => {
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
