import './Services.css'
import theme from '../../assets/theme_pattern.svg'
import data from '../../assets/services_data'
import arrow from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div className='services'>
        <div className="services-title">
            <h1> My Services</h1>
            <img src={theme} alt="" />
        </div>
        <div className="service container">
            {data.map((service,index)=>{
                return <div key={index}className="service-format">
                    <h3>service.s_no</h3>
                    <h2>service.s_name</h2>
                    <p>service.s_desc</p>
                    <div className="services-readmore">
                        <p>read more</p>
                        <img src={arrow} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services