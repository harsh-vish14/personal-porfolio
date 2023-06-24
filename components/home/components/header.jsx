import React from "react";
import me from "../../../src/assets/harsh_photo.png";

function HEADER() {
  return (
    <header className="flex items-center flex-col-reverse lg:flex-row h-screen">
      <div className="font-bold md:text-7xl text-5xl relative flex flex-col gap-3 -mt-16">
        <div>Harshkumar</div>
        <svg
          height="63"
          className="w-[90%] absolute top-[5px] md:top-[30px] z-[-2] left-[-10px]"
          viewBox="0 0 549 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 47C16 47 176.09 15 268.263 15C360.436 15 533 47 533 47"
            stroke="#C941DF"
            stroke-opacity="0.92"
            stroke-width="30"
            stroke-linecap="round"
          />
        </svg>

        <div>Vishwakarma.</div>
        <svg
          height="63"
          className="w-full absolute top-[65px] md:top-[118px] z-[-2] left-[-10px]"
          viewBox="0 0 549 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 47C16 47 176.09 15 268.263 15C360.436 15 533 47 533 47"
            stroke="#C941DF"
            stroke-opacity="0.92"
            stroke-width="30"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div className="-m-28 -z-10">
        {<img src={me} className="h-[624px] min-w-[453px]" />}
      </div>
      <div className="hidden lg:visible xl:ml-24 lg:flex flex-col gap-3 mt-10">
        <div className="opacity-[44%] text-2xl font-semibold">
          Introduction -
        </div>
        <div className="text-4xl capitalize font-semibold">
          full Stack Web Developer, India
        </div>
        <div className="text-xl capitalize opacity-60">
          bachelor degree Holder, with 3.65 GPA always exploring new tools and
          technology. Always ready to work on projects.
        </div>
        <div className="mt-2 text-lg">
          Lets make your{" "}
          <span className="font-bold uppercase text-xl">Idea</span> come{" "}
          <span className="font-bold uppercase text-xl">Real</span>
        </div>
        <div className="mt-10 text-lg ">
          <a
            href="#ContactMe"
            className="hover:bg-[#393C45] w-fit p-3 rounded-md"
          >
            Lets Connect
          </a>
        </div>
      </div>
    </header>
  );
}

export default HEADER;
