import React, { useState } from 'react';
import data from '../languages/data.json';

import { MdAdjust, MdRadioButtonUnchecked } from 'react-icons/md';

import ActiveLink from './Utils/ActiveLink';

const Header = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMobileMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className='d-flex flex-column align-center justify-center'>
        <ActiveLink href='/'>
          <div className='logo-container d-flex justify-center align-center'>
            <img className='logo' src='/logo/logo-gainz.png' alt='Gainz Art' />
            <h1 className='d-flex justify-center'>GAINZ</h1>
          </div>
        </ActiveLink>
      </header>
      <nav className='d-flex justify-center align-center'>
        <div className='nav-elements d-flex space-between'>
          <ActiveLink activeClassName='active-link' href='/'>
            <h2>{data[lang].nav.home}</h2>
          </ActiveLink>
          <ActiveLink activeClassName='active-link' href='/paintings'>
            <h2>{data[lang].nav.paintings}</h2>
          </ActiveLink>
          <ActiveLink activeClassName='active-link' href='/papers'>
            <h2>{data[lang].nav.papers}</h2>
          </ActiveLink>
          <ActiveLink activeClassName='active-link' href='/about'>
            <h2>{data[lang].nav.about}</h2>
          </ActiveLink>
          <div className='language-container d-flex'>
            <div className='language'>
              <b>{data[lang].nav.language}&nbsp;&nbsp;</b>|
            </div>
            <div
              className='language-element fr d-flex align-center'
              onClick={() => setLang('fr')}
            >
              <div className='icons d-flex align-center'>
                {lang === 'fr' ? <MdAdjust /> : <MdRadioButtonUnchecked />}
              </div>
              <span>fr</span>
            </div>
            <div
              className='language-element en d-flex align-center'
              onClick={() => setLang('en')}
            >
              <div className='icons d-flex align-center'>
                {lang === 'en' ? <MdAdjust /> : <MdRadioButtonUnchecked />}
              </div>
              <span className='en-text'>en</span>
            </div>
          </div>
        </div>
      </nav>
      <style jsx>
        {`
          header {
            width: 100%;
            letter-spacing: 2px;
            z-index: 1;
            height: 80px;
            padding-top: 20px;
            background-color: white;
          }
          nav {
            height: 60px;
            background-color: rgba(255, 255, 255, 1);
            position: sticky;
            top: 0;
            z-index: 2;
            background-color: white;
          }
          .nav-elements {
            width: 400px;
          }
          .active-link {
            font-weight: bold;
          }
          .logo-container {
            position: relative;
            width: 180px;
            height: 55px;
          }
          .logo {
            width: 65%;
            opacity: 0;
            position: absolute;
            transition: 0.4s;
            filter: blur(2px);
          }
          h1 {
            width: 100%;
            line-height: 5.5rem;
            font-size: 2.3rem;
            transition: 0.4s;
            font-weight: normal;
            margin-bottom: 0;
          }
          h2 {
            font-size: 1.4rem;
            line-height: 1.9rem;
          }
          .logo-container:hover h1 {
            opacity: 0;
            transition: 0.4s;
          }
          .logo-container:hover .logo {
            opacity: 1;
            transition: 0.4s;
            filter: blur(0px);
          }
          .language-container {
            position: absolute;
            right: 20px;
          }
          .language {
            margin-right: 10px;
          }
          .language-element {
            margin-right: 15px;
            color: ${greyBlue};
            cursor: pointer;
          }
          .language-element:hover {
            color: ${middleBlue};
          }
          .icons {
            margin-right: 3px;
            font-size: 1.2rem;
          }
          .en {
            font-weight: ${lang === 'en' && 'bold'};
          }
          .fr {
            font-weight: ${lang === 'fr' && 'bold'};
          }
          .en-text {
            margin-bottom: 1px;
          }
          @media only screen and (max-width: 769px) {
            nav {
              display: none;
            }
            header {
              padding-bottom: 20px;
              position: sticky;
              top: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default Header;
