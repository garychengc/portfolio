import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Project 1', description: 'Munch-Up'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Project 2', description: 'Scheduler'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Project 3', description: 'Twetter'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Project 4', description: 'TinyApp'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Project 5', description: 'Weather Forecast'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Project 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
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
                            <h2>A Web Developer who is passionate about learning -- <i id="learning">technology, finance, engineering, travelling, weight-lifting, snowboarding</i> </h2>
                
                        </header>
                        <div>
                            <ul>
                                <li>Eager to learn and develop new skills</li>
                                <li>Never stop challenging myself</li>
                                <li>Constantly looking for opportunities to grow</li>
                                <li>Integrity; intelligent; initiative</li>
                                <li>Innovative and creative</li>
                                <li>Give back to the community</li>


                            </ul>    
                        </div>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Contact Me</h2>
                        <p id="contact-me-content">If you have any questions or would like to talk to me about my portfolio, feel free to send me an email.</p>
                        <div className="row">
                            {/* <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div> */}
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