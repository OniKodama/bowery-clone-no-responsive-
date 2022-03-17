import './Description.scss'
import {FaHands} from "react-icons/fa"

const Description = () => {
  return (
    <div className = "description">
        <div className="wrapper">
            <div className="text">
                <h1>We deliver best-in-class MVPs with exceptional quality. At Speed.</h1>
            </div>
          <div className="div" >
            <a href="#final">
              <FaHands className= "hands"/>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Description