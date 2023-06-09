import style from "./Webovio.module.css"
import background from "./img/background.png"
import logo from "./img/Logo.png"
import nav from "./img/nav.png"
import logoTeams1 from "./img/logo-teams1.png"
import logoTeams2 from "./img/logo-teams2.png"
import logoTeams3 from "./img/logo-teams3.png"
import logoTeams4 from "./img/logo-teams4.png"
import logoTeams5 from "./img/logo-teams5.png"
import strategyCard from "./img/strategy-card.jpeg"
import blockImg1 from "./img/block-img1.png"
import blockImg2 from "./img/block-img2.png"
import blockImg3 from "./img/block-img3.png"

const Webovio = () => {
    return (
        <div className={style.webovio}>
            <header>
                <img src={background} alt="" className={style.background}/>
                <a href="">
                    <img src={logo} alt="" className={style.logo}/>
                </a>
                <a href="">
                    <img src={nav} alt="" className={style.nav}/>
                </a>
            </header>
            <main>
                <div className={style.creative}>
                    <p className={style.creativeSubtitle}>A place where</p>
                    <p className={style.creativeTitle}>
                        A creative agency <br/>
                        for redemptive <br/>
                        brands
                    </p>
                    <p className={style.creativeDiscription}>
                        Anteelo is a leading strategic design firm that builds powerful
                        digital <br/>
                        solutions for startups and enterprises.
                    </p>
                    <a href="" className={style.creativeLink}>▸ Get in touch</a>
                </div>
                <div className={style.logoTeams}>
                    <img src={logoTeams1} alt=""/>
                    <img src={logoTeams2} alt=""/>
                    <img src={logoTeams3} alt=""/>
                    <img src={logoTeams4} alt=""/>
                    <img src={logoTeams5} alt=""/>
                </div>
                <div className={style.strategy}>
                    <div className={style.strategyText}>
                        <p className={style.strategySubtitle}>What we do for you</p>
                        <p className={style.strategyTitle}>
                            Strategy. Design <br/>
                            Content. <span> Technology </span>
                            <br/>
                            Development
                        </p>
                        <p className={style.strategyDiscription}>
                            There’s no secret sauce, no wizard behind the curtain. What <br/>
                            makes Aerolab tick is an interdisciplinary team with a <br/>
                            framework that fosters candid collaboration.
                        </p>
                        <a className={style.strategyLink} href="">▸ More know About us</a>
                    </div>
                    <div className={style.strategyPublication}>
                        <p className={style.publicationDiscription}>
                            With More than 10 Years of Knowledge and Expertise we Design and
                            Code Websites and Apps, We Build Brands and Help Them Succeed
                        </p>
                        <div className={style.publicationSignature}>
                            <img src={strategyCard} alt=""/>
                            <div className={style.signatureText}>
                                <p className={style.signatureTitle}>Genevieve Rodriquez</p>
                                <p className={style.signatureSubtitle}>Founder & CEO, Webovio</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.project}>
                    <p className={style.projectTitle}>
                        We Have Some <br/>
                        Awesome Project.
                    </p>
                    <p className={style.projectDiscription}>
                        Lorem Ipsum is simply dummy text of the printing and <br/>
                        typesetting industry. Lorem Ipsum has been the industry's <br/>
                        standard dummy text ever since the 1500s,
                    </p>
                </div>
                <div className={style.blocks}>
                    <div className={style.blockBalenciaga}>
                        <img className={style.blockImg} src={blockImg1} alt=""/>
                        <div className={style.blockCard}>
                            <p className={style.cardDiscription}>
                                “In my history of working with trade show vendors, I can honestly
                                say that there is not one company that I've ever worked with that
                                has better service than Exhibit Systems.”
                            </p>
                            <div className={style.cardSignature}>
                                <img className={style.cardImg} src={''} alt=""/>
                                <div className={style.cardText}>
                                    <p className={style.cardTitle}>Angel Armstrong</p>
                                    <p className={style.cardSubtitle}>Founder & CEO, Google</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.blockText}>
                            <p className={style.blockText}>
                                The wall new <br/>
                                Balenciaga.com
                            </p>
                            <p className={style.blockDiscription}>
                                This article is floated online with an aim to help you <br/>
                                find the best dvd printing solution.
                            </p>
                            <p className={style.blockDiscription}>
                                Dvd printing is an important feature used by large <br/>
                                and small DVD production houses to print <br/>
                                information on DVDs.
                            </p>
                            <a className={style.blockLink} href="">▸ See Case Study</a>
                        </div>
                    </div>
                    <div className={style.blockModel}>
                        <img className={style.blockImg} src={blockImg2} alt=""/>
                        <div className={style.blockCardReverse}>
                            <p className={style.cardDiscription}>
                                “I know they are going to be honest with me. I am not going to get
                                a subpar product; I know it is going to be good. That is the
                                number one advantage of working with Exhibit Systems.
                            </p>
                            <div className={style.cardSignature}>
                                <img className={style.cardImg} src={''} alt=""/>
                                <div className={style.cardText}>
                                    <p className={style.cardTitle}>Lina Hart</p>
                                    <p className="card-subtitle">Founder & CEO, Jico</p>
                                </div>
                            </div>
                        </div>
                        <div className="block-text">
                            <p className="block-title">
                                Is this the future of <br/>
                                3D model?
                            </p>
                            <p className="block-discription">
                                While it was just a TV show, that little speech at the beginning
                                of the <br/>
                                original Star Trek show really did do <br/>
                                a good job of capturing our feelings about space.
                            </p>
                            <p className="block-discription">
                                It is those feelings that drive our love of astronomy <br/>
                                and our desire to learn more and more about it.
                            </p>
                            <a className="block-link" href="">▸ See Case Study</a>
                        </div>
                    </div>
                    <div className="block-booking">
                        <img className="block-img" src={blockImg3} alt=""/>
                        <div className="block-card">
                            <p className="card-discription">
                                “Exhibit Systems is not a provider. They are not a supplier. They
                                are a partner with expertise in making trade shows effective.”
                            </p>
                            <div className="card-signature">
                                <img className="card-img" src="img/card-img3.png" alt=""/>
                                <div className="card-text">
                                    <p className="card-title">Eunice Oliver</p>
                                    <p className="card-subtitle">Founder & CEO, Zeem</p>
                                </div>
                            </div>
                        </div>
                        <div className="block-text">
                            <p className="block-title">
                                Is this the future of <br/>
                                Online Booking
                            </p>
                            <p className="block-discription">
                                You should be able to find several indispensable <br/>
                                facts about motivation in the following paragraphs.
                            </p>
                            <p className="block-discription">
                                If there’s at least one fact you didn’t know before, <br/>
                                imagine the difference it might make.
                            </p>
                            <a className="block-link" href="">▸ See Case Study</a>
                        </div>
                    </div>
                </div>
                <div className="deation">
                    <p className="deation-title">
                        Deation & Evaluation - Best Way <br/>
                        to Kick off Your Product Idea
                    </p>
                    <div className="deation-seactions">
                        <div className="deation-section">
                            <p className="section-title">
                                Product <br/>
                                Design Sprint
                            </p>
                            <p className="section-discription">
                                A five-day workshop that will help you answer crucial business
                                questions
                            </p>
                            <a href="" className="section-link">▸ Read More</a>
                        </div>
                        <div className="deation-section">
                            <p className="section-title">
                                Scoping <br/>
                                Session
                            </p>
                            <p className="section-discription">
                                A workshop aimed at shaping your business idea, answering
                                questions regarding project planning
                            </p>
                            <a href="" className="section-link">▸ Read More</a>
                        </div>
                        <div className="deation-section">
                            <p className="section-title">
                                Code <br/>
                                Review
                            </p>
                            <p className="section-discription">
                                An evaluation which will help you radically improve your product.
                            </p>
                            <a href="" className="section-link">▸ Read More</a>
                        </div>
                        <div className="deation-section">
                            <p className="section-title">
                                UX <br/>
                                Review
                            </p>
                            <p className="section-discription">
                                Do you know what one of the key secrets of success is what makes
                                people successful in business
                            </p>
                            <a href="" className="section-link">▸ Read More</a>
                        </div>
                    </div>
                </div>
                <div className="amazing">
                    <p className="amazing-title">
                        Let’s make something <br/>
                        amazing together.
                    </p>
                    <a className="amazing-link" href="">▸ LET'S GET STARTED</a>
                </div>
            </main>
            <footer>
                <div className="contact">
                    <p className="contact-title">Phone</p>
                    <p className="contact-title">Address</p>
                    <p className="contact-data">+32 50 31 28 32</p>
                    <p className="contact-data">491 Merlin Crest Suite 963</p>
                </div>
                <div className="line"></div>
                <div className="footer-menu">
                    <div className="services">
                        <p className="menu-title">Services</p>
                        <a href="" className="menu-link">Strategy Design</a>
                        <a href="" className="menu-link">Produkt Design</a>
                        <a href="" className="menu-link">Content Strategy</a>
                        <a href="" className="menu-link">Brand Strategy</a>
                        <a href="" className="menu-link">Development</a>
                    </div>
                    <div className="help">
                        <p className="menu-title">Help and advice</p>
                        <a href="" className="menu-link">How it works</a>
                        <a href="" className="menu-link">Contact Support</a>
                        <a href="" className="menu-link">Privacy Policy</a>
                        <a href="" className="menu-link">FAQ</a>
                    </div>
                    <div className="company">
                        <p className="menu-title">company</p>
                        <a href="" className="menu-link">About</a>
                        <a href="" className="menu-link">Blog</a>
                        <a href="" className="menu-link">Contact</a>
                        <a href="" className="menu-link">Jobs</a>
                    </div>
                    <div className="media">
                        <p className="menu-title">Get in Touch</p>
                        <p className="menu-link">
                            Feel free to get in touch with us <br/>
                            vai email
                        </p>
                        <p className="media-info">info.webovio@gmail.com</p>
                        <div className="media-icon">
                            <button>
                                <img src="img/facebook.png" alt=""/>
                            </button>
                            <button>
                                <img src="img/twitter.png" alt=""/>
                            </button>
                            <button>
                                <img src="img/google.png" alt=""/>
                            </button>
                            <button>
                                <img src="img/linkedin.png" alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="footer-logo">
                    <img src="img/Logo.png" alt=""/>
                    <p>© 2020@webovio. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Webovio