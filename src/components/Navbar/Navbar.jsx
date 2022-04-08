import  './Navbar.scss'


const Navbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"navbar " + (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <h1>B</h1>
                        <span>.</span>
                </div>
                <div className = "right">
                    <div className = "hamburguer" onClick = {() =>setMenuOpen(!menuOpen)}>
                        <span className = "line1"></span>
                        <span className = "line2"></span>
                        <span className = "line3"></span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar