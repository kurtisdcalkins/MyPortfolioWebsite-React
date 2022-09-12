import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGitAlt,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

export const Skills = () => {
  return (
    <div className="division" id="skills">
      <div className="programming" id="skill">
        <h2>Programming Skills</h2>
        <div className="programming-skill">
          <div className="each-skill">
            <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
            <p>HTML</p>
          </div>
          <div className="each-skill">
            <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />
            <p>CSS</p>
          </div>
          <div className="each-skill">
            <FontAwesomeIcon icon={faJsSquare} className="skill-icon" />
            <p>JavaScript</p>
          </div>
          <div className="each-skill">
            <FontAwesomeIcon icon={faReact} className="skill-icon" />
            <p>React</p>
          </div>
          <div className="each-skill">
            <FontAwesomeIcon icon={faGitAlt} className="skill-icon" />
            <p>Git</p>
          </div>
          <div className="each-skill">
            <FontAwesomeIcon icon={faGithub} className="skill-icon" />
            <p>GitHub</p>
          </div>
          <div className="each-skill">
            <FontAwesomeIcon icon={faPython} className="skill-icon" />
            <p>Python</p>
          </div>
          <div className="each-skill">
            <FontAwesomeIcon icon={faJsSquare} className="skill-icon" />
            <p>SQL</p>
          </div>
        </div>
      </div>
      <div className="" id="prof-skills">
        <h2>Professional Skills</h2>
        <div className="prof-skills">
          <div className="prof-skill">
            <h3>Management</h3>
            <ul>
              <li>Project Management</li>
              <li>Team Management</li>
              <li>Scheduling</li>
              <li>Kan-Ban</li>
              <li>Hiring & Performance Reviews</li>
              <li>Metrics: Defining and Tracking</li>
            </ul>
          </div>
          <div className="prof-skill">
            <h3>Engineering</h3>
            <ul>
              <li>Technical Writing</li>
              <li>CAD/Design</li>
              <li>Lean Manufacturing</li>
              <li>Design of Experiments (DOE)</li>
              <li>Process Improvements</li>
              <li>Root Cause Investigation</li>
            </ul>
          </div>
          <div className="prof-skill">
            <h3>Validations / Qualifictions</h3>
            <ul>
              <li>Master Validation Plans (MVP)</li>
              <li>Non-device Software Validation</li>
              <li>Equipment Qualifications</li>
              <li>Process Validation</li>
              <li>Measurement System Analysis (MSA)</li>
              <li>Calibrations</li>
            </ul>
          </div>
          <div className="prof-skill">
            <h3>Other</h3>
            <ul>
              <li>Presentations</li>
              <li>Shipping and Receiving</li>
              <li>Customer Service</li>
              <li>Production Management</li>
              <li>ISO Quality Management System</li>
              <li>Equipment Maintenance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
