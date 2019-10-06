import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/profile.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a id="logo" href="#TITLE" className="image avatar"><img src={avatar} alt="" /></a>
                    <div id="side-nav">
                        <a href="#TITLE"><div id="about-me">About Me</div> </a>
                        <a href="#project-section"><div id="projects">My Projects</div></a>
                        <a href="#contact-section"><div id="contact-me">Contact Me</div></a>

                    </div>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
