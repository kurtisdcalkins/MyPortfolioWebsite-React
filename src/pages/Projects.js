import taskPic from "../Pictures/Task List_img.png";
import tripPic from "../Pictures/Trip Logger_img.png";

export const Projects = () => {
  return (
    <div className="division" id="projects">
      <h2>Projects</h2>
      <div className="project-div">
        <a href="./Projects Pages/Task List App/task_list.html">
          <div className="each-project">
            <div className="project-details">
              <h3>Task List App</h3>
              <p>
                This is the description. Give high-level overview. Then give a
                link to see more.
              </p>
            </div>
            <img
              src={taskPic}
              alt="Screenshot of my task list app"
              className="grid-img"
            />
          </div>
        </a>
        <a href="">
          <div className="each-project">
            <div className="project-details">
              <h3>Trip Logger</h3>
              <p>
                This is the description. Give high-level overview. Then give a
                link to see more.
              </p>
            </div>
            <img src={tripPic} alt="" className="grid-img" />
          </div>
        </a>
        <a href="">
          <div className="each-project">
            <div className="project-details">
              <h3>Project 3</h3>
              <p>
                This is the description. Give high-level overview. Then give a
                link to see more.
              </p>
            </div>
            <img
              src={tripPic}
              alt="Screenshot of my task list app"
              className="grid-img"
            />
          </div>
        </a>
        <a href="">
          <div className="each-project">
            <div className="project-details">
              <h3>Project 3</h3>
              <p>
                This is the description. Give high-level overview. Then give a
                link to see more.
              </p>
            </div>
            <img
              src={tripPic}
              alt="Screenshot of my task list app"
              className="grid-img"
            />
          </div>
        </a>
      </div>
    </div>
  );
};
