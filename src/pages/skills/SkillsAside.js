import { progSkillsObj } from "./SkillsObj";
import { useParams } from "react-router-dom";

export const SkillsAside = ({ skillTitle, setSkillTitle }) => {
  let { skillType } = useParams();

  const skillName = progSkillsObj[skillType];
  return (
    <div>
      <aside className="skills-aside">
        <h2>{skillName.skill}</h2>
        <h3>Certificates:</h3>
        {skillName.certificates.length > 0 ? (
          skillName.certificates.map((certificate) => (
            <p>
              {certificate.name}
              <a
                href={certificate.cert}
                target="_blank"
                rel="noreferrer"
                className="cert-link"
              >
                [View Cert]
              </a>
            </p>
          ))
        ) : (
          <p>None</p>
        )}

        <h3>My Projects Utilizing {skillName.skill}</h3>
        <ul>
          {skillName.projects.length > 0 ? (
            skillName.projects.map((project) => (
              <li className="project-list-name">{project.name}</li>
            ))
          ) : (
            <li className="project-list-name">None</li>
          )}
        </ul>
      </aside>
    </div>
  );
};
