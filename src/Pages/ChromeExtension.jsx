import React from 'react';
import Header from '../Components/Header';

export default function ChromeExtension() {
    return (
        <>
            <div className="container header">
                <div className="row header">
                    <Header />
                </div>
            </div>
            <div className="container main">
                <div className="row">
                    <div>CONTENT OF CHROME EXTENSION PAGE</div>
                </div>
            </div>
        </>
    );
}
