import React, { useState } from 'react';
import data from '../languages/data.json';

import { push as Menu } from 'react-burger-menu';
import { MdAdjust, MdRadioButtonUnchecked } from 'react-icons/md';

import ActiveLink from './Utils/ActiveLink';

const MobileHeader = ({ pageWrapId, outerContainerId, lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu
      pageWrapId={pageWrapId}
      outerContainerId={outerContainerId}
      isOpen={isOpen}
      onStateChange={(state) => setIsOpen(state.isOpen)}
      disableAutoFocus
      styles={styles}
    >
      <div id='menu' className='d-flex flex-column'>
        <div className='link' onClick={() => setIsOpen(false)}>
          <ActiveLink activeClassName='active-link' href='/'>
            <span>{data[lang].nav.home}</span>
          </ActiveLink>
        </div>
        <div className='link' onClick={() => setIsOpen(false)}>
          <ActiveLink activeClassName='active-link' href='/paintings'>
            <span>{data[lang].nav.paintings}</span>
          </ActiveLink>
        </div>
        <div className='link' onClick={() => setIsOpen(false)}>
          <ActiveLink activeClassName='active-link' href='/papers'>
            <span>{data[lang].nav.papers}</span>
          </ActiveLink>
        </div>
        <div className='link' onClick={() => setIsOpen(false)}>
          <ActiveLink activeClassName='active-link' href='/about'>
            <span>{data[lang].nav.about}</span>
          </ActiveLink>
        </div>
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
      <style jsx>{`
        #menu {
          outline: none;
        }
        .active-link {
          font-weight: bold;
        }
        .link {
          margin-bottom: 20px;
          font-size: 2rem;
        }
        .language-container {
          margin-top: 20px;
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
      `}</style>
    </Menu>
  );
};

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '20px',
    height: '20px',
    left: '20px',
    top: '30px',
  },
  bmBurgerBars: {
    background: '#302E2E',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '30px',
    width: '30px',
  },
  bmCross: {
    background: '#302E2E',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: 'white',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'flex',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

export default MobileHeader;
