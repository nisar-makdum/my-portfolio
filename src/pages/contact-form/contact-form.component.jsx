import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_tk4yrcl', e.target, 'user_1eRvfBQELXxsFJqJJIRzu')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
            e.target.reset()
      }
    return (
        <div id="contact">
        <h1 style={{color:"#F0FFF0"}} className=" text-center font-details-b">CONTACT ME</h1>
        <div className="container mb-3">
        <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto mb-3">
                        <input type="submit" className="btn btn-info" value="Send Message"></input>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
};

export default ContactForm;