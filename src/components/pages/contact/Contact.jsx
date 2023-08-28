import React, { useState } from 'react'
import './contact.css'
import sendEmailToServer from './sendEmailToServer' // Załóżmy, że to jest poprawna implementacja wysyłania maila

export default function Contact() {
	const [message, setMessage] = useState('')
	const [isSending, setIsSending] = useState(false)
	const [isSent, setIsSent] = useState(false)

	const handleMessageChange = e => {
		setMessage(e.target.value)
	}

	const handleSubmit = async e => {
		e.preventDefault()

		setIsSending(true)

		try {
			await sendEmailToServer('kizia@gmail.com', message)

			setIsSending(false)
			setIsSent(true)
			setMessage('')
		} catch (error) {
			console.error('Error sending email:', error)
			setIsSending(false)
		}
	}

	return (
		<div className='contact'>
			<h2>Contact Us</h2>
			<form onSubmit={handleSubmit} className='contactForm'>
				<label>Email:</label>
				<input type='email' value='kizia@gmail.com' disabled />
				<label>Message:</label>
				<textarea value={message} onChange={handleMessageChange} required></textarea>
				<button type='submit' disabled={isSending}>
					{isSending ? 'Sending...' : 'Send'}
				</button>
				{isSent && <p>Email sent successfully!</p>}
			</form>
		</div>
	)
}
