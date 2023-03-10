import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import arrow from "../../assets/images/up-right-arrow.png";
import InfoItem from "./InfoItem";
import {
  linkedInButton,
  goToLinkedInStyle,
  linkedInButtonAnchorTagStyle,
} from "./styles";

const CV = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid container padding="5rem" alignItems={"center"} id="cv">
        <Grid item md>
          <Typography
            fontWeight={700}
            fontSize={"5rem"}
            lineHeight={1.2}
            className="animate__animated animate__fadeInDown"
          >
            Curriculum Vitae
          </Typography>
        </Grid>
        <Grid
          mt={md ? 4 : 0}
          item
          className="animate__animated animate__fadeInDown"
        >
          <a
            href="https://www.linkedin.com/in/kaustubh-padwal-876495179/"
            target="_blank"
            rel="noreferrer"
            style={linkedInButtonAnchorTagStyle}
          >
            <Typography
              fontWeight={600}
              fontSize={"1.375rem"}
              sx={linkedInButton}
            >
              LinkedIn
              <img src={arrow} style={goToLinkedInStyle} alt="go" />
            </Typography>
          </a>
        </Grid>
      </Grid>
      <Grid
        container
        padding="0 5rem 0"
        className="animate__animated animate__fadeInDown"
      >
        <Grid item md={6}>
          <Typography fontWeight={700} fontSize={"2.5rem"} mb={6}>
            Work Experience
          </Typography>
          <InfoItem
            title="Software Mind Sp. Z.o.o"
            subtitle="Software Engineer I"
            date="October 2021 - Present"
          />
          <InfoItem
            title="EonD Sp. Z.o.o"
            subtitle="Junior Frontend Developer"
            date="March 2021 - August 2021"
          />
        </Grid>
        <Grid item md={6} mt={md ? 6 : 0}>
          <Typography fontWeight={700} fontSize={"2.5rem"} mb={6}>
            Education
          </Typography>
          <InfoItem
            title="Akademia WSEI"
            subtitle="Bachelors in Computer Science"
            date="October 2018 - February 2021"
          />
        </Grid>
      </Grid>
      <Typography
        fontWeight={700}
        fontSize={"2.5rem"}
        mb={6}
        mt={8}
        padding="0 5rem"
        className="animate__animated animate__fadeInDown"
      >
        Skills
      </Typography>
      <Grid
        container
        padding="0 5rem 5rem"
        spacing="5rem"
        className="animate__animated animate__fadeInDown"
      >
        <Grid item sm={12} md>
          <Typography fontWeight={500} fontSize={"1.563rem"} mb={1}>
            Frontend
          </Typography>
          <ul>
            <li>
              <Typography fontWeight={400} fontSize={"1.188rem"}>
                HTML
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={"1.188rem"}>
                CSS
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={"1.188rem"}>
                Javascript
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={"1.188rem"}>
                Typescript
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={"1.188rem"}>
                React
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={"1.188rem"}>
                Redux, Redux-Toolkit
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={"1.188rem"}>
                React-Query, Axios
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item sm={12} md>
          <Typography fontWeight={500} fontSize={"1.563rem"} mb={1}>
            Backend
          </Typography>
          <ul>
            <li>
              <Typography fontWeight={400} fontSize={"1.188rem"}>
                Node.js
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={"1.188rem"}>
                Express.js
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={"1.188rem"}>
                MongoDB
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={"1.188rem"}>
                Mongoose ODM
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={"1.188rem"}>
                REST APIs
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
    </>
  );
};

export default CV;
