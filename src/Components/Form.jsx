import React from 'react';

export default function Form() {
    return (
        <div className="box-form">
            <h1>REFER FRIENDS AND GET REWARDS</h1>
            <p>
                Refer your friends to us and earn hotel booking vouchers. We'll
                give you 1 coin for each friend that installs our extension.
                Minimum cash-out at 20 coins.
            </p>
            <form action="/">
                <div className="cell-1">
                    <label htmlFor="email"></label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                    />
                </div>
                <div className="cell-1">
                    <button className="form-btn">Get Referral Link</button>
                </div>
                <div>Limits on max rewards apply.</div>
            </form>
        </div>
    );
}
