import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h1> Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1> Lets talk</h1>
          <p>imdsbndsdsds</p>
        </div>
        <div className="contact-details">
          <img src={mail_icon} alt="" /> <p>tashigyatso45@gmail.com</p>
        </div>
        <div className="contact-details"> 
          <img src={location_icon} alt="" /><p>NY, USA</p>
        </div>
        <div className="contact-details">
          <img src={call_icon} alt="" /> <p>+1 917-635-8146</p>
        </div>
        <div className="contact-right">
          
        </div>

      </div>
    
    </div>
  )
}

export default Contact