import React, { useState, useEffect, useContext } from 'react';
import LangContext from '../contexts/LangContext';
import data from '../languages/data.json';
import Link from 'next/link';
import { useRouter } from 'next/router';

import axios from 'axios';

import Loader from './Utils/Loader';

const ContactForm = ({ art, artType, isLoading }) => {
  const lang = useContext(LangContext);
  const router = useRouter();
  const [formStep, setFormStep] = useState(1);
  const [formLoading, setFormLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [lastName, setLastName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [message, setMessage] = useState('');
  const [counter, setCounter] = useState(null);

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleTelChange = (event) => {
    setTel(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && message) {
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
            artName: art.name,
          }
        );
        setFormLoading(false);
        setCounter(5);
        setFormStep(2);
      } catch (e) {
        console.error(e.message);
      }
    } else if (!email && !message) {
      setErrorMessage(data[lang].moreInfos.emailMessageError);
    } else if (!message) {
      setErrorMessage(data[lang].moreInfos.messageError);
    } else if (!email) {
      setErrorMessage(data[lang].moreInfos.emailError);
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
    <div className='form-container'>
      {formStep === 1
        ? !isLoading && (
            <form onSubmit={handleSubmit} className='d-flex flex-column'>
              <div className='titles-container d-flex space-between align-center'>
                <div className='titles'>
                  <h1>
                    {data[lang].moreInfos.about} "{art.name}"
                  </h1>
                  <h2>{data[lang].moreInfos.subtitle}</h2>
                </div>
                <img
                  className='art-preview'
                  src={art.smallImage}
                  alt={art.name}
                />
              </div>
              <div className='names d-flex space-between'>
                <div className='input-50 d-flex flex-column'>
                  <label htmlFor='last-name'>
                    {data[lang].moreInfos.lastName}
                  </label>
                  <input
                    type='text'
                    placeholder='Dupont'
                    name='last-name'
                    autoComplete='family-name'
                    value={lastName}
                    onChange={handleLastNameChange}
                  />
                </div>
                <div className='input-50 d-flex flex-column'>
                  <label htmlFor='name'>{data[lang].moreInfos.name}</label>
                  <input
                    type='text'
                    placeholder='Martin'
                    name='name'
                    autoComplete='given-name'
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
              </div>
              <div className='contact d-flex space-between'>
                <div className='input-50 d-flex flex-column'>
                  <label htmlFor='email'>{data[lang].moreInfos.email}</label>
                  <input
                    type='email'
                    placeholder='martindupont@mail.com'
                    name='email'
                    autoComplete='email'
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className='input-50 d-flex flex-column'>
                  <label htmlFor='tel'>{data[lang].moreInfos.phone}</label>
                  <input
                    type='tel'
                    placeholder='06 12 34 56 78'
                    name='tel'
                    autoComplete='tel'
                    value={tel}
                    onChange={handleTelChange}
                  />
                </div>
              </div>
              <label htmlFor='message'>{data[lang].moreInfos.message}</label>
              <textarea
                placeholder={data[lang].moreInfos.messagePlaceholder}
                name='message'
                value={message}
                onChange={handleMessageChange}
              />
              <div className='error-message'>{errorMessage}</div>
              <button
                className='submit d-flex justify-center align-center'
                type='submit'
              >
                {!formLoading ? (
                  data[lang].moreInfos.send
                ) : (
                  <Loader width='30px' height='30px' />
                )}
              </button>
            </form>
          )
        : formStep === 2 && (
            <div className='scnd-step-message d-flex flex-column'>
              <span>
                <b>{data[lang].moreInfos.sent}</b>
              </span>
              <span>{data[lang].moreInfos.interest}</span>
              <div className='counter-text'>
                {lang === 'fr' ? (
                  `${data[lang].moreInfos.back} ${data[lang].moreInfos.page} "${
                    artType === 'papers'
                      ? data[lang].moreInfos.papers
                      : data[lang].moreInfos.paintings
                  }" ${data[lang].moreInfos.in} ... `
                ) : (
                  <>
                    Back to "
                    {artType === 'papers' ? 'work on paper' : 'paintings'}" page
                    in ...&nbsp;
                  </>
                )}
                <b>{counter} sec</b>
              </div>
            </div>
          )}
      <style jsx>{`
        .form-container {
          width: 490px;
          padding: 45px;
          margin: 20px 0;
          background-color: white;
          border-radius: ${radius};
          box-shadow: 3px 3px 10px 4px rgba(42, 42, 42, 0.2);
        }
        .art-preview {
          max-width: 160px;
          max-height: 80px;
          margin-left: 10px;
          border-radius: 3px;
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
        .error-message {
          color: red;
          margin-bottom: 10px;
        }
        .counter-text {
          color: ${greyBlue};
          margin-top: 20px;
        }
        @media only screen and (max-width: 600px) {
          .form-container {
            width: calc(100% - 40px);
            padding: 25px;
          }
          .titles-container {
            flex-direction: column;
            text-align: center;
          }
          .titles {
            margin-bottom: 20px;
          }
          .names,
          .contact {
            flex-direction: column;
          }
          .input-50 {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
