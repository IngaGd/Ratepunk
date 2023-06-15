import React from 'react';
import { Link } from 'react-router-dom';
import '../style/components/footer.scss';

export default function Footer() {
    return (
        <>
            <div className="left-content">
                <div className="logo">
                    Logo
                    <img src="" alt="" />
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
            <div className="middle-content">
                <h3>QUICK LINKS</h3>
                <div className="nav-footer">
                    <Link to="/price-comparison">Price Comparison</Link>
                    <Link to="/chrome-extension">Chrome Extension</Link>
                    <Link to="/how-it-works">How It Works</Link>
                    <Link to="/blog">Ratepunk Blog</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                </div>
            </div>
            <div className="right-content">
                <div className="upper-content">
                    <h3>CONTACT</h3>
                    <img src="" alt="" />
                    <a href="mailto:hi@ratepunk.com">hi@ratepunk.com</a>
                </div>
                <div className="lower-content">
                    <h3>SOCIAL</h3>
                    <button>
                        <img src="" alt="instagram icon" />
                    </button>
                    <button>
                        <img src="" alt="facebook icon" />
                    </button>
                    <button>
                        <img src="" alt="linkedin icon" />
                    </button>
                    <button>
                        <img src="" alt="twitter icon" />
                    </button>
                    <button>
                        <img src="" alt="tiktok icon" />
                    </button>
                </div>
            </div>
            <div className="copyright-mob">
                &copy; 2021 Ratepunk. All Rights Reserved.
            </div>
        </>
    );
}
