import "../styles/StylingVariables";

import Header from "./Header";

const Layout = ({ children, backButtonLink }) => {
  return (
    <>
      <Header backButtonLink={backButtonLink} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
