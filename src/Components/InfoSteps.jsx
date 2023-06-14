import React from 'react';

export default function InfoSteps() {
    return (
        <>
            <div className="step">
                <div>img</div>
                <div>
                    <span>STEP 1</span>
                    <h2>INVITE FRIENDS</h2>
                    <p>Refer friends with your unique referral link.</p>
                </div>
            </div>
            <div className="step">
                <div>
                    <span>STEP 2</span>
                    <h2>COLLECT COINS</h2>
                    <p>
                        Get 1 coin for each friend that installs our extension
                        using your referral link.
                    </p>
                </div>
                <div>img</div>
            </div>
            <div className="step">
                <div>img</div>
                <div>
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
