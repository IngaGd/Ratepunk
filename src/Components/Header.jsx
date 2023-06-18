import React from 'react';
import { Link } from 'react-router-dom';
import '../style/components/header.scss';
import Logo from './Logo';

import menuImg from '../assets/menu.svg';

export default function Header() {
    return (
        <>
            <div className="nav-desktop">
                <div className="left">
                    <Link className="logo" to="/ratepunk">
                        <Logo />
                    </Link>
                </div>
                <div className="right">
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
            </div>
            <div className="nav-mob">
                <div className="nav-link">
                    <Link className="logo" to="/ratepunk">
                        <Logo />
                    </Link>
                </div>

                <div className="nav-link">
                    <button className="link">
                        <img src={menuImg} alt="menu bar icon" />
                    </button>
                    <div className="dropdown">
                        <div className="link-drop">
                            <Link className="link" to="/chrome-extension">
                                <span>Chrome extension</span>
                            </Link>
                        </div>

                        <div className="link-drop">
                            <Link className="link" to="/price-comparison">
                                Price comparison
                            </Link>
                        </div>

                        <div className="link-drop">
                            <Link className="link" to="/blog">
                                Blog
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
