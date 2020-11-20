import React from 'react';

const PricingTable = () => {
    return (
        <section className="py-5 my-5 pricing_table_area" id="pricing">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12 text-center">
                        <h2 className="section-title">Choose Your Dedicated Team</h2>
                    </div>
                </div>
                <div className="row py-1">
                    <div className="col-md-4">
                        <div className="pricing_table text-center bg-white mx-2 p-5 shadow">
                            <div className="pricing_header mb-3 pb-1">
                                <h1 className="mb-0">$199</h1>
                                <p>For Basic</p>
                            </div>
                            <div className="pricing_body mt-3">
                                <ul>
                                    <li className="mb-3">Homepage</li>
                                    <li className="mb-3">No Inner Page</li>
                                    <li className="mb-3">Asset File</li>
                                    <li className="mb-3">Source File</li>
                                    <li className="mb-3">Free Stock Photos</li>
                                    <li className="mb-3">10 Days Free Support</li>
                                    <li className="mb-3">24/7 Support</li>
                                </ul>
                            </div>
                            <div className="pricing_footer">
                                <button class="btn common-btn mt-4" type="submit">Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="pricing_table text-center bg-white mx-2 p-5 shadow">
                            <div className="pricing_header mb-3 pb-1">
                                <h1 className="mb-0">$399</h1>
                                <p>For Preferred</p>
                            </div>
                            <div className="pricing_body mt-3">
                                <ul>
                                    <li className="mb-3">Homepage</li>
                                    <li className="mb-3">4 Inner Page</li>
                                    <li className="mb-3">Asset File</li>
                                    <li className="mb-3">Source File</li>
                                    <li className="mb-3">Free Stock Photos</li>
                                    <li className="mb-3">20 Days Free Support</li>
                                    <li className="mb-3">24/7 Support</li>
                                </ul>
                            </div>
                            <div className="pricing_footer">
                                <button class="btn common-btn mt-4" type="submit">Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="pricing_table text-center bg-white mx-2 p-5 shadow">
                            <div className="pricing_header mb-3 pb-1">
                                <h1 className="mb-0">$599</h1>
                                <p>For Elite</p>
                            </div>
                            <div className="pricing_body mt-3">
                                <ul>
                                    <li className="mb-3">Homepage</li>
                                    <li className="mb-3">8 Inner Page</li>
                                    <li className="mb-3">Asset File</li>
                                    <li className="mb-3">Source File</li>
                                    <li className="mb-3">Free Stock Photos</li>
                                    <li className="mb-3">30 Days Free Support</li>
                                    <li className="mb-3">24/7 Support</li>
                                </ul>
                            </div>
                            <div className="pricing_footer">
                                <button class="btn common-btn mt-4" type="submit">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingTable;