import "./App.scss";
import Landing from "./sections/Landing/Landing";
import NavBar from "./sections/NavBar/NavBar";
import About from "./sections/About/About";
import Story from "./sections/Story/Story";
import SponsorUs from "./sections/Sponsor/SponsorUs";
import FAQ from "./sections/FAQ/FAQ";
import Contact from "./sections/Contact/Contact";
import Partner from "./sections/Partner/Partner";
import logo from "./resources/images/logo/logo.png";
import Footer from "./sections/Footer/Footer";
import nav from "./resources/strings/nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FooterBar from "./sections/Footer/FooterBar";
import Team from "./sections/Team/Team";
import Keynote from "./sections/Keynote/Keynote";

const logoRoute = { logoSrc: logo, sectionId: "landing" };
const routes = [
  { label: nav.about, sectionId: "about" },
  { label: nav.partner, sectionId: "partner" },
  { label: nav.faq, sectionId: "faq" },
  { label: nav.contact, sectionId: "contact" },
];

// PDF locations in public folder
const SponsorPackage = `${process.env.PUBLIC_URL}/pdfs/sponsorship_package.pdf`;

// PDF locations in public folder
//const SponsorPackage = `${process.env.PUBLIC_URL}/pdfs/sponsorship_package.pdf`;

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          // Redirect itstechnova.org/sponsorship-package to pdf location
          path="/sponsorship-package"
          component={() => {
            window.location.href = SponsorPackage;
            return null;
          }}
        />
        <Route exact path="/">
          <div className="App">
            <NavBar routes={routes} logoRoute={logoRoute} />
            <Landing />
            <About />
            <SponsorUs />
            <Partner />
            <Keynote />
            <FAQ />
            <Team />
            <Contact />
            <FooterBar />       
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
