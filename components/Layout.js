import "../styles/StylingVariables";
import GlobalClasses from "../styles/GlobalClasses";
import GlobalStyling from "../styles/GlobalStyling";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <GlobalClasses />
      <GlobalStyling />
    </div>
  );
};

export default Layout;
