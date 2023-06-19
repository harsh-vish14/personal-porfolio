import React from "react";
import me_image from "../../../src/assets/aboutme_img.png";

function ABOUTME() {
  return (
    <div className="mb-10 pt-20">
      <div className="py-4 font-bold text-3xl">ABOUT ME</div>
      <div className="flex md:flex-row flex-col items-center justify-around gap-5 mt-10">
        <div className="about-me-img mr-5 mb-10">
          <img src={me_image} className="max-h-[200px] max-w-[200px]" />
        </div>
        <div className="text-xl max-w-xl">
          Hi
          <div
            style={{
              width: 30,
              float: "left",
              height: 10,
              marginRight: 10,
              marginTop: -6,
            }}
          >
            <img
              src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
              style={{ height: 30 }}
            />
          </div>
          , I'm Harshkumar Vishwakarma, a curious and passionate learner with a
          BE degree in Engineering from Thakur College. With a remarkable
          academic record, maintaining a GPA of 3.65, I am always eager to learn
          new technologies and challenge myself to work on new projects. As an
          independent developer, I take full responsibility for my work and am
          always ready for a new challenge.{" "}
          <span>
            <a
              className="font-bold no-underline text-pink hover:opacity-90"
              href="#ContactMe"
            >
              Connect
            </a>
          </span>{" "}
          with me to learn more about my experience and expertise.
        </div>
      </div>
    </div>
  );
}

export default ABOUTME;
