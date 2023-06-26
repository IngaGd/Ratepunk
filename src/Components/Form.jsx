import React, { useState } from 'react';
import axios from 'axios';

import successImg from '../assets/success.svg';

export default function Form() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    function isValidEmail(email) {
        const regExp =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const isValid = regExp.test(String(email).toLocaleLowerCase());
        return isValid;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!isValidEmail(email)) {
            setError('Please enter a valid email.');
            setTimeout(() => {
                setError(null);
                setEmail('');
                setSubmitted(false);
            }, 2000);
            return;
        }
        setError(null);
        setMessage(null);

        axios
            .put(
                'https://api.jsonbin.io/v3/b/648f10378e4aa6225eb05d30',
                { email },
                {
                    headers: {
                        'X-Master-Key':
                            '$2b$10$.tCN23k0zW6mKYxltPyA9.5lDGYZG5285UZ6cyUZHjoBDx0JpGPjC',
                    },
                }
            )
            .then(() => {
                setMessage('Your email is confirmed!');
                setSubmitted(true);
                setEmail('');
            })
            .catch(() => {
                setError('Failed to save email.');
                setEmail('');
                setSubmitted(false);
            });
    }

    function handleClear() {
        setEmail('');
        setSubmitted(false);
    }

    return (
        <div className="box-form">
            <h1>REFER FRIENDS AND GET REWARDS</h1>
            <p>
                Refer your friends to us and earn hotel booking vouchers. We'll
                give you 1 coin for each friend that installs our extension.
                Minimum cash-out at 20 coins.
            </p>
            <div className="messages">
                {error && (
                    <div className="error">
                        <span>{error}</span>
                    </div>
                )}
                {message && (
                    <div className="success">
                        <img src={successImg} alt="Success" />
                        <span>{message}</span>
                    </div>
                )}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="cell-1">
                    <div className="input-button-container">
                        <label htmlFor="email"></label>
                        {/* <img
                            className={`envelope-img ${
                                submitted ? 'hidden' : ''
                            }`}
                            src={envelopeImg}
                            alt="envelope"
                        /> */}
                        <div className="input-group web">
                            <input
                                submitted={submitted ? 'true' : 'false'}
                                className={
                                    !submitted ? 'input-reg' : 'input-subm'
                                }
                                id="email"
                                type="email"
                                placeholder={
                                    submitted
                                        ? 'https://ratepunk.com/referral'
                                        : 'Enter your email address'
                                }
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {submitted && (
                                <button
                                    className="copy-btn"
                                    type="button"
                                    onClick={handleClear}
                                >
                                    Copy
                                </button>
                            )}
                        </div>
                        <div className="input-group mob">
                            <input
                                submitted={submitted ? 'true' : 'false'}
                                className={
                                    !submitted ? 'input-reg' : 'input-subm'
                                }
                                id="email"
                                type="email"
                                placeholder={
                                    submitted
                                        ? 'https://ratepunk.com/referral'
                                        : 'Enter your email address'
                                }
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="web">
                    {!submitted && (
                        <button
                            className="form-btn"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Get referral link
                        </button>
                    )}
                </div>
                <div className="mob">
                    <button
                        className="form-btn"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        <span>
                            {submitted ? 'Copy URL' : 'Get referral link'}
                        </span>
                    </button>
                </div>
                <span>Limits on max rewards apply.</span>
            </form>
        </div>
    );
}
