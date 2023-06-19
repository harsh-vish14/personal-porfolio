import React, { useState } from "react";
import alert from "../../src/assets/alert_gif.gif";

function ALERT() {
  const [crossClicked, setCrossClicked] = useState(false);
  return (
    <>
      {!crossClicked && (
        <div className="fixed z-50 bottom-5 right-5 h-fit rounded-md bg-[#EBEBEB]">
          <div
            className="absolute top-2 right-2 scale-50 cursor-pointer"
            onClick={() => {
              setCrossClicked(true);
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.24219 3L28.8886 28.6464"
                stroke="#252831"
                stroke-width="5"
                stroke-linecap="round"
              />
              <path
                d="M3 28.6464L28.6464 3"
                stroke="#252831"
                stroke-width="5"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div>
            <img src={alert} className="h-36 w-52 m-auto" />
          </div>
          <div className="font-semibold text-xl uppercase text-center px-5 pb-5 w-56 text-primary-dark">
            use Computer for better experience
          </div>
        </div>
      )}
    </>
  );
}

export default ALERT;
