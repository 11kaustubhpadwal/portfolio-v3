import { Box, Typography } from "@mui/material";
import arrowDark from "../../../assets/images/up-right-arrow-black.png";
import {
  cardTopStyle,
  cardBodyStyle,
  arrowButtonStyle,
  projectImageStyle,
  cardWrapper,
} from "./styles";
import { ProjectProps } from "./types";

const Project = ({
  projectType,
  projectName,
  projectImage,
  projectLink,
}: ProjectProps) => {
  return (
    <Box sx={cardWrapper}>
      <Box sx={cardTopStyle} />
      <Box sx={cardBodyStyle}>
        <Typography fontWeight={500}>{projectType}</Typography>
        <Typography mb={2} fontWeight={600} fontSize={26}>
          {projectName}
          <img src={arrowDark} style={arrowButtonStyle} alt="go" />
        </Typography>
        <a href={projectLink} rel="noreferrer" target="_blank">
          <img src={projectImage} alt="project" style={projectImageStyle} />
        </a>
      </Box>
    </Box>
  );
};

export default Project;
