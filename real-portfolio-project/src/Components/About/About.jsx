import "./About.css";
import profile from "../../assets/about_profile2.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer that graduated from
              Flatiron School
            </p>
            <p>
              I have a passion for both the front-end developement and
              server-side developement
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "45%" }} />
            </div>
            <div className="about-skill">
              <p>REACT JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "45%" }} />
            </div>
            <div className="about-skill">
              <p>PYTHON</p>
              <hr style={{ width: "35%" }} />
            </div>
            <div className="about-skill">
              <p>PHP ( learning )</p>
              <hr style={{ width: "25%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1> 2 </h1>
          <p> Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1> 5 +</h1>
          <p> Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1> 3 + </h1>
          <p> Happy Client</p>
        </div>
      </div>
    </div>
  );
};

export default About;
