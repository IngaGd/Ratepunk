import React from 'react';
import Header from '../Components/Header';

export default function Blog() {
    return (
        <>
            <div className="container header">
                <div className="row">
                    <Header />
                </div>
            </div>
            <div className="container main">
                <div className="row">
                    <div>CONTENT OF BLOG PAGE</div>
                </div>
            </div>
        </>
    );
}
