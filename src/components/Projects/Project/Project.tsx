import { Box, Typography } from "@mui/material";
import arrowDark from "../../../assets/images/up-right-arrow-black.png";
import {
  cardTopStyle,
  cardBodyStyle,
  arrowButtonStyle,
  projectImageStyle,
} from "./styles";
import { ProjectProps } from "./types";

const Project = ({ projectType, projectName, projectImage }: ProjectProps) => {
  return (
    <>
      <Box sx={cardTopStyle} />
      <Box sx={cardBodyStyle}>
        <Typography fontWeight={500}>{projectType}</Typography>
        <Typography mb={2} fontWeight={600} fontSize={26}>
          {projectName}
          <img src={arrowDark} style={arrowButtonStyle} alt="go" />
        </Typography>
        <img src={projectImage} alt="project" style={projectImageStyle} />
      </Box>
    </>
  );
};

export default Project;
