import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ActiveLink from "./ActiveLink";

const Header = ({ backButtonLink }) => {
  return (
    <>
      <header className="d-flex flex-column align-center justify-center">
        <ActiveLink href="/">
          <div className="logo-container d-flex justify-center align-center">
            <img className="logo" src="/logo/logo-gainz.png" alt="logo-gainz" />
            <div className="gainz-text d-flex justify-center">GAINZ</div>
          </div>
        </ActiveLink>
      </header>
      <nav className="d-flex justify-center align-center">
        {backButtonLink && (
          <Link href={`${backButtonLink}`}>
            <a className="d-flex justify-center align-center">
              <div className="back-icon">
                <FontAwesomeIcon icon="arrow-left" />
              </div>
            </a>
          </Link>
        )}
        <div className="nav-elements d-flex space-between">
          <ActiveLink activeClassName="active-link" href="/">
            <span>home</span>
          </ActiveLink>
          <ActiveLink activeClassName="active-link" href="/paintings">
            <span>paintings</span>
          </ActiveLink>
          <ActiveLink activeClassName="active-link" href="/papers">
            <span>work on paper</span>
          </ActiveLink>
          <ActiveLink activeClassName="active-link" href="/about">
            <span>about</span>
          </ActiveLink>
        </div>
      </nav>
      <style jsx>
        {`
          header {
            width: 100%;
            letter-spacing: 2px;
            z-index: 1;
            height: 80px;
            padding-top: 20px;
          }
          nav {
            height: 60px;
            background-color: rgba(255, 255, 255, 1);
            position: sticky;
            top: 0;
            position: relative;
            z-index: 2;
          }
          .nav-elements {
            width: 400px;
          }
          .active-link {
            font-weight: bold;
          }
          .back-icon {
            position: absolute;
            left: 30px;
            font-size: 2rem;
          }
          .logo-container {
            position: relative;
            width: 180px;
            height: 55px;
          }
          .logo {
            width: 65%;
            height: 65%;
            opacity: 0;
            position: absolute;
            transition: 0.4s;
            filter: blur(2px);
          }
          .gainz-text {
            width: 100%;
            line-height: 5.5rem;
            font-size: 2.3rem;
            transition: 0.4s;
          }
          .logo-container:hover .gainz-text {
            opacity: 0;
            transition: 0.4s;
          }
          .logo-container:hover .logo {
            opacity: 1;
            transition: 0.4s;
            filter: blur(0px);
          }
        `}
      </style>
    </>
  );
};

export default Header;
