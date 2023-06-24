import ABOUTME from "./components/aboutme";
import CONTACT_ME from "./components/contactme";
import HEADER from "./components/header";
import PROJECT from "./components/project/project";
import TECHSTACK from "./components/techstack/techstack";
import TESTIMONY from "./components/testomony/testomony";
import QUOTE from "./quote";

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
      <div style={{ minHeight: "100vh" }} id="testimony">
        <TESTIMONY />
      </div>
      <div className="pt-20 " id="ContactMe">
        <CONTACT_ME />
        <QUOTE />
      </div>
    </div>
  );
}

export default HOME;
