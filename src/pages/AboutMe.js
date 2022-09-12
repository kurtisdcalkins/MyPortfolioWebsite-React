import profilePic from "../Pictures/Profile_pic.jpg";

export const AboutMe = () => {
  return (
    <div className="division" id="about-me">
      <div className="where-how">
        <article className="been">
          <h2>Where I've been</h2>
          <p>
            I've been a <span>manufacturing engineer</span> for the past 7
            years, primarily focused in the medical device industry. I've
            engineered tooling, fixtures, and processes. I've managed projects,
            teams, and investigations. But more relevantly, I've come to be
            fascinated with programming and have taken a leap into software!
          </p>
        </article>
        <article className="going">
          <h2>Where I'm going</h2>
          <p>
            My ultimate goal is to become a Full-Stack Engineer. However, I want
            to start out with a job as a Front-End Developer. I am eager to
            learn and contribute!
          </p>
        </article>
        <article className="how">
          <h2>How I'm getting there</h2>
          <p>
            I am taking courses through Codecademy: Front-End Engineer Career
            Path and Computer Science Career Path. Along the way, I have been
            taking some of their other skills courses to suppliment and explore,
            as well as YouTube and Google.
          </p>
          <p>
            I am also building projects to cement my learning and to challenge
            my abilities.
          </p>
        </article>
      </div>
    </div>
  );
};
