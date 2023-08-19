import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
const Contact = () => {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qczryhe', 'template_56hvwep', form.current, 'eiuBXrYDkzKAWjefz')
      e.target.reset()
  };



    return (
        <section className='contact section' id='contact'>
             <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Contact Info</span>
            <div className='contact__container container grid'>
                <div className="contact__content">
                    <h3 className="contact__title">Talk To Me</h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <i class="fa-solid fa-envelope-circle-check contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">user@gmail.com</span>
                            <a target='blanck' href="https://mail.google.com/mail" className="contact__button">Send Me Gmail<i class="fa-solid fa-arrow-right contact__button-icon"></i></a>

                        </div>

                        <div className="contact__card">
                            <i class="fa-regular fa-message contact__card-icon"></i>
                            <h3 className="contact__card-title">Behance</h3>
                            <span className="contact__card-data">Send Me a Message on Behance</span>
                            <a target='blanck' href="https://www.behance.net/inbox?source=nav20" className="contact__button">Send Me<i class="fa-solid fa-arrow-right contact__button-icon"></i></a>

                        </div>

                        
                        <div className="contact__card">
                            <i class="fa-solid fa-message contact__card-icon"></i>
                            <h3 className="contact__card-title">Linkedin</h3>
                            <span className="contact__card-data">Send Me a Message on Linkedin</span>
                            <a target='blanck' href="https://www.linkedin.com/messaging" className="contact__button">Send Me<i class="fa-solid fa-arrow-right contact__button-icon"></i></a>

                        </div>

                    </div>
                </div>
                <div className="contact__content">
                    <h3 className="contact__title">Write Me Your Project</h3>
                    <form ref={form} onSubmit={sendEmail} className="contact__form">

                       
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name='name' className='contact__form-input' placeholder='Insert your name'/>
                        </div>
                         <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name='email' className='contact__form-input' placeholder='Insert your email'/>
                        </div>
                         <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea name='project' cols="30" rows="10" className='contact__form-input' placeholder='Write your project'></textarea>
                        </div>
                        <button className='button button--flex'><h6 style={{color:"white", marginBottom:"0"}}>Send To Mail<i class="fa-regular fa-paper-plane" style={{marginLeft:"5px"}}></i></h6></button>

                    </form>
                      </div>
            </div>
        </section>
    );
}

export default Contact;
