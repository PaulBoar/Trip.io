import React, { useState } from 'react';
import classes from './ContactForm.module.css';

function ContactForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [body, setBody] = useState('');

	const onSendMessage = (e) => {
		e.preventDefault();
  const msg = {name: name, email: email, subj: subject, body: body}
		fetch(
			'https://trip-io-6f20d-default-rtdb.europe-west1.firebasedatabase.app/messages.json',
			{
				method: 'POST',
				body: JSON.stringify(msg),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		setName('');
		setEmail('');
		setSubject('');
		setBody('');
	};

	return (
		<div className={classes['form-container']}>
			<h3>Send Us a Message 😎</h3>
			<form onSubmit={onSendMessage}>
				<input
					placeholder='Name'
					id='name'
					name='name'
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					placeholder='Email'
					id='email'
					name='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					placeholder='Subject'
					id='subject'
					name='subject'
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
				/>
				<textarea
					placeholder='Message'
					id='body'
					name='body'
					required
					rows={4}
					value={body}
					onChange={(e) => setBody(e.target.value)}></textarea>
				<button>Send Message</button>
			</form>
		</div>
	);
}

export default ContactForm;
