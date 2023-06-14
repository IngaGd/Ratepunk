import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div>
                <Link to="/ratepunk">Ratepunk</Link>
                <Link to="/chrome-extension">Chrome Extension</Link>
                <Link to="/price-comparison">Price Comparison</Link>
                <Link to="/blog">Blog</Link>
            </div>
        </>
    );
}
