import { Grid, Typography } from "@mui/material";
import arrow from "../../assets/images/up-right-arrow.png";
import InfoItem from "./InfoItem";
import {
  linkedInButton,
  goToLinkedInStyle,
  linkedInButtonAnchorTagStyle,
} from "./styles";

const CV = () => {
  return (
    <>
      <Grid container padding="5rem" alignItems={"center"} id="cv">
        <Grid item sm>
          <Typography fontWeight={700} fontSize={80} lineHeight={1.2}>
            Curriculum Vitae
          </Typography>
        </Grid>
        <Grid item>
          <a
            href="https://www.linkedin.com/in/kaustubh-padwal-876495179/"
            target="_blank"
            rel="noreferrer"
            style={linkedInButtonAnchorTagStyle}
          >
            <Typography fontWeight={600} fontSize={22} sx={linkedInButton}>
              LinkedIn
              <img src={arrow} style={goToLinkedInStyle} alt="go" />
            </Typography>
          </a>
        </Grid>
      </Grid>
      <Grid container padding="0 5rem 0">
        <Grid item sm={6}>
          <Typography fontWeight={700} fontSize={40} mb={6}>
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
        <Grid item sm={6}>
          <Typography fontWeight={700} fontSize={40} mb={6}>
            Education
          </Typography>
          <InfoItem
            title="Akademia WSEI"
            subtitle="Bachelors in Computer Science"
            date="October 2018 - February 2021"
          />
        </Grid>
      </Grid>
      <Typography fontWeight={700} fontSize={40} mb={6} mt={8} padding="0 5rem">
        Skills
      </Typography>
      <Grid container padding="0 5rem 5rem" spacing="5rem">
        <Grid item>
          <Typography fontWeight={500} fontSize={25} mb={1}>
            Frontend
          </Typography>
          <ul>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                HTML
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                CSS
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                Javascript
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                Typescript
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                React
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                Redux, Redux-Toolkit
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                React-Query, Axios
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item>
          <Typography fontWeight={500} fontSize={25} mb={1}>
            Backend
          </Typography>
          <ul>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                Node.js
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                Express.js
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                MongoDB
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                Mongoose ODM
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={19}>
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
