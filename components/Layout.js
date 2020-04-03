import '../styles/StylingVariables';

import Header from './Header';

const Layout = ({ children, padding }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <style jsx>{`
        main {
          padding: ${padding ? padding : '0 20px 20px 20px'};
        }
      `}</style>
    </>
  );
};

export default Layout;
