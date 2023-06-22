import ABOUTME from "./components/aboutme";
import HEADER from "./components/header";
import PROJECT from "./components/project/project";
import TECHSTACK from "./components/techstack/techstack";

function HOME() {
  return (
    <div className="">
      <HEADER />
      <ABOUTME />
      <div style={{ marginBottom: "100px" }} id="techStack">
        <TECHSTACK />
      </div>
      <div style={{ minHeight: "100vh" }} id="projects">
        <PROJECT />
      </div>
      <div style={{ height: "100vh" }} id="testimony"></div>
      <div style={{ height: "100vh" }} id="blogs"></div>
    </div>
  );
}

export default HOME;
