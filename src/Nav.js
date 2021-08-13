import React, { useEffect, useState } from 'react'
import './Nav.css'
import avatar from "./images/avatar.png"

function Nav() {
    const [show, handleShow] = useState(false)

    const transmitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transmitionNavBar)
        return () => window.removeEventListener("scroll", transmitionNavBar)
    }, [])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img
                    className="nav__logo"
                    alt=""
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                />
                <img
                    className="nav__avatar"
                    alt=""
                    src={avatar}
                />
            </div>
        </div>
    )
}

export default Nav
