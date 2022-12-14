import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__addr">
                <h1 className="footer__logo">Car Mania</h1>

                <h2>Contact</h2>

                <address>
                    Nawabganj, Dhaka - 1320, Bangladesh<br />

                    <a className="footer__btn" href="mailto:example@gmail.com">Email Us</a>
                </address>
            </div>

            <ul className="footer__nav">
                <li className="nav__item">
                    <h2 className="nav__title">Media</h2>

                    <ul className="nav__ul">
                        <li>
                            <Link to="#">Online</Link>
                        </li>

                        <li>
                            <Link to="#">Print</Link>
                        </li>

                        <li>
                            <Link to="#">Alternative Ads</Link>
                        </li>
                    </ul>
                </li>

                <li className="nav__item nav__item--extra">
                    <h2 className="nav__title">Technology</h2>

                    <ul className="nav__ul nav__ul--extra">
                        <li>
                            <Link to="#">Hardware Design</Link>
                        </li>

                        <li>
                            <Link to="#">Software Design</Link>
                        </li>

                        <li>
                            <Link to="#">Digital Signage</Link>
                        </li>

                        <li>
                            <Link to="#">Automation</Link>
                        </li>

                        <li>
                            <Link to="#">Artificial Intelligence</Link>
                        </li>

                        <li>
                            <Link to="#">IoT</Link>
                        </li>
                    </ul>
                </li>

                <li className="nav__item">
                    <h2 className="nav__title">Legal</h2>

                    <ul className="nav__ul">
                        <li>
                            <Link to="#">Privacy Policy</Link>
                        </li>

                        <li>
                            <Link to="#">Terms of Use</Link>
                        </li>

                        <li>
                            <Link to="#">Sitemap</Link>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className="legal">
                <p>&copy; 2023 Something. All rights reserved.</p>

                <div className="legal__links">
                    {/* <span>Made with <span className="heart">???</span> remotely from Anywhere</span> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;