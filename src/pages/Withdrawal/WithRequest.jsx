import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const WithRequest = () => {
    const [activeMethod, setActiveMethod] = useState('card');

    return (
        <div className='withdrawal-req'>
            <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className={`payment-method ${activeMethod === 'card' ? 'active' : ''}`}
                                onClick={() => setActiveMethod('card')}
                                style={{ position: 'relative', cursor: 'pointer' }}
                            >
                                <div>Transfer Method</div>
                                <div className="d-flex align-items-center">
                                    <img src="/images/card-img.svg" alt="card" />
                                    <div className="withdrawal-heading ms-2">Visa, Mastercard</div>
                                </div>
                                {activeMethod === 'card' && (
                                    <FaCheckCircle
                                        style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            color: '#3b9cff',
                                            fontSize: '1.2rem'
                                        }}
                                    />
                                )}

                                <hr className='m-0' />
                                <div className="pt-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>Transfer Currencies</div>
                                        <div>EUR, USD</div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>Processing Time</div>
                                        <div>2- business days</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className={`payment-method ${activeMethod === 'wire' ? 'active' : ''}`}
                                onClick={() => setActiveMethod('wire')}
                                style={{ position: 'relative', cursor: 'pointer' }}
                            >
                                <div>Transfer Method</div>
                                <div className="d-flex align-items-center">
                                    <img src="/images/card-img.svg" alt="card" />
                                    <div className="withdrawal-heading ms-2">Bank Wire</div>
                                </div>
                                {activeMethod === 'wire' && (
                                    <FaCheckCircle
                                        style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            color: '#3b9cff',
                                            fontSize: '1.2rem'
                                        }}
                                    />
                                )}
                                <hr className='m-0' />
                                <div className="pt-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>Transfer Currencies</div>
                                        <div>EUR, USD</div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>Processing Time</div>
                                        <div>2- business days</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <form action="">
                            <div className="d-flex align-items-center justify-content-between">
                                <label htmlFor="">Account Id</label>
                                <input type="text" />
                                <label htmlFor="">Withdrawal Method</label>
                                <input type="text" />
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <label htmlFor="">Card Holder Name</label>
                                <input type="text" />
                                <label htmlFor="">Credit Card Number</label>
                                <input type="text" />
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <label htmlFor="">Amount</label>
                                <input type="text" />
                                <label htmlFor="">Select Month And Year</label>
                                <input type="text" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="border rounded p-2" style={{ border: "1px solid #305689" }}>
                        <p className='mb-2'>Dear Customer, Please follow some points about your withdrawal request:</p>
                        <ul>
                            <li>Minimum withdrawal 100 EUR / USD.</li>
                            <li>Withdrawals are processed if ALL customer KYC documentation on the account is in order.</li>
                            <li>The withdrawal is processed within 48h of the request (excluding weekends and holidays).</li>
                            <li>The Broker reserves the right to carry out a post-clearance check.</li>
                            <li>Credit Card withdrawal returns as credit to your card within 15 working days.</li>
                            <li>Withdrawals will return to the same deposit source first.</li>
                            <li>Withdrawal is avoided if it exceeds the available margin on the platform.</li>
                            <li>Bonus offsets proportionally based on deposit/withdrawal ratio.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WithRequest;