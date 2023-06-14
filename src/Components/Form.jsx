import React from 'react';
import '../style/components/form.css';

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
                    <i class="fa fa-envelope-o"></i>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                    />
                </div>
                <div className="cell-1">
                    <button className="form-btn">Get referral link</button>
                </div>
                <span>Limits on max rewards apply.</span>
            </form>
        </div>
    );
}
