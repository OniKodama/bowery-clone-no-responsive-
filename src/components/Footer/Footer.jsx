import "./Footer.scss"
import {FaFacebookSquare, FaInstagramSquare, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className = "footer">
        <div className="wrapper">
            <div className="socialIcons">
                <a href="https://www.instagram.com/bowerystudio/" target = "_blank" rel="noreferrer"><FaInstagramSquare className="icon"/></a>
                <a href="https://www.facebook.com/bowerystudio" target = "_blank" rel="noreferrer"><FaFacebookSquare className="icon"/></a>
                <a href="https://www.linkedin.com/company/bowerycreative/" target = "_blank" rel="noreferrer"><FaLinkedin className="icon"/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer