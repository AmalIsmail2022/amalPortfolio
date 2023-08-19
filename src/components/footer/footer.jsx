import React from 'react';
import './footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">
                    Amal Ismail
                </h1>
               
                <div className="footer__social">
                     <a href='https://github.com/AmalIsmail2022' className='footer__social-link git' target='_blank'>
<i class="fa-brands fa-github uil"></i>
            </a>

             <a href='https://www.behance.net/amalismail3' className='footer__social-link be' target='_blank'>
                <i class="fa-brands fa-behance uil"></i>
            </a>

             <a href='https://www.linkedin.com/in/amal-ismail-msc-09310729/' className='footer__social-link in' target='_blank'>
                <i class="fa-brands fa-linkedin-in uil"></i>
            </a>
                </div>
                <span className='footer__copy'>&#169; 2023 All Rights Reserved</span>
            </div>
       </footer>
    );
}

export default Footer;
