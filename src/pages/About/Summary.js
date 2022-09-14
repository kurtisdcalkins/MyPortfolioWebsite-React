import ColoradoPic from "../../Pictures/Colorado Sign_courtesy of Wikimedia Commons.jpg";
import MyPic from "../../Pictures/IMG_8949.JPG";

export const Summary = () => {
  return (
    <div className="summary">
      <div className="summary-content">
        {/* <img src={MyPic} alt="My picture" className="my-pic" /> */}
        <article className="article-content">
          <h2>Summary</h2>
          <p>I am a self-taught front-end web developer, living in Colorado.</p>
          <p>
            I am an engineer at heart, meaning I enjoy solving problems. I take
            pride in my work, lead by example, and go the extra mile.
          </p>
          <p>
            When I'm not working, I enjoy most everything off-road:
            four-wheeling, ATVing, mountain biking, RC rock crawling, etc...
          </p>
          <p>
            I'm interested in building something great with a company that
            cares.
          </p>
        </article>
      </div>
      {/* <img
        src={ColoradoPic}
        alt="Welcome to Colorful Colorado"
        className="summary-pic"
      /> */}
    </div>
  );
};
