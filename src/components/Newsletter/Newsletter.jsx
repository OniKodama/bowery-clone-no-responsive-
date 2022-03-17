import "./Newsletter.scss";
import { FaTelegram } from 'react-icons/fa'

const Newsletter = () => {
  return (
    <div className = "newsletter" id = "doit">
      <div className="wrapper">
        <div className="who-we-are" id = "final">
          <div className="line">
            <span></span>
          </div>
          <div className="who">
            <h2>let's do it</h2>
          </div>
      </div>
      <div className="callToAction">
        <p>
          hello, my name is
          <span>
            <input type="text" placeholder="your name" className = "input"/>
          </span>
          . 
          <br />
          I'm interest in 
          <span>
            <select name="selection" className = "selectionBox">
              <option  value = " " className = "input"></option>
              <option value = "web-development" className = "input">Web-development</option>
              <option value = "web-development" className = "input">Marketing</option>
              <option value = "web-development" className = "input">UX/UI Design</option>
            </select>
          </span>
          <br />
          please write me back at 
          <br />
          <span>
            <input type="email" placeholder="your email" className = "input"/>
          </span>
          .
          <span>
            <FaTelegram className = "icon"/>
          </span>
         </p>
      </div>
    </div>
  </div>
  )
}

export default Newsletter