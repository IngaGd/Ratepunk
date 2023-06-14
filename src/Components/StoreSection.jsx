import React from 'react';
import '../style/components/storeSection.css';

export default function StoreSection() {
    return (
        <>
            <div className="chrome">
                <div className="icon">
                    <img className="store" src="" alt="" />
                    <img className="coin" src="" alt="" />
                </div>
                <div className="description">
                    <p>available in the</p>
                    <h5>chrome web store</h5>
                </div>
            </div>
            <div className="apple">
                <div className="icon">
                    <img className="store" src="" alt="" />
                    <img className="coin" src="" alt="" />
                </div>
                <div className="description">
                    <p>available in the</p>
                    <h5>chrome web store</h5>
                </div>
            </div>
            <div className="apple-reviews">
                <div>
                    <img className="stars" src="" alt="" />
                </div>
                <span>Chrome Store reviews</span>
            </div>
        </>
    );
}
