import '../styles/StylingVariables';

import Header from './Header';
import MobileHeader from './MobileHeader';

const Layout = ({ children, padding }) => {
  return (
    <div id='App'>
      <div className='mobile-menu'>
        <MobileHeader pageWrapId={'page-wrap'} outerContainerId={'App'} />
      </div>
      <div id='page-wrap'>
        <Header />
        <main>{children}</main>
      </div>
      <style jsx>{`
        main {
          padding: ${padding ? padding : '0 10px 20px 10px'};
        }
        @media only screen and (min-width: 769px) {
          .mobile-menu {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
