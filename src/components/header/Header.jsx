import React, { useState } from 'react';
import "./Header.css"
const Header = () => {
     window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header")
     })
    
    
    const [Toggle, ShowMenu] = useState(false)
    const [activeNav, setActiveNav] = useState("#home")

    return (

        <header className='header'>
            <nav className='nav container'>
                <a href="index.html" className="nav__logo">Amal Ismail</a>
                <div className={Toggle? "nav__menu show-menu":"nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i class="fa-solid fa-house nav__icon uil"></i>
                                 Home
                           </a>

                        </li>

                         <li className="nav__item">
                            <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i class="fa-regular fa-user nav__icon uil"></i>
                                About
                            </a>

                        </li>
                                   <li className="nav__item">
                            <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i class="fa-regular fa-file-lines nav__icon uil"></i>
                                Skills
                            </a>

                        </li>
                           <li className="nav__item">
                            <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                                <i class="fa-solid fa-briefcase nav__icon uil"></i>
                                Services
                            </a>

                        </li>   
                            <li className="nav__item">
                            <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <i class="fa-regular fa-folder-closed nav__icon uil"></i>
                                Portfolio
                            </a>

                        </li>  
                         
                            <li className="nav__item">
                            <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i class="fa-solid fa-envelope nav__icon uil"></i>
                                Contact
                            </a>

                        </li>  
                    </ul>
                    <i class="fa-regular fa-circle-xmark uil nav__close" onClick={()=>ShowMenu(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={()=>ShowMenu(!Toggle)}>
                    <i class="fa-solid fa-bars"></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;
