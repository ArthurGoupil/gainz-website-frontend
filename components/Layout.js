import React, { useState } from 'react';
import LangContext from '../contexts/LangContext';

import '../styles/StylingVariables';

import Header from './Header';
import MobileHeader from './MobileHeader';

const Layout = ({ children, padding }) => {
  const [lang, setLang] = useState('fr');

  return (
    <LangContext.Provider value={lang}>
      <div id='App'>
        <div className='mobile-menu'>
          <MobileHeader
            pageWrapId={'page-wrap'}
            outerContainerId={'App'}
            lang={lang}
            setLang={setLang}
          />
        </div>
        <div id='page-wrap'>
          <Header lang={lang} setLang={setLang} />
          <main>{children}</main>
        </div>
        <style jsx>{`
          main {
            padding-bottom: 20px;
          }
          @media only screen and (min-width: 769px) {
            .mobile-menu {
              display: none;
            }
          }
          @media only screen and (max-width: 769px) {
            main {
              padding-bottom: 0;
            }
          }
        `}</style>
      </div>
    </LangContext.Provider>
  );
};

export default Layout;
