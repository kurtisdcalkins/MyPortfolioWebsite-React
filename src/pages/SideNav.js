import { NavLink } from "react-router-dom";
import { ContactLinks } from "../components/ContactLinks";

export const SideNav = () => {
  return (
    <nav className="side-nav-bar">
      <ContactLinks />
      <NavLink to="/aboutme" className="tab-text about">
        About Me
      </NavLink>
      <NavLink to="/skills" className="tab-text skills">
        Skills
      </NavLink>
      <NavLink to="/projects" className="tab-text projects">
        Projects
      </NavLink>
      <NavLink to="/resume" className="tab-text resume">
        Resume
      </NavLink>
    </nav>
  );
};
