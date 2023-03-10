import { Box, Grid, Typography } from "@mui/material";
import { projectsList } from "./constants";
import Project from "./Project/Project";
import { projectsSectionWrapper } from "./styles";

const Projects = () => {
  return (
    <Box sx={projectsSectionWrapper} id="projects">
      <Grid container spacing="3rem" alignItems={"center"}>
        <Grid item sm={6}>
          <Typography fontWeight={700} fontSize={80} lineHeight={1.2}>
            Explore My Recent Work
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography fontSize={20}>
            I'm proficient in the following frontend technologies - HTML, CSS,
            Javascript, Typescript, React (hooks and functional components),
            Redux, Redux-Toolkit, React-Query, Storybook.js, Styled Components
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing="4rem" mt={2}>
        {projectsList.map((project, index) => (
          <Grid item sm={4} key={`projects-list-item-${index}`}>
            <Project
              projectType={project.projectType}
              projectName={project.projectName}
              projectImage={project.projectImage}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
