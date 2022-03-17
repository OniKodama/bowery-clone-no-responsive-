import React from 'react'
import './Menu.scss'

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className= {"menu "+ (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href = "#description">
                        <span className = "number">01</span>
                        who we are
                        <span className = "dot">.</span>
                    </a>
                    
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href = "#offers">
                        <span className = "number">02</span>
                        what we offer
                        <span className = "dot">.</span>
                    </a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href = "#work">
                        <span className = "number">03</span>
                        our work
                        <span className = "dot">.</span>
                    </a>
                    
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href = "#trust">
                        <span className = "number">04</span>
                        who trust us
                        <span className = "dot">.</span>
                    </a>
                    
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href = "#testimonials">
                        <span className = "number">05</span>
                        testimonials
                        <span className = "dot">.</span>
                    </a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href = "#doit">
                        <span className = "number">06</span>
                        let's do it
                        <span className = "dot">.</span>
                    </a>
                    
                </li>
            </ul>
        </div>
    )
}

export default Menu