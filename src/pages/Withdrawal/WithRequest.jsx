import React from 'react'

const WithRequest = () => {
    return (
        <div className='withdrawal-req'>
            <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="payment-method method-active">
                                <div>Transfer Method</div>
                                <div className="d-flex">
                                    <img src="/images/card-img.svg" alt="card" />
                                    <div className="withdrawal-heading">Visa, Mastercard</div>
                                </div>
                                <hr className='m-0' />
                                <div className="pt-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="">Transfer Currencies </div>
                                        <div className="">EUR, USD</div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="">Processing Time </div>
                                        <div className="">2-business days</div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="payment-method">
                                <div>Transfer Method</div>
                                <div className="d-flex">
                                    <img src="/images/card-img.svg" alt="card" />
                                    <div className="withdrawal-heading">Bank Wire</div>
                                </div>
                                <hr className='m-0' />
                                <div className="pt-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="">Transfer Currencies</div>
                                        <div className="">EUR, USD</div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="">Processing Time</div>
                                        <div className="">2-business days</div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="border rounded p-2">
                        <p className='mb-2'>Dear Customer, Please follow some points about your withdrawal request:</p>
                        <ul>
                            <li>Minimum withdrawal 100 EUR / USD.</li>
                            <li>Withdrawals are processed if ALL customer KYC documentation on the account is in order. If there are open positions, the back office reserves the right to wait for adequate available capital to be withdrawn.</li>
                            <li>The withdrawal is processed within 48h of the request (excluding Saturday, Sunday and holidays).</li>
                            <li>The Broker reserves the right to carry out a post-clearance check on the correct costs of spreads and swaps on closed positions.</li>
                            <li>If you apply for the guaranteed positions during the account opening and make the withdrawal during the startup, there is a minimum cost of evasion (see T&C).</li>
                            <li>The withdraw by Credit Card will return as a credit to your credit/debit card within 15 working days (it means 3 weeks).</li>
                            <li>If you have deposit fund with one or more credit card, the first withdrawals will return according to the same deposit source until the relevant amount has been reached (eg if you have deposited in multiple tranches of EUR 3000 with cards, the first 3000 EUR withdrawn will be sent on the same credit cards).</li>
                            <li>We point out that withdrawal is avoided if the amount of the withdrawal is greater than the asset and margin available on the platform. If you would like to request a larger withdrawal to the available margin and then bring the underlying account you must send us an authorization email where you assume your personal responsibility to sub capitalize your trading account by taking it to Margin Call and resulting risk of your account is cleared.</li>
                            <li>If it had a bonus, it will be offset by contractual terms proportionally to the invested/withdrawn ratio. For example, if he has deposited 5000 EUR and has received 1000 EUR bonus if he withdraws 1000 EUR (so 20% of the deposit), he will be reimbursed 20% of the bonus, equal to 200 EUR.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WithRequest