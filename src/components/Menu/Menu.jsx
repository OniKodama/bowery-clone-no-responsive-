import React from 'react'
import './Menu.scss'
import {motion} from 'framer-motion'

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className= {"menu "+ (menuOpen && "active")}>  
            <ul>
            <motion.div
                whileInView={{ y: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
            >
                <li onClick={() => setMenuOpen(false)}>
                    <a href = "#description">
                        <span className = "number">01</span>
                        Home
                        <span className = "dot">.</span>
                    </a>
                    
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href = "#offers">
                        <span className = "number">02</span>
                        Blog
                        <span className = "dot">.</span>
                    </a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href = "#work">
                        <span className = "number">03</span>
                        Podcast
                        <span className = "dot">.</span>
                    </a>
                    
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href = "#trust">
                        <span className = "number">04</span>
                        Video
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
                </motion.div>
            </ul>
        </div>
    )
}

export default Menu