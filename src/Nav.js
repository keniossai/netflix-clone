import React, {useState, useEffect} from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState([])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100 ){
                handleShow(true)
            }else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])
    return (
        <div className={`nav ${show && "nav-black"}`}>
            <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className="nav-logo" />
            <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" className="nav-avatar" />
            
        </div>
    )
}

export default Nav
