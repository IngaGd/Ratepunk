import React from 'react';
import { Link } from 'react-router-dom';
import '../style/components/header.css';

export default function Header() {
    return (
        <>
            <div className="left">
                <Link className="logo" to="/ratepunk">
                    Ratepunk
                </Link>
            </div>
            <div className="right">
                <div className="nav-desktop">
                    <Link className="link" to="/chrome-extension">
                        Chrome Extension
                    </Link>
                    <Link className="link" to="/price-comparison">
                        Price Comparison
                    </Link>
                    <Link className="link" to="/blog">
                        Blog
                    </Link>
                </div>
            </div>
        </>
    );
}
