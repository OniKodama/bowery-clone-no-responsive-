import "./Work.scss"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
/* import { FiArrowLeft, FiArrowRight } from "react-icons/fi"; */
import VideoBg from "../../video/video-1.mp4"

const Work = () => {
  return (
    <div className = "work" id = "work">
        <div className="wrapper">
            <div className="left">
                <div className="who-we-are">
                    <div className="line">
                        <span></span>
                    </div>
                    <div className="who">
                        <h2>our work</h2>
                    </div>
                </div>
                <div className="title-desc">
                    <h1>Swap my mood</h1>
                    <p>SwapMyMood is a mobile app designed to assist people with traumatic brain injury in using evidence-based
                        methods to support problem-solving and emotion regulation. We helped the Shepherd Center to build their MVP
                        from scratch in only 6 weeks. The challenge was to provide a frction-less experience of tools that were previously 
                        made available only in paper format and how to offer a specific onboarding so the user can receive training from a 
                        qualified cognitive specialist in SWAPS and Emotional Regulation tools before using the app.
                    </p>
                </div>
                <button className="button">
                    <div className = "circle"/>
                    <span>Request a quote</span>
                    <AiOutlineArrowRight className = "arrow"/>
                </button>
                <div className="arrowsContainer">
                    <div className="leftArrow">
                        <div className="leftArrowContainer">
                            <AiOutlineArrowLeft />
                        </div>
                    </div>
                    <div className="rightArrow" >
                        <div className="rightArrowContainer">
                            <AiOutlineArrowRight/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className = "video">
                    <video  autoPlay loop muted src= {VideoBg} type="video/mp4" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work