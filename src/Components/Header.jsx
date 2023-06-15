import React from 'react';
import { Link } from 'react-router-dom';
import '../style/components/header.scss';
import logoImg from '../assets/logo.svg';

export default function Header() {
    return (
        <>
            <div className="left">
                <div className="logo-container">
                    <Link className="logo" to="/ratepunk">
                        <img src={logoImg} alt="Ratepunk logo" />
                    </Link>
                </div>
            </div>
            <div className="right">
                <div className="nav-desktop">
                    <Link className="link" to="/chrome-extension">
                        <span>Chrome extension</span>
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
