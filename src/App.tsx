import { Box } from "@mui/material";
import "animate.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import CV from "./components/CV";
import Divider from "./components/Divider";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import TagLine from "./components/TagLine";

function App() {
  return (
    <>
      <Box sx={{ padding: "2.5rem 4.5rem" }}>
        <Navbar />
        <TagLine />
        <AboutMe />
      </Box>
      <Projects />
      <Services />
      <CV />
      <Divider />
      <Contact />
    </>
  );
}

export default App;
