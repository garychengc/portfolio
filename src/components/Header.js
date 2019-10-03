import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#one" className="image avatar"><img src={avatar} alt="" /></a>
                    <div id="side-nav">
                        <a href="#one"><div id="about-me">About Me</div> </a>
                        <a href="#two"><div id="projects">My Projects</div></a>
                        <a href="#three"><div id="contact-me">Contact Me</div></a>

                    </div>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
