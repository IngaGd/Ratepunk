import React from 'react';
import Footer from '../Components/Footer';
import Form from '../Components/Form';
import Header from '../Components/Header';
import InfoSteps from '../Components/InfoSteps';
import StoreSection from '../Components/StoreSection';

import '../style/pages/home.scss';

export default function Home() {
    return (
        <>
            <div className="container header">
                <div className="row">
                    <Header />
                </div>
            </div>
            <div className="container main">
                <div className="row">
                    <div className="left-content">
                        <Form />
                    </div>
                    <div className="right-content">
                        <InfoSteps />
                    </div>
                </div>
            </div>
            <div className="container store">
                <div className="row">
                    <StoreSection />
                </div>
            </div>
            <div className="container footer">
                <div className="row">
                    <Footer />
                </div>
            </div>
        </>
    );
}
