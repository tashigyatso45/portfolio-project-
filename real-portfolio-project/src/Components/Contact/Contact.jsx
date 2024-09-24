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
          <div className="contact-details">
            <div className="contact-detail">
            <img src={mail_icon} alt="" /> <p>tashigyatso45@gmail.com</p>
            </div>
            <div className="contact-detail"> 
            <img src={location_icon} alt="" /><p>NY, USA</p>
            </div>
            <div className="contact-detail">
            <img src={call_icon} alt="" /> <p>+1 917-635-8146</p>
            </div>
          </div>
          
        </div>
          
        <form className="contact-right">
          <label htmlFor="">Your name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder='Enter Your email' name="Email"  />
          <label htmlFor="">Write Your Message</label>
          <textarea name="message" rows = "8" placeholder='enter your message' ></textarea>
          <button type='submit' className='contact-submit'> Submit now </button>
        </form>

      </div>
    
    </div>
  )
}

export default Contact