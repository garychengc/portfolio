import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/Munchup.jpg'
import thumb02 from '../assets/images/thumbs/Scheduler.jpg'
import thumb03 from '../assets/images/thumbs/Tweeter.jpg'
import thumb04 from '../assets/images/thumbs/TinyURL.jpg'
// import thumb05 from '../assets/images/thumbs/05.jpg'
// import thumb06 from '../assets/images/thumbs/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', thumbnail: thumb01, caption: 'Food Ordering App', link: "https://github.com/garychengc/Munch-Up", description: "A full stack web application for food ordering built with JavaScript, Express, jQuery, and PostgreSQL. Implemented Google map, Google pay, Twilio APIs."},
    { id: '2', thumbnail: thumb02, caption: 'Interview Scheduler', link: "https://github.com/garychengc/scheduler", description: 'An interviewr scheduler built with React and WebSocket to provide two-way interactive communication between the users and server.'},
    { id: '3', thumbnail: thumb03, caption: 'Tweeter', link: "https://github.com/garychengc/tweeter", description: "Tweeter is a simple, single-page Twitter clone. The app is built upon the utilizations of HTML, CSS, Sass, JS, jQuery and AJAX front-end skills, and the Node, Express back-end skills."},
    { id: '4', thumbnail: thumb04, caption: 'TinyURL', link:"https://github.com/garychengc/tinyapp", description: 'TinyURL is a full stack web application built with Node and Express that allows users to shorten long URLs, which can be implemented to improve work efficiency and productivity.'},
    // { id: '5', thumbnail: thumb05, caption: 'Project 5', link: "https://github.com/garychengc/scheduler", description: 'Weather Forecast'},
    // { id: '6', thumbnail: thumb06, caption: 'Project 6', link: "https://github.com/garychengc/scheduler", description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Gary Chen - Web Dev Journey"
        const siteDescription = "A place about me and my portfolio"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <div id="name">Gary Chen</div>
                            <h2>A Web Developer who is passionate about learning<br/><i id="learning">-- technology, finance, engineering, travelling, weight-lifting, snowboarding</i> </h2>
                
                        </header>
                        <div>
                            <ul>
                                <li>Eager to learn and develop new skills</li>
                                <li>Constantly looking for opportunities to grow</li>
                                <li>Never stop challenging myself</li>
                                <li>Integrity, intelligence, initiative</li>
                                <li>Innovative, creative, diligent</li>
                                <li>Give back to the community</li>


                            </ul>    
                        </div>
                    </section>

                    <section id="two">
                        <h2>My Projects</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, thumbnail, caption, link, description }) => ({
                            thumbnail,
                            caption,
                            link,
                            description
                        }))} />
                    </section>

                    <section id="three">
                        <h2>Contact Me</h2>
                        <p id="contact-me-content">If you have any questions or would like to talk to me about my portfolio, feel free to send me an email.</p>
                        <div className="row">
                            <div className="4u 12u$(small)" id="contact-info">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-envelope-o" id="email-icon"><span className="label">Email</span></h3>
                                        <a href="mailto:garychen.whc@gmail.com" target="_blank">garychen.whc@gmail.com</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-home" id="address-icon"><span className="label">Address</span></h3>
                                        Toronto, ON Canada
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex