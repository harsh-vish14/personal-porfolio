import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import HOME from "../components/home/home";
import NAVBAR from "../components/navbar";

function App() {
  return (
    <>
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
