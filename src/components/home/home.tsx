import React from 'react';
import './home.scss'
import Marquee from "react-fast-marquee";

export const Home = () => {
    const profile = require('../../assets/profile.png')
    const images = [require('../../assets/js.png')
        , require('../../assets/angular.png')
        , require('../../assets/React-icon.png')
        , require('../../assets/nodejs.png')
        , require('../../assets/sass.png')
        , require('../../assets/html.png')
    ]


    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu?.classList.toggle("open");
        icon?.classList.toggle("open");
    }

    const openUrl = (url: string) => {
        window.open(url, '_blank');
    }
    return (
        <div>
            <nav id="desktop-nav">
                <div className="logo">Portafolio</div>
                <div>
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <nav id="hamburger-nav">
                <div className="logo">Portafolio</div>
                <div className="hamburger-menu">
                    <div className="hamburger-icon" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="menu-links">
                        <li><a href="#about" onClick={toggleMenu}>About</a></li>
                        <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    </div>
                </div>
            </nav>
            <section id="profile">
                <div className="section__pic-container">
                    <img src={profile} alt="John Doe profile picture"/>
                </div>
                <div className="section__text">
                    <p className="section__text__p1">Hello, I'm</p>
                    <h1 className="title">Ricardo Carrillo</h1>
                    <p className="section__text__p2">Frontend Developer</p>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2"
                            onClick={()=>{window.open(require('../../assets/resume-example.pdf'))}}
                        >
                            Download CV
                        </button>
                    </div>
                    <div id="socials-container">
                        <img
                            src={require("../../assets/linkedin.png")}
                            alt="My LinkedIn profile"
                            className="icon"
                            onClick={() => openUrl('https://www.linkedin.com/in/ricardo-carrillo-082117129/')}
                        />
                        <img
                            src={require("../../assets/github.png")}
                            alt="My Github profile"
                            className="icon"
                            onClick={() => openUrl('https://github.com/RicardoCarrillp')}
                        />
                    </div>
                </div>
            </section>
            <section id="about">
                <p className="section__text__p1">Get To Know More</p>
                <h1 className="title">About Me</h1>
                <div className="section-container">
                    <div className="about-details-container">
                        <div className="about-containers">
                            <div className="details-container">
                                <img
                                    src={require("../../assets/experience.png")}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <h3>Experience</h3>
                                <p>2+ years <br/>Frontend Development</p>
                                <p>1 year <br/>backend Development</p>
                            </div>
                            <div className="details-container">
                                <img
                                    src={require("../../assets/education.png")}
                                    alt="Education icon"
                                    className="icon"
                                />
                                <h3>Education</h3>
                                <p>Bachelor of Science in Computer Science</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src="./assets/arrow.png"
                    alt="Arrow icon"
                    className="icon arrow"
                    // onClick="location.href='./#experience'"
                />
            </section>
            <section id="experience">
                <p className="section__text__p1">Explore My</p>
                <h1 className="title">Experience</h1>
                <div className="experience-details-container">
                        <div className="details-container">

                            <Marquee direction="left" speed={100}  pauseOnClick={true} >
                                {images.map(img=>(
                                    <div className="image_wrapper">
                                        <img src={img} alt="" />
                                    </div>
                                ))}
                            </Marquee>
                        </div>

                </div>
                <img
                    src="./assets/arrow.png"
                    alt="Arrow icon"
                    className="icon arrow"
                    // onClick={()=>location.href='./#projects'}
                />
            </section>
            <section id="projects">
                <p className="section__text__p1">Browse My Recent</p>
                <h1 className="title">Projects</h1>
                <div className="experience-details-container">
                    <div className="about-containers">
                        <div className="details-container color-container">
                            <div className="article-container">
                                {/*<img*/}
                                {/*    src={require("../../assets/covid.png")}*/}
                                {/*    alt="Project 1"*/}
                                {/*    className="project-img"*/}
                                {/*/>*/}
                            </div>
                            <h2 className="experience-sub-title project-title">Covid Stats</h2>
                            <div className="btn-container">
                                <button
                                    className="btn btn-color-2 project-btn"
                                    onClick={()=>openUrl("https://github.com/RicardoCarrillp/covid-test")}                                >
                                    Github
                                </button>
                                <button
                                    className="btn btn-color-2 project-live"
                                    onClick={()=>openUrl("https://covid-test-beta.vercel.app/login")}

                                >
                                    Live Demo
                                </button>
                            </div>
                        </div>
                        <div className="details-container color-container">
                            <div className="article-container">
                                {/*<img*/}
                                {/*    src="./assets/project-2.png"*/}
                                {/*    alt="Project 2"*/}
                                {/*    className="project-img"*/}
                                {/*/>*/}
                            </div>
                            <h2 className="experience-sub-title project-title">Contact book</h2>
                            <div className="btn-container">
                                <button
                                    className="btn btn-color-2 project-btn"
                                    onClick={()=>openUrl("https://github.com/RicardoCarrillp/contacts_frontendt")}                                >
                                    Github
                                </button>
                                <button
                                    className="btn btn-color-2 project-live"
                                    onClick={()=>openUrl("https://contacts-frontend-gamma.vercel.app/contacts")}
                                >
                                    Live Demo
                                </button>
                            </div>
                        </div>
                        <div className="details-container color-container">
                            <div className="article-container">
                                {/*<img*/}
                                {/*    src={require("../../assets/rick.png")}*/}
                                {/*    alt="Project 3"*/}
                                {/*    className="project-img"*/}
                                {/*/>*/}
                            </div>
                            <h2 className="experience-sub-title project-title">Rick and Morty App</h2>
                            <div className="btn-container">
                                <button
                                    className="btn btn-color-2 project-btn"
                                    onClick={()=>openUrl("https://github.com/RicardoCarrillp/RickandMorty\n")}

                                >
                                    Github
                                </button>
                                <button
                                    className="btn btn-color-2 project-live"
                                    // onclick="location.href='https://github.com/'"
                                    onClick={()=>openUrl("https://rickand-morty-delta.vercel.app/home")}
                                >
                                    Live Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src="./assets/arrow.png"
                    alt="Arrow icon"
                    className="icon arrow"
                    // onclick="location.href='./#projects'"
                />
            </section>
            <section id="contact">
                <p className="section__text__p1">Get in Touch</p>
                <h1 className="title">Contact Me</h1>
                <div className="contact-info-upper-container">
                    <div className="contact-info-container">
                        <img
                            src={require('../../assets/email.png')}
                            alt="Email icon"
                            className="icon contact-icon email-icon"
                        />
                        <p><a href="mailto:carrilloricki2211@gmail.com">carrilloricki2211@gmail.com</a></p>
                    </div>
                    <div className="contact-info-container">
                        <img
                            src={require('../../assets/linkedin.png')}
                            alt="LinkedIn icon"
                            className="icon contact-icon"
                        />
                        <p><a href="https://www.linkedin.com/in/ricardo-carrillo-082117129/">LinkedIn</a></p>
                    </div>
                </div>
            </section>
            <footer>
                <nav>
                    <div className="nav-links-container">
                        <ul className="nav-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <p>Copyright &#169; 2023 Ricardo Carrillo. All Rights Reserved.</p>
            </footer>
        </div>
    );

}
