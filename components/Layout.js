import "../styles/StylingVariables";
import GlobalClasses from "../styles/GlobalClasses";
import GlobalStyling from "../styles/GlobalStyling";

import Header from "./Header";

const Layout = ({ children, backButtonLink }) => {
  return (
    <>
      <Header backButtonLink={backButtonLink} />
      <main>{children}</main>
      <GlobalClasses />
      <GlobalStyling />
    </>
  );
};

export default Layout;
