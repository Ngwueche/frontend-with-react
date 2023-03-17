import React from 'react'

export default function ContactComponent() {
  return (

    <div className="contact-container">

		<div className="contact-header">
			<h1>Contact us</h1>
		</div>
		<div className="contact-Subheader">
			<h4 >We'd love to hear from you!</h4>
		</div>
		<div className="input-container">
			<div className="text-field-container">
				<div className="styled-input ">
					<input placeholder='Your Name' type="text" required />
				</div>
			</div>
			<div className="text-field-container">
				<div className="styled-input">
					<input placeholder='Your Email' type="text" required />
				</div>
			</div>
			<div className="text-field-container">
				<div className="styled-input" >
					<input placeholder='Your Phone' type="text" required />
				</div>
			</div>
			<div className="text-field-container">
				<div className="styled-input ">
					<textarea required></textarea>
				</div>
			</div>
			<div className="contact-submit-btn">
				<button className="submit-btn">Send Message</button>
			</div>
	</div>
</div>

  )
}
