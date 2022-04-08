import './Cards.scss';
import { Benefits } from '../../data';
import {motion} from 'framer-motion'

const Cards = () => {
  return (
    <div className = "cards">
      <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
      >
        <div className="wrapper">
                {Benefits.map((item) => (
                    <div className="container">
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                    </div>
                ))} 
        </div>
        </motion.div>        
    </div>
  )
}

export default Cards