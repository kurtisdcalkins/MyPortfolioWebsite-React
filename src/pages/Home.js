import profilePic from "../Pictures/Profile_pic.jpg";

export const Home = () => {
  return (
    <div className="who-picture">
      <div className="who">
        <p>
          <span>
            Hi, I'm <span>Kurtis</span>!
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
