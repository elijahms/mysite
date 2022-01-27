import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const AboutMe = () => {
  // const AboutMeP = styled.p`
  //   font-size: 1.5em;
  //   color: #edf5e1;
  //   @media screen and (max-width: 600px) {
  //     font-size: 20px;
  //   }
  // `;
  // const SkillsT = styled.h2`
  //   font-size: 1.5em;
  //   text-align: center;
  //   white-space: pre-line;
  //   color: #edf5e1;
  // `;

  // const SkillsD = styled.div`
  //   font-size: 1.5em;
  //   text-align: center;
  //   white-space: pre-line;
  //   color: #edf5e1;
  // `;

  const skills = ["HTML", "Javascript", "CSS", "React", "Ruby", "Rails"];
  const aboutMeText =
    "Hey, my name is Elijah! My path to web development began in 2020 during the pandemic while completing my bachelor's degree in Business Administration. I had a few fun projects that I wanted to pursue, but found myself confined to Wix and similar services. As the phrase goes, 'If you want something done, you have to do it yourself.' I shifted my focus from business to web development and started at Flatiron, a software engineering bootcamp. I am looking forward to the challenges and excitement that a career in software engineering offers.";

  return (
    <Container maxWidth="md" sx={{ color: "text.primary" }}>
      <Typography variant="h2" sx={{ mb: 5, color: "text.primary" }}>
        About Me
      </Typography>
      <Typography variant="h5">{aboutMeText}</Typography>
      <Typography variant="h6" sx={{ mt: 5, color: "text.primary" }}>
        {"Some skills I've aquired along the way: \n\n"}
      </Typography>
      <Grid container justify="center" spacing={0.5} sx={{ mt: 5 }}>
        {skills.map((s, index) => (
          <Grid key={index} item xs={4} md={4} lg={2}>
            <Typography align="center" variant="h5">
              {s}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutMe;
