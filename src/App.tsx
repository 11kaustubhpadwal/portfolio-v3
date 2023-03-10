import { Box } from "@mui/material";

import TagLine from "./components/TagLine";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Services from "./components/Services";
import CV from "./components/CV";
import Divider from "./components/Divider";
import Contact from "./components/Contact";

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
