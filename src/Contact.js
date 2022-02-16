import React from "react";
import sax from "./saxophone.png";
import catInCase from "./cat-case.png";

function ContactUs() {
    const clearInput = () => {
        window.onbeforeunload = () => {
            for(const form of document.getElementsByTagName('form')) {
            form.reset();
            }
        }
    }
	return(
		<div>
            <div>
			<img src={ sax } className="sax" alt="Saxophone" width="50px"/>
            <img src={ catInCase } className="catInCase" alt="cat in case" width="270px"/>
			</div>
			<div className="container">
				<h4 className="contTitle">Would you like to reserve a table? Send us your contact information!</h4>
				</div>
			<div>
            <div className="container">
                <form action="https://formspree.io/f/xqkwlpdq" method="POST">
                    <input type="hidden" name="_language" value="en" />

                    <div className="signal contact">
                        <label> Your email:
                        <input type="email" className="text-input" name="_replyto" placeholder="Your email..." required=""/>
                        </label>
                    </div>

                    <div className="signal contact">
                        <label> Your message:
                        <textarea className="text-input" name="message" placeholder="Type your message..." required=""></textarea>
                        </label>
                    </div>
                    
                    <div  className="signal">
                        <button className="btn" type="submit"  onClick={() => clearInput()}>Send</button>
                        
                    </div>
                    
                </form>
            </div>
		</div>
</div>
	)
}

export default ContactUs;