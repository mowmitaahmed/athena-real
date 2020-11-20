import React from 'react';

const Contact = () => {
    return (
        <section className="py-5 my-5 contact_area" id="contact">
            <div className="container">
                <div className="row text-center mb-4">
                    <div className="col-md-12 contact">
                        <h2 className="section-title">Get your design right, right now</h2>
                        <p>Be the first know out latest offers and updates</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <form className="shadow contact_form py-2 pl-0 pr-2 mx-auto">
                            <div class="row no-gutters align-items-center">
                                <div class="col-md-8">
                                    <input class="form-control form-control-lg form-control-borderless" type="email" placeholder="Enter your Email address" />
                                </div>
                                <div class="col-md-4">
                                    <button class="btn btn-lg float-right" type="submit">Get Started</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </section>
    );
};

export default Contact;