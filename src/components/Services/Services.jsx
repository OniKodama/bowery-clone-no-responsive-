import "./Services.scss"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import {Deals} from "../../data"


const Services = () => {

  return (
    <div className="services" id = "offers">
        <div className="wrapper">
            <div className="left">
                <div className="who-we-are">
                    <div className="line">
                        <span></span>
                    </div>
                    <div className="who">
                        <h2>what we offer</h2>
                    </div>
                </div>
                <div className="title-desc">
                    <h1>Lead by our<br /><span>expertise</span></h1>
                    <p>We provide full-stack Web, Desktop, and Mobile development services.
                        <br />
                        We love creating mission-critical MVPs with delightful user experience.
                    </p>
                </div>
                <div className="arrowsContainer">
                    <div className="leftArrow">
                        <div className="leftArrowContainer">
                            <FiArrowLeft />
                        </div>
                    </div>
                    <div className="rightArrow" >
                        <div className="rightArrowContainer">
                            <FiArrowRight />
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="cardsContainer">
                    {Deals.map((item) =>(
                        <div className="container">
                                <h2>{item.num}</h2>
                                <h1>{item.title}</h1>
                                <p>{item.desc}</p>
                            </div>
                    ))}
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Services