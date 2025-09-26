import React from 'react';
import Container from '../Container/Container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // ✅ ঠিক import

const Footer = () => {
    return (
        <Container>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <div></div>

                <nav>
                    <h6 className="footer-title font-bold text-xl">CS — Ticket System</h6>
                    <p className='w-70'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </nav>

                <nav>
                    <h6 className="footer-title font-bold text-xl">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Sales</a>
                </nav>

                <nav>
                    <h6 className="footer-title font-bold text-xl">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>

                <nav>
                    <h6 className="footer-title font-bold text-xl">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>

                      <nav>
  <h6 className="footer-title font-bold text-xl mb-2">Social Links</h6>

  <a className="link link-hover flex items-center gap-2">
    <FontAwesomeIcon icon={faXTwitter} className="text-black bg-amber-50 border rounded-full p-2" /> 
    @CS — Ticket System
  </a>

  <a className="link link-hover flex items-center gap-2">
    <FontAwesomeIcon icon={faLinkedinIn} className="text-black bg-amber-50 border rounded-full p-2" /> 
    @CS — Ticket System
  </a>

  <a className="link link-hover flex items-center gap-2">
    <FontAwesomeIcon icon={faFacebookF} className="text-black bg-amber-50 border rounded-full p-2" /> 
    @CS — Ticket System
  </a>

  <a className="link link-hover flex items-center gap-2">
    <FontAwesomeIcon icon={faEnvelope} className="text-black bg-amber-50 border rounded-full p-2" /> 
    support@cst.com
  </a>
</nav>

            </footer>

            <footer className="footer footer-horizontal footer-center bg-neutral text-neutral-content p-4 border-t border-gray-500">
                <aside>
                    <p>© {new Date().getFullYear()} CS — Ticket System. All rights reserved.</p>
                </aside>
            </footer>
        </Container>
    );
};

export default Footer;
