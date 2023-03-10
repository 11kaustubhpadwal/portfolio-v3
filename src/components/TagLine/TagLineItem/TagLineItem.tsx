import { Grid, Typography } from "@mui/material";
import arrow from "../../../assets/images/up-right-arrow.png";
import { tagLineLinkStyle, linkTextStyle, arrowStyle } from "./styles";
import { TagLineItemProps } from "./types";

const TagLineItem = ({
  taglineText,
  linkText,
  linkHref,
  reverseContent = false,
}: TagLineItemProps) => {
  return (
    <Grid
      container
      alignItems={"center"}
      spacing="2rem"
      justifyContent={"center"}
      id="about"
      className="animate__animated animate__fadeInDown tagline"
    >
      {reverseContent ? (
        <>
          <Grid item>
            <a href={linkHref} style={tagLineLinkStyle}>
              <Typography fontWeight={600} fontSize={35} sx={linkTextStyle}>
                {linkText}
                <img src={arrow} style={arrowStyle} alt="go" />
              </Typography>
            </a>
          </Grid>
          <Grid item>
            <Typography fontWeight={700} fontSize={80}>
              {taglineText}
            </Typography>
          </Grid>
        </>
      ) : (
        <>
          <Grid item>
            <Typography fontWeight={700} fontSize={80}>
              {taglineText}
            </Typography>
          </Grid>
          <Grid item>
            <a href={linkHref} style={tagLineLinkStyle}>
              <Typography fontWeight={600} fontSize={35} sx={linkTextStyle}>
                {linkText}
                <img src={arrow} style={arrowStyle} alt="go" />
              </Typography>
            </a>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default TagLineItem;
