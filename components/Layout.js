import '../styles/StylingVariables';

import Header from './Header';

const Layout = ({ children, padding }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <style jsx>{`
        main {
          padding: ${padding ? padding : '0 10px 20px 10px'};
        }
      `}</style>
    </>
  );
};

export default Layout;
