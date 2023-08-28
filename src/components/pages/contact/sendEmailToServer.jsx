import axios from 'axios';

async function sendEmailToServer(email, message) {
	try {
		const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
			email,
			message,
		});

		if (response.status === 201) {
			// Sukces - symulacja wysłania maila
			return response.data;
		} else {
			throw new Error('Failed to send email');
		}
	} catch (error) {
		throw new Error('Error sending email');
	}
}

export default sendEmailToServer;