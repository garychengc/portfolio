import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <div id="side-nav">
                        <div id="about-me">About Me</div>
                        <div id="projects">Projects</div>
                        <div id="contact-me">Contact Me</div>

                    </div>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
