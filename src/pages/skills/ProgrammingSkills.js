import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGitAlt,
  faPython,
  faNode,
  faGolang,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faSitemap } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export const ProgrammingSkills = () => {
  return (
    <div className="programming" id="skill">
      <h2>Programming Skills</h2>
      <div className="programming-skill">
        <NavLink to="/skills/html" className="each-skill">
          <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
          <p>HTML</p>
        </NavLink>
        <NavLink to="/skills/css" className="each-skill">
          <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />
          <p>CSS</p>
        </NavLink>
        <NavLink to="/skills/js" className="each-skill">
          <FontAwesomeIcon icon={faJsSquare} className="skill-icon" />
          <p>JavaScript</p>
        </NavLink>
        <NavLink to="/skills/react" className="each-skill">
          <FontAwesomeIcon icon={faReact} className="skill-icon" />
          <p>React</p>
        </NavLink>
        <NavLink to="/skills/git" className="each-skill">
          <FontAwesomeIcon icon={faGitAlt} className="skill-icon" />
          <p>Git</p>
        </NavLink>
        <NavLink to="/skills/github" className="each-skill">
          <FontAwesomeIcon icon={faGithub} className="skill-icon" />
          <p>GitHub</p>
        </NavLink>
        <NavLink to="/skills/python" className="each-skill">
          <FontAwesomeIcon icon={faPython} className="skill-icon" />
          <p>Python</p>
        </NavLink>
        <NavLink to="/skills/sql" className="each-skill">
          <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
          <p>SQL</p>
        </NavLink>
        <NavLink to="/skills/express" className="each-skill">
          <FontAwesomeIcon icon={faSitemap} className="skill-icon" />
          <p>Express.JS</p>
        </NavLink>
        <NavLink to="/skills/node" className="each-skill">
          <FontAwesomeIcon icon={faNode} className="skill-icon" />
          <p>Node.JS</p>
        </NavLink>
        <NavLink to="/skills/django" className="each-skill">
          <p className="skill-icon">Django</p>
          <p>Django</p>
        </NavLink>
        <NavLink to="/skills/go" className="each-skill">
          <FontAwesomeIcon icon={faGolang} className="skill-icon" />
          <p>GoLang</p>
        </NavLink>
      </div>
    </div>
  );
};
