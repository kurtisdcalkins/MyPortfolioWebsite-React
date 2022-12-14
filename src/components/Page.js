import { SideNav } from "../pages/SideNav/SideNav";
import { Home } from "../pages/Home/Home";
import { AboutMe } from "../pages/About/AboutMe";
import { Skills } from "../pages/skills/Skills";
import { Projects } from "../pages/Projects/Projects";
import { Resume } from "../pages/Resume/Resume";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const Page = () => {
  return (
    <Router>
      <main className="main-content">
        <SideNav />
        <div className="division">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/aboutme" exact element={<AboutMe />} />
            <Route path="/skills/*" exact element={<Skills />} />
            <Route path="/projects" exact element={<Projects />} />
            <Route path="/resume" exact element={<Resume />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};
