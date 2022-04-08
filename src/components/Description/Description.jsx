import './Description.scss'
import {FaHands} from "react-icons/fa"
import {motion} from 'framer-motion'

const Description = () => {
  return (
    <div className = "description">
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      >
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
        </motion.div> 
    </div>
  )
}

export default Description