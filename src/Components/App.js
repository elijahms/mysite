import "./index.css";
import AllPages from "./AllPages";
import { Route, Switch } from "react-router-dom";
import ProjectsPage from "../ProjectsPage";
import ContactPage from "./ContactPage";
import AboutPage from "../AboutPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/skills">
          <ProjectsPage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/">
          <AllPages />
        </Route>
      </Switch>
    </>
  );
}

export default App;