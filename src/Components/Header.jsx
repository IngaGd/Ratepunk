import React from 'react';
import { Link } from 'react-router-dom';
import '../style/components/header.css';
import logoImg from '../images/logo/logo.png';

export default function Header() {
    return (
        <>
            <div className="left">
                <div className="logo-container">
                    <img src={logoImg} alt="Ratepunk logo" />
                    <Link className="logo" to="/ratepunk">
                        Ratepunk
                    </Link>
                </div>
            </div>
            <div className="right">
                <div className="nav-desktop">
                    <Link className="link" to="/chrome-extension">
                        Chrome extension
                    </Link>
                    <Link className="link" to="/price-comparison">
                        Price comparison
                    </Link>
                    <Link className="link" to="/blog">
                        Blog
                    </Link>
                </div>
                <div className="nav-mob">
                    <button class="link">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </>
    );
}
