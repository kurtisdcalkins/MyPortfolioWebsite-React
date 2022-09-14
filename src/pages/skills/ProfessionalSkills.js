import { NavLink } from "react-router-dom";

export const ProfessionalSkills = () => {
  return (
    <div className="" id="prof-skills">
      <h2>Professional Skills</h2>
      <div className="prof-skills">
        <div className="prof-skill">
          <h3>Management</h3>
          <ul>
            <li>
              <NavLink
                to="/skills/prof/projectmanagement"
                className="active-skill"
              >
                Project Management
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills/prof/teammanagement"
                className="active-skill"
              >
                Team Management
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills/prof/scheduling" className="active-skill">
                Scheduling
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills/prof/kanban" className="active-skill">
                Kan-Ban
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills/prof/hiring" className="active-skill">
                Hiring & Performance Reviews
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills/prof/metrics" className="active-skill">
                Metrics: Defining and Tracking
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="prof-skill">
          <h3>Engineering</h3>
          <ul>
            <li>
              <NavLink to="/skills/prof/techwriting" className="active-skill">
                Technical Writing
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills/prof/cad" className="active-skill">
                CAD/Design
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills/prof/lean" className="active-skill">
                Lean Manufacturing
              </NavLink>
            </li>
            <NavLink to="/skills/prof/doe" className="active-skill">
              <li className="test">Design of Experiments (DOE)</li>
            </NavLink>
            <li>
              <NavLink to="/skills/prof/improvements" className="active-skill">
                Process Improvements
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills/prof/rootcause" className="active-skill">
                Root Cause Investigation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="prof-skill">
          <h3>Validations / Qualifictions</h3>
          <ul>
            <li>
              <NavLink to="/skills/prof/mvp" className="active-skill">
                Master Validation Plans (MVP)
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills/prof/softwarevalidation"
                className="active-skill"
              >
                Non-device Software Validation
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills/prof/equipqual" className="active-skill">
                Equipment Qualifications
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills/prof/processvalidation"
                className="active-skill"
              >
                Process Validation
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills/prof/msa" className="active-skill">
                Measurement System Analysis (MSA)
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills/prof/calibrations" className="active-skill">
                Calibrations
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="prof-skill">
          <h3>Other</h3>
          <ul>
            <li>
              <NavLink to="/skills/prof/presentations" className="active-skill">
                Presentations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills/prof/shippingreceiving"
                className="active-skill"
              >
                Shipping and Receiving
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills/prof/customerservice"
                className="active-skill"
              >
                Customer Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills/prof/productionmanagement"
                className="active-skill"
              >
                Production Management
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills/prof/qms" className="active-skill">
                ISO Quality Management System
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills/prof/maintenance" className="active-skill">
                Equipment Maintenance
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
