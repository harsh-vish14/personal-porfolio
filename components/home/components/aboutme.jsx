import React from "react";
import me_image from "../../../src/assets/aboutme_img.png";

function ABOUTME() {
  return (
    <div className="h-screen pt-20 ">
      <div className="py-4 font-bold text-3xl">ABOUT ME</div>
      <div className="flex md:flex-row flex-col items-center justify-around gap-5">
        <div className="about-me-img">
          <img
            src={me_image}
            className="min-h-[100px] min-w-[100px] max-h-[300px] max-w-[300px]"
          />
        </div>
        <div className="text-xl max-w-lg ">
          Hi 👋🏽, I am Harshkumar Vishwakarma, a curious and passionate learner
          currently pursuing a BE degree in Engineering and Technology at Thakur
          College. With a remarkable academic record, maintaining a GPA of 3.65,
          I has developed a keen interest in exploring new technologies and
          gaining insights into the industry.
        </div>
      </div>
    </div>
  );
}

export default ABOUTME;
