import "./Testimonials.scss"
import {People} from "../../data"
import {motion} from 'framer-motion'
const Testimonials = () => {
  return (
    <div className = "testimonials" id = "testimonials">
        <div className="title">
            <h2><span>Kind</span> words from happy <br />customers.</h2>
          </div>
          <br />
      <div className="wrapper">
          <div className="left">
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
            {People.map((item) => (
              <div className="people-card">
                <div className="imgContainer">
                  <img src= {item.img} alt="" />
                </div>
                <div className="infoContainer">
                  <span>{item.name}</span>
                  <p>{item.desc}</p>
                </div>
            </div>
            ))}
            </motion.div>
          </div>
          <div className="right">
            <motion.div
              whileInView={{ x: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
            <div className="description">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quia accusamus similique quae cumque. A perspiciatis harum dolor saepe quod</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quia accusamus similique quae cumque. A perspiciatis harum dolor saepe quod</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quia accusamus similique quae cumque. A perspiciatis harum dolor saepe quod</p>
            </div>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials