import { ProfessionalSkillsObj } from "./SkillsObj";
import { useParams } from "react-router-dom";

export const ProfSkillsAside = () => {
  let { skillbullet } = useParams();

  const skillName = ProfessionalSkillsObj[skillbullet];
  return (
    <aside className="skills-aside-prof">
      <h1 className="prof-skill-label">Skill</h1>
      <div className="prof-aside-content">
        <h1>{skillName.skill}</h1>
        <h3>Description:</h3>
        <p>{skillName.description}</p>
        <h3>Demonstrated By:</h3>
        <p>{skillName.example}</p>
      </div>
    </aside>
  );
};
