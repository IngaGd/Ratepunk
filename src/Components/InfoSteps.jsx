import React from 'react';
import '../style/components/infoSteps.scss';
import img1 from '../assets/invite.svg';
import img2 from '../assets/collect-coins.svg';
import img3 from '../assets/voucher.svg';

export default function InfoSteps() {
    return (
        <>
            <div className="step">
                <div className="img">
                    <img src={img1} alt="Invitation envelope" />
                </div>
                <div className="description">
                    <span>STEP 1</span>
                    <h2>INVITE FRIENDS</h2>
                    <p>Refer friends with your unique referral link.</p>
                </div>
            </div>
            <div className="step img-left">
                <div className="description">
                    <span>STEP 2</span>
                    <h2>COLLECT COINS</h2>
                    <p>
                        Get 1 coin for each friend that installs our extension
                        using your referral link.
                    </p>
                </div>
                <div className="img">
                    <img src={img2} alt="Hand holding a coin" />
                </div>
            </div>
            <div className="step">
                <div className="img">
                    <img src={img3} alt="Gift voucher" />
                </div>
                <div className="description">
                    <span>STEP 3</span>
                    <h2>GET VOUCHER</h2>
                    <p>
                        Redeem for a $20 hotel booking voucher once you collect
                        20 coins.
                    </p>
                </div>
            </div>
        </>
    );
}
