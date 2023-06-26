import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import HOME from "../components/home/home";
import NAVBAR from "../components/navbar";
import LOADER from "../components/loader/loader";
import { useEffect, useState } from "react";
import ALERT from "../components/home/alert_mobile";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  console.log(navigator.userAgentData);
  const [pageLoading, setPageLoading] = useState(true);

  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      console.log("page loaded");
      setPageLoading(false);
      // do something else
    };

    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      // Theme set to dark.
      link.href = "favicon_dark.png";
    } else {
      // Theme set to light.
      link.href = "favicon_light.png";
    }

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
      {navigator.userAgentData.mobile && <ALERT />}
      {pageLoading && <LOADER />}
      <TooltipProvider>
        <NAVBAR />
        <div
          className="mx-auto md:px-8 px-4"
          style={{ width: "100%", maxWidth: "83.5rem" }}
        >
          <HOME />
        </div>
      </TooltipProvider>
      <ToastContainer />
    </>
  );
}

export default App;
