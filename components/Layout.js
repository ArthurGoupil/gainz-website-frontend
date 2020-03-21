import "../styles/StylingVariables";
import GlobalClasses from "../styles/GlobalClasses";
import GlobalStyling from "../styles/GlobalStyling";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <GlobalClasses />
      <GlobalStyling />
    </>
  );
};

export default Layout;
