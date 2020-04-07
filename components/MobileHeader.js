import { useState } from 'react';

import { push as Menu } from 'react-burger-menu';

import ActiveLink from './Utils/ActiveLink';

const MobileHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <Menu
      {...props}
      isOpen={isOpen}
      onStateChange={(state) => setIsOpen(state.isOpen)}
      disableAutoFocus
      styles={styles}
    >
      <div className='d-flex flex-column'>
        <div className='link' onClick={() => setIsOpen(false)}>
          <ActiveLink activeClassName='active-link' href='/'>
            <span>home</span>
          </ActiveLink>
        </div>
        <div className='link' onClick={() => setIsOpen(false)}>
          <ActiveLink activeClassName='active-link' href='/paintings'>
            <span>paintings</span>
          </ActiveLink>
        </div>
        <div className='link' onClick={() => setIsOpen(false)}>
          <ActiveLink activeClassName='active-link' href='/papers'>
            <span>work on paper</span>
          </ActiveLink>
        </div>
        <div className='link' onClick={() => setIsOpen(false)}>
          <ActiveLink activeClassName='active-link' href='/about'>
            <span>about</span>
          </ActiveLink>
        </div>
      </div>
      <style jsx>{`
        .active-link {
          font-weight: bold;
        }
        .link {
          margin-bottom: 10px;
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
