import React from 'react';
import { Link } from 'react-router-dom';
import '../style/components/footer.scss';
import Logo from './Logo';

import icon1 from '../assets/instagram.svg';
import icon2 from '../assets/facebook.svg';
import icon3 from '../assets/linkedin.svg';
import icon4 from '../assets/twitter.svg';
import icon5 from '../assets/tiktok.svg';
import emailImg from '../assets/email-footer.svg';

export default function Footer() {
    return (
        <>
            <div className="left-column">
                <div className="logo-container">
                    <Logo />
                </div>
                <div className="desciption">
                    Ratepunk compares hotel room prices across the major online
                    travel agencies. When you search for a room, Ratepunk
                    extension scans the top booking sites and runs a price
                    comparison, so you can be confident in knowing you’re
                    getting the best deal!
                </div>
                <div className="copyright-desktop">
                    &copy; 2021 Ratepunk. All Rights Reserved.
                </div>
            </div>
            <div className="middle-column">
                <h3>Quick links</h3>
                <div className="nav-footer">
                    <Link className="link" to="/price-comparison">
                        <span>Price Comparison</span>
                    </Link>
                    <Link className="link" to="/chrome-extension">
                        Chrome Extension
                    </Link>
                    <Link className="link" to="/how-it-works">
                        How It Works
                    </Link>
                    <Link className="link" to="/blog">
                        Ratepunk Blog
                    </Link>
                    <Link className="link" to="/privacy-policy">
                        Privacy Policy
                    </Link>
                </div>
            </div>
            <div className="right-column">
                <div className="upper-content">
                    <h3>Contact</h3>
                    <div className="mail">
                        <img src={emailImg} alt="" />
                        <a href="mailto:hi@ratepunk.com">hi@ratepunk.com</a>
                    </div>
                </div>
                <div className="lower-content">
                    <h3>Social</h3>
                    <div className="icon-container">
                        <a href="#" className="icons">
                            <img src={icon1} alt="instagram icon" />
                        </a>
                        <a href="#" className="icons">
                            <img src={icon2} alt="facebook icon" />
                        </a>
                        <a href="#" className="icons">
                            <img src={icon3} alt="linkedin icon" />
                        </a>
                        <a href="#" className="icons">
                            <img src={icon4} alt="twitter icon" />
                        </a>
                        <a href="#" className="icons">
                            <img src={icon5} alt="tiktok icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="copyright-mob">
                &copy; 2021 Ratepunk. All Rights Reserved.
            </div>
        </>
    );
}
