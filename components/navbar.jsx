import logo from "../src/assets/logo.svg";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import React, { useRef, useEffect, useState } from "react";
import { InViewport } from "../src/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

function NAVBAR() {
  const logoRef = useRef(null);

  const sections = ["techStack", "projects", "testimony", "ContactMe"];
  const [linkActive, setlinkActive] = useState({
    techStack: false,
    projects: false,
    testimony: false,
    blogs: false,
    ContactMe: false,
  });

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const visibleSectionId = entry?.target?.id;
      if (entry.isIntersecting) {
        setlinkActive((preItem) => ({
          ...preItem,
          [visibleSectionId]: true,
        }));
        console.log(`visible.  `, visibleSectionId);
      } else {
        setlinkActive((preItem) => ({
          ...preItem,
          [visibleSectionId]: false,
        }));
        console.log(`not visible.  `, visibleSectionId);
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root element
      rootMargin: "0px",
      threshold: 0.3, // The element is considered visible when at least 50% is in the viewport
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      observer.observe(section);
    });

    // Clean up the observer when component unmounts
    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="">
      <div className="#top" ref={logoRef}></div>
      <div
        className="flex items-center justify-center lg:justify-between fixed mx-auto top-0 left-1/2 transform -translate-x-1/2 pl-8 pr-16 z-50"
        style={{
          width: "100%",
          maxWidth: "83.5rem",
          backgroundImage: "linear-gradient(#252831,#252831, #ffff0000)",
        }}
      >
        <div className="sm:visible hidden lg:flex items-center gap-10">
          <div>
            <a
              href="#techStack"
              className={
                linkActive.techStack
                  ? "drop-shadow-[0px_0px_4px_#E54EFE] font-semibold"
                  : ""
              }
            >
              Tech stack
            </a>
          </div>
          <div>
            <a
              href="#projects"
              className={
                linkActive.projects
                  ? "drop-shadow-[0px_0px_4px_#E54EFE] font-semibold"
                  : ""
              }
            >
              Projects
            </a>
          </div>
          <div>
            <a
              href="#testimony"
              className={
                linkActive.testimony
                  ? "drop-shadow-[0px_0px_4px_#E54EFE] font-semibold"
                  : ""
              }
            >
              Testimony
            </a>
          </div>
          <div>
            {/* TODO: make blog section visible once it is completed - DESKTOP NAVBAR LINK */}
            {/* <a
              href="#blogs"
              className={
                linkActive.blogs
                  ? "drop-shadow-[0px_0px_4px_#E54EFE] font-semibold"
                  : ""
              }
            >
              Blogs
            </a> */}
          </div>
        </div>
        <div className="lg:-ml-[230px]">
          {/* tooltip Start */}
          <Tooltip>
            <TooltipTrigger>
              {
                <a href="#top">
                  <img
                    src={logo}
                    className={
                      InViewport(logoRef)
                        ? "scale-50 filter drop-shadow-[0px_0px_5px_#E54EFE] transition ease-in-out hover:drop-shadow-[0px_0px_10px_#E54EFE]"
                        : "scale-50 hover:drop-shadow-[0px_0px_10px_#E54EFE]"
                    }
                  />
                </a>
              }
            </TooltipTrigger>
            <TooltipContent>
              <p>Top of Page</p>
            </TooltipContent>
          </Tooltip>
          {/* tooltip end */}
        </div>
        <div className="lg:visible hidden lg:flex">
          <a
            href="#ContactMe"
            className={
              linkActive.ContactMe
                ? "drop-shadow-[0px_0px_4px_#E54EFE] font-semibold"
                : ""
            }
          >
            Contact Me
          </a>
        </div>

        {/* mobile view */}
        <div className="lg:hidden visible absolute right-5">
          <Sheet>
            <SheetTrigger>
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H12M4 18H20"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </SheetTrigger>
            <SheetContent size="full">
              <div className="text-6xl flex flex-col gap-10 justify-center h-full items-center whitespace-nowrap">
                <div>
                  <div>
                    <a
                      href="#techStack"
                      className={
                        linkActive.techStack
                          ? "drop-shadow-[0px_0px_4px_#E54EFE] font-semibold"
                          : ""
                      }
                    >
                      Tech stack
                    </a>
                    <span
                      className={
                        linkActive.techStack
                          ? "absolute top-1/2 left-1/2 text-9xl font-black -translate-x-1/2 -translate-y-1/2 -z-20 opacity-10 scale-100 link-bg"
                          : "hidden"
                      }
                    >
                      TECH STACK
                    </span>
                  </div>
                </div>
                <div>
                  <a
                    href="#projects"
                    className={
                      linkActive.projects
                        ? "drop-shadow-[0px_0px_4px_#E54EFE] font-semibold"
                        : ""
                    }
                  >
                    Projects
                  </a>
                  <span
                    className={
                      linkActive.projects
                        ? "absolute top-1/2 left-1/2 text-9xl font-black -translate-x-1/2 -translate-y-1/2 -z-20 opacity-10 scale-100 link-bg"
                        : "hidden"
                    }
                  >
                    PROJECT
                  </span>
                </div>
                <div>
                  <a
                    href="#testimony"
                    className={
                      linkActive.testimony
                        ? "drop-shadow-[0px_0px_4px_#E54EFE] font-semibold"
                        : ""
                    }
                  >
                    Testimony
                  </a>
                  <span
                    className={
                      linkActive.testimony
                        ? "absolute top-1/2 left-1/2 text-9xl font-black -translate-x-1/2 -translate-y-1/2 -z-20 opacity-10 scale-100 link-bg"
                        : "hidden"
                    }
                  >
                    TESTIMONY
                  </span>
                </div>
                {/* <div>
                  TODO: make blog section visible once it is completed - MOBILE NAVBAR LINK
                  <a
                    href="#blogs"
                    className={
                      linkActive.blogs
                        ? "drop-shadow-[0px_0px_4px_#E54EFE] font-semibold"
                        : ""
                    }
                  >
                    Blogs
                  </a>
                  <span
                    className={
                      linkActive.blogs
                        ? "absolute top-1/2 left-1/2 text-9xl font-black -translate-x-1/2 -translate-y-1/2 -z-20 opacity-10 scale-100 link-bg"
                        : "hidden"
                    }
                  >
                    BLOGS
                  </span>
                </div> */}
                <div>
                  <a
                    href="#ContactMe"
                    className={
                      linkActive.ContactMe
                        ? "drop-shadow-[0px_0px_4px_#E54EFE] font-semibold"
                        : ""
                    }
                  >
                    Contact Me
                  </a>
                  <span
                    className={
                      linkActive.ContactMe
                        ? "absolute top-1/2 left-1/2 text-9xl font-black -translate-x-1/2 -translate-y-1/2 -z-20 opacity-10 scale-100 link-bg"
                        : "hidden"
                    }
                  >
                    CONTACT ME
                  </span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default NAVBAR;
