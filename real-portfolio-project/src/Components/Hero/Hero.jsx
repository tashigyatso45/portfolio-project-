import "./Hero.css";
import profile from "../../assets/about_profile.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile} alt="" className="profile-picture" />
      <h1>
        <span>I am Tashi,</span> frontend developer
      </h1>
      <p>I am a front end developer from NYC </p>
      <div className="hero-action">
        <div className="hero-connect"> connect with me </div>
        <div className="hero-resume">My Resume </div>
      </div>
    </div>
  );
};

export default Hero;
