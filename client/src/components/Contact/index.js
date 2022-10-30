import React from 'react';
//${user.email}

const Contact = () => {
        return (
            <section className="container-1">

                <h3> <strong>Contact Me</strong></h3>
                <h4>Email: chou8395@gmail.com</h4>
                <a id="mail"href={`https://mail.google.com/mail/?view=cm&fs=1&to=`}>Click Here To Send Mail</a>
                <h4>Phone Number: 804-814-8676</h4>

                
                
                        <a href="https://www.facebook.com/">
                        <span className="icon fa fa-facebook" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://twitter.com/" >
                                <span className="icon fa fa-twitter"  style={{color:'antiquewhite'}}></span>
                        </a>
                        <a href="https://www.linkedin.com/">
                                <span className="icon fa fa-linkedin-square"  style={{color:'antiquewhite'}}></span>
                        </a>
                
            </section>
        )
    }


export default Contact
