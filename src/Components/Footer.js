import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Logo from '../Images/logo.png';
import Facebook from '../Images/social/facebook.png';
import '../Styles/Footer.css';
import { faTwitter, faLinkedinIn, faDribbble, faBehance, faFacebookF, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <section className="py-5 my-5 footer_area" id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer_left">
                        <div className="footer_logo mb-4">
                            <img src={Logo} alt={Logo} />
                        </div>
                        <div className="footer_social_menu">
                            <ul>
                                <li className="mr-3 footer_social px-2 py-0"><a className="text-decoration-none" href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li className="mr-3 footer_social"><a className="text-decoration-none" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li className="mr-3 footer_social"><a className="text-decoration-none" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li className="mr-3 footer_social"><a className="text-decoration-none" href="#"><FontAwesomeIcon icon={faDribbble} /></a></li>
                                <li className="mr-3 footer_social"><a className="text-decoration-none" href="#"><FontAwesomeIcon icon={faBehance} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-7">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 footer_right">
                                    <ul>
                                        <li className="mb-2"><a className="text-decoration-none" href="#">Features</a></li>
                                        <li className="mb-2"><a className="text-decoration-none" href="#">Enterprise</a></li>
                                        <li className="mb-2"><a className="text-decoration-none" href="#">Pricing</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4 footer_right">
                                    <ul>
                                        <li className="mb-2"><a className="text-decoration-none" href="#">Blog</a></li>
                                        <li className="mb-2"><a className="text-decoration-none" href="#">Help Center</a></li>
                                        <li className="mb-2"><a className="text-decoration-none" href="#">Contact Us</a></li>
                                        <li className="mb-2"><a className="text-decoration-none" href="#">Status</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4 footer_right">
                                    <ul>
                                        <li className="mb-2"><a className="text-decoration-none" href="#">About Us</a></li>
                                        <li className="mb-2"><a className="text-decoration-none" href="#">Terms of Service</a></li>
                                        <li className="mb-2"><a className="text-decoration-none" href="#">Security</a></li>
                                        <li className="mb-2"><a className="text-decoration-none" href="#">Login</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;