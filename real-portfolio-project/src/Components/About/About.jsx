import './About.css'
import profile from '../../assets/about_profile.png'
const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p> I am an experienced Frontend Developer with over ..</p>
            <p> My passion for frontend development isn ot only </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr  style={{width:"50%"}}/></div>
            <div className="about-skill"><p>REACT JS</p><hr  style={{width:"50%"}}/></div>
            <div className="about-skill"><p>JAVASCRIPT</p><hr  style={{width:"50%"}}/></div>
            <div className="about-skill"><p>NEXT JS</p><hr  style={{width:"50%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1> 10 +</h1>
          <p> Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1> 90+</h1>
          <p> Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1> 15 +</h1>
          <p> Happy Client</p>
        </div>
      </div>

    </div>
  )
}

export default About