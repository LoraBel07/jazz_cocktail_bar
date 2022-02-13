import React from "react";

function ContactUs() {
	return(
		<div>
			<div class="container">
				<h4 class="contText">Would you like to reserve a table? Send us your contact information!</h4>
				</div>
			<div>
			<form action="https://formspree.io/f/xqkwlpdq" method="POST">
    {/* <!--For right language--> */}
    <input type="hidden" name="_language" value="en" />

    <div class="sweet">
        <label>
            Your email:
            <input type="email" class="text-input" name="_replyto" placeholder="Your email..." required=""/>
        </label>
    </div>

    <div class="sweet">
        <label>
            Your message:
            <textarea class="text-input" name="message" placeholder="Type your message..." required=""></textarea>
        </label>
    </div>
    <br>

    {/* <!-- your other form fields go here --> */}

    <div  class="sweet">
        <button class="btn" type="submit">Send</button>
    </div>
    <br>

    </form>
			</div>



		</div>
	)
}

export default ContactUs;