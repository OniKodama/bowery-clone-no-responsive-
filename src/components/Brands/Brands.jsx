import "./Brands.scss"
import {Companies} from "../../data"


const Brands = () => {
  return (
    <div className = "brands" id = "trust">
        <div className="title">
            <h1>Who trust us too.</h1>
        </div>
        <div className="cards-container">
            {Companies.map((item) => (
                <div className="cards">
                    <img src = {item.img} alt = "" style = {{width: "100px", objectFit: "contain",fill: "none"}}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Brands