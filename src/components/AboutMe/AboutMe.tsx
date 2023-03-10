import { Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <>
      <Typography
        sx={{ opacity: ".7" }}
        mt={14}
        mb={2}
        className="animate__animated animate__fadeInDown"
      >
        About me
      </Typography>
      <Typography
        mb={2}
        fontSize={"1.25rem"}
        className="animate__animated animate__fadeInDown"
      >
        I'm a creative fullstack developer who has been working with react and
        typescript for a little over 2 years. I've worked for a startup as well
        as a software house based in Poland. I've been working in a diverse team
        of people who are based in the UK, Europe and USA.
      </Typography>
      <Typography
        mb={11}
        fontSize={"1.25rem"}
        className="animate__animated animate__fadeInDown"
      >
        I love photography, video games and cricket! I'm also gonna launch my
        own startup soon! Wanna know more? Let's connect!
      </Typography>
    </>
  );
};

export default AboutMe;
