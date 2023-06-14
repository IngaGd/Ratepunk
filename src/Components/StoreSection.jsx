import React from 'react';
import '../style/components/storeSection.css';

export default function StoreSection() {
    return (
        <>
            <div className="chrome">
                <div className="icon">
                    icon
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div className="description">
                    <p>available in the</p>
                    <h5>chrome web store</h5>
                </div>
            </div>
            <div className="apple">
                <div className="icon">
                    icon
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div className="description">
                    <p>available in the</p>
                    <h5>chrome web store</h5>
                </div>
            </div>
            <div className="apple-reviews">
                <div>
                    stars
                    <img src="" alt="" />
                </div>
                <h4>Chrome Store reviews</h4>
            </div>
        </>
    );
}
