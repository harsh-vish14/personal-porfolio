import ABOUTME from "./components/aboutme";
import HEADER from "./components/header";
import TECHSTACK from "./components/techstack";

function HOME() {
  return (
    <div className="">
      <HEADER />
      <ABOUTME />
      <div style={{ height: "100vh" }} id="techStack">
        <TECHSTACK />
      </div>
      <div style={{ height: "100vh" }} id="projects"></div>
      <div style={{ height: "100vh" }} id="testimony"></div>
      <div style={{ height: "100vh" }} id="blogs"></div>
    </div>
  );
}

export default HOME;
