import './Cards.scss';
import { Benefits } from '../../data';


const Cards = () => {
  return (
    <div className = "cards">
        <div className="wrapper">
                {Benefits.map((item) => (
                    <div className="container">
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                    </div>
                ))} 
        </div>        
    </div>
  )
}

export default Cards