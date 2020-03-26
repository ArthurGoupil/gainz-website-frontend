import { useState, useEffect, useCallback } from "react";

import axios from "axios";

const ContactForm = ({ id }) => {
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [formLoading, setFormLoading] = useState("false");

  const handleLastNameChange = event => {
    setLastName(event.target.value);
  };
  const handleNameChange = event => {
    setName(event.target.value);
  };
  const handleEmailChange = event => {
    setEmail(event.target.value);
  };
  const handleTelChange = event => {
    setTel(event.target.value);
  };
  const handleMessageChange = event => {
    setMessage(event.target.value);
  };
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setFormLoading("true");
      const response = await axios.post(
        `${process.env.BACKEND_URL}/contact/more-infos`,
        {
          lastName,
          name,
          email,
          tel,
          message
        }
      );
      console.log(response.data);
      setFormLoading("false");
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <div className="titles-container">
          <h1>Get more information</h1>
          <h2>Please tell us a bit more about what you need.</h2>
        </div>
        <div className="d-flex space-between">
          <div className="input-50 d-flex flex-column">
            <label htmlFor="last-name">Last name (optionnal)</label>
            <input
              type="text"
              placeholder="Dupont"
              name="last-name"
              autoComplete="family-name"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div className="input-50 d-flex flex-column">
            <label htmlFor="name">Name (optionnal)</label>
            <input
              type="text"
              placeholder="Martin"
              name="name"
              autoComplete="given-name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
        </div>
        <div className="d-flex space-between">
          <div className="input-50 d-flex flex-column">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="martindupont@mail.com"
              name="email"
              autoComplete="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="input-50 d-flex flex-column">
            <label htmlFor="tel">Phone number (optionnal)</label>
            <input
              type="tel"
              placeholder="06 12 34 56 78"
              name="tel"
              autoComplete="tel"
              value={tel}
              onChange={handleTelChange}
            />
          </div>
        </div>
        <label htmlFor="message">Your message</label>

        <textarea
          placeholder="message"
          name="message"
          value={message}
          onChange={handleMessageChange}
        />
        <input className="submit" type="submit" value="Send" />
      </form>
      <style jsx>{`
        .form-container {
          margin-top: 40px;
          margin-bottom: 40px;
        }
        .titles-container {
          margin-bottom: 40px;
        }
        form {
          width: 490px;
          border-radius: ${radius};
          background-color: white;
          padding: 45px;
        }
        .input-50 {
          width: 48%;
        }
        .submit {
          width: 100px;
          margin-top: 10px;
          background-color: ${middleBlue};
          color: white;
          font-weight: bold;
          border-radius: ${miniRadius};
          border: none;
        }
        .submit:hover {
          background-color: ${middleBlue};
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
