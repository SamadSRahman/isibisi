import ArrowRight3Img from "../../../assets/images/icon/arrow-right3.svg";
import { useForm } from "react-hook-form";
import Field from "../../common/Field";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function MessageForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
  
	const formData = { 
	  name: name, 
	  email: email, 
	  phone: phone, 
	  message: message
	};
  
	const submitForm = async (e) => {
	  e.preventDefault();
  
	  try {
		const response = await fetch('https://googlesheetbackend.vercel.app/submit-form', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(formData),
		});
	
		if (response.ok) {
		      console.log('Data successfully submitted');
			  navigate('/single-portfolio'); // Navigate to the desired page

		} else {
		  console.error('Failed to submit data');
		}
	  } catch (error) {
		console.error('Error:', error);
	  }
	};

	return (
		<form  onSubmit={submitForm}  >
			<div className="aximo-form-field">
				<Field error={errors.name}>
					<input
						{...register("name", { required: "Name is required." })}
						type="text"
						name="name"
						id="name"
						placeholder="Your Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</Field>
			</div>
			<div className="aximo-form-field">
				<Field error={errors.email}>
					<input
						{...register("email", { required: "Email is required." })}
						type="email"
						name="email"
						id="email"
						placeholder="Your email address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Field>
			</div>

			<div className="aximo-form-field">
				<input type="text" placeholder="Your phone number" 
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
				/>
			</div>


			<div className="aximo-form-field">
				<textarea name="textarea" placeholder="Write your message here..."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				></textarea>
			</div>
			<button id="aximo-submit-btn" type="submit">
				Send message{" "}
				<span>
					<img src={ArrowRight3Img} alt="ArrowRight3Img" />
				</span>
			</button>
		</form>
	);
}

export default MessageForm;
