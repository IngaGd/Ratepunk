import React from 'react';
import '../style/components/infoSteps.scss';
import img1 from '../images/invitation/invitation@2x.png';
import img2 from '../images/Group 12249/Group 12249@2x.png';
import img3 from '../images/gift-card/gift-card@2x.png';

export default function InfoSteps() {
    return (
        <>
            <div className="step">
                <div className="img left">
                    <img src={img1} alt="Invitation envelope" />
                </div>
                <div className="description right">
                    <span>STEP 1</span>
                    <h2>INVITE FRIENDS</h2>
                    <p>Refer friends with your unique referral link.</p>
                </div>
            </div>
            <div className="step">
                <div className="description left">
                    <span>STEP 2</span>
                    <h2>COLLECT COINS</h2>
                    <p>
                        Get 1 coin for each friend that installs our extension
                        using your referral link.
                    </p>
                </div>
                <div className="img right">
                    <img src={img2} alt="Hand holding a coin" />
                </div>
            </div>
            <div className="step">
                <div className="img left">
                    <img src={img3} alt="Gift voucher" />
                </div>
                <div className="description right">
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
