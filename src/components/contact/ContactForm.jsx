import { useForm } from "react-hook-form";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ContactThumb from "../../assets/images/contact/contact-thumb.png";
import Star2Img from "../../assets/images/v1/star2.png";
import Field from "../common/Field";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function ContactForm() {
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
        alert("Thank you for your interest! We'll be in touch with you soon")
        navigate('/'); 

      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="section aximo-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="aximo-section-title">
              <h2>
                <span className="aximo-title-animation">
                Leave your contact details so that we can connect for 
                  <span className="aximo-title-icon">
                    <img src={Star2Img} alt="Star" />
                  </span>
                </span>
                detailed discussion
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 order-lg-2">
            <div className="aximo-contact-thumb ">
              <LazyLoadImage
                src={ContactThumb}
                width={397}
                height={635}
                alt="Contact Thumb"
                effect="blur"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="aximo-main-form">
              <form onSubmit={submitForm} >
                <div className="aximo-main-field">
                  <Field label="Your Name" error={errors.name}>
                    <input
                      {...register("name", { required: "Name is required." })}
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Field>
                </div>
                <div className="aximo-main-field">
                  <Field label="Enter email address" error={errors.email}>
                    <input
                      {...register("email", { required: "Email is required." })}
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Field>
                </div>
                <div className="aximo-main-field">
                  <Field label="Enter Phone Number" error={errors.phone}>
                    <input
                      {...register("phone", { required: "Phone is required." })}
                      type="tel"
                      name="phone"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Field>
                </div>
                <div className="aximo-main-field">
                  <label>Write your message here...</label>
                  <textarea
                    name="textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button id="aximo-main-btn" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
