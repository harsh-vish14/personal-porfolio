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

function App() {
  const [pageLoading, setPageLoading] = useState(true);
  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      console.log("page loaded");
      setPageLoading(false);
      // do something else
    };

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
    </>
  );
}

export default App;
