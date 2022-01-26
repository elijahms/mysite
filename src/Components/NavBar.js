import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Container sx={{ alignItems: "center" }}>
      <Stack
        direction="row"
        spacing={3}
        sx={{
          fontFamily: "Calibre",
          fontSize: "1.2rem",
          textAlign: "center",
          pt: 5,
        }}
      >
        <NavLink exact to="/about">
          About Me
        </NavLink>
        <NavLink activeStyle exact to="/skills">
          Skills
        </NavLink>
        <NavLink activeStyle exact to="/contact">
          Contact
        </NavLink>
        <NavLink activeStyle exact to="/">
          Home
        </NavLink>
      </Stack>
    </Container>
  );
};

export default NavBar;
