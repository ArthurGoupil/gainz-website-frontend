import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import axios from "axios";

import Loader from "./Loader";

const ContactForm = ({ art, artType, isLoading }) => {
  const router = useRouter();
  const [formStep, setFormStep] = useState(1);
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [counter, setCounter] = useState(null);

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
      setFormLoading(true);
      const response = await axios.post(
        `${process.env.BACKEND_URL}/contact/more-infos`,
        {
          lastName,
          name,
          email,
          tel,
          message,
          artType,
          artName: art.name
        }
      );
      console.log(response.data);
      setFormLoading(false);
      setCounter(5);
      setFormStep(2);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    if (counter === 0) {
      router.push(`/${artType}`);
    }
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="form-container">
      {formStep === 1 ? (
        <form onSubmit={handleSubmit} className="d-flex flex-column">
          <div className="titles-container">
            <h1>About "{!isLoading && art.name}"</h1>
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
          <button className="submit" type="submit">
            {!formLoading ? (
              "Send"
            ) : (
              <Loader height="100%" color="white" size={8} />
            )}
          </button>
        </form>
      ) : (
        formStep === 2 && (
          <div className="scnd-step-message d-flex flex-column">
            <span>
              <b>Your message has been sent.</b>
            </span>
            <span>Thanks for your interest in Gainz work.</span>
            {!isLoading && (
              <div className="counter-text">
                Back to "{artType === "papers" ? "work on paper" : "paintings"}"
                page in ... <b>{counter} sec</b>
              </div>
            )}
          </div>
        )
      )}

      <style jsx>{`
        .form-container {
          width: 490px;
          padding: 45px;
          margin-top: 40px;
          margin-bottom: 40px;
          background-color: white;
          border-radius: ${radius};
        }
        .titles-container {
          margin-bottom: 40px;
        }

        button.submit {
          width: 100px;
        }
        .input-50 {
          width: 48%;
        }
        .counter-text {
          color: ${greyBlue};
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
