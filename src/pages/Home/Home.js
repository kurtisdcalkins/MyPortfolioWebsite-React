import profilePic from "../../Pictures/Profile_pic.jpg";

export const Home = () => {
  return (
    <div className="who-picture">
      <div className="who">
        <p>
          <span className="span-first">
            Hi, I'm <span className="span-name">Kurtis</span>, a Front-end
            Developer from Colorado!
          </span>
        </p>
        <p> I enjoy solving problems through programming. </p>
      </div>
      <div className="picture">
        <div className="profile">
          <img class="profile-pic" src={profilePic} alt="My picture" />
        </div>
      </div>
    </div>
  );
};
