import React from 'react';
import { Link } from 'react-router-dom';
import '../style/components/header.scss';
import Logo from './Logo';

import menuImg from '../assets/menu.svg';
import closeImg from '../assets/close.svg';
import { useState } from 'react';

export default function Header() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const swithDropdown = () => {
        setDropdownOpen((currentState) => !currentState);
    };

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
                    <button className="link" onClick={swithDropdown}>
                        <img
                            src={isDropdownOpen ? closeImg : menuImg}
                            alt="menu bar icon"
                        />
                    </button>
                    <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
                        <div className="link-drop">
                            <Link className="link" to="/chrome-extension">
                                Chrome extension
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
