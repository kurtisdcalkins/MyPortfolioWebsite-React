import { ProgrammingSkills } from "./ProgrammingSkills";
import { ProfessionalSkills } from "./ProfessionalSkills";
import { SkillsAside } from "./SkillsAside";
import { ProfSkillsAside } from "./ProfSkillsAside";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

export const Skills = () => {
  const [skillTitle, setSkillTitle] = useState(null);
  const [profSkillTitle, setProfSkillTitle] = useState(null);

  return (
    <div className="division" id="skills">
      <div className="skills-list">
        <ProgrammingSkills />
        <ProfessionalSkills />
      </div>
      <Routes>
        <Route
          index
          element={
            <aside className="choose-aside">
              <>
                <h2>
                  Select a programming skill or professional skill to learn more
                </h2>
              </>
            </aside>
          }
        />
        <Route
          path="/:skillType"
          exact
          element={
            <SkillsAside
              skillTitle={skillTitle}
              setSkillTitle={setSkillTitle}
            />
          }
        />
        <Route
          path="/prof/:skillbullet"
          exact
          element={<ProfSkillsAside profSkillTitle={profSkillTitle} />}
        />
      </Routes>
    </div>
  );
};
