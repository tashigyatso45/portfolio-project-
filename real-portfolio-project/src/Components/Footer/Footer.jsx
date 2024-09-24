import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div id="footer"className='footer'>Footer
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I am a frontend developer from USA</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email ' />
                </div>
                <div className="footer-subscribe"> subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left"> 2023 tashi Gyatso. Allright</p>
            <div className="footer-bottom-right">
                <p>term of service</p>
                <p>privacy policy</p>
                <p>connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer