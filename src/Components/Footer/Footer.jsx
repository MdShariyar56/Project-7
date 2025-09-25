import React from 'react';
import Container from '../Container/Container';

const Footer = () => {
    return (
    <Container>
           <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
<div className=''>
    
</div>
  <nav>
     <h6 className="footer-title font-bold text-xl " >CS — Ticket System</h6>
     <p className='w-70'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
     </p>
  </nav>
  <nav>
    <h6 className="footer-title font-bold text-xl">Company</h6>
    <a className="link link-hover ">About Us</a>
    <a className="link link-hover">Our Mission</a>
    <a className="link link-hover">Contact Saled</a>
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
    <h6 className="footer-title font-bold text-xl">Social Links</h6>
    <a className="link link-hover">@CS — Ticket System</a>
    <a className="link link-hover">@CS — Ticket System</a>
    <a className="link link-hover">@CS — Ticket System</a>
     <a className="link link-hover">support@cst.com</a>
  </nav>
  

</footer>
<footer className="footer footer-horizontal footer-center bg-neutral text-neutral-content p-4 border-t border-gray-500">
  <aside>
    <p>© 2025 CS {new Date().getFullYear()} — Ticket System. All rights reserved.</p>
  </aside>
</footer>
    </Container>
    );
};

export default Footer;