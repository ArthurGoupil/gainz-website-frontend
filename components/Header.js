import Link from "next/link";

const Header = props => {
  return (
    <>
      <header className="d-flex flex-column align-center">
        <Link href="/" passHref>
          <a className="d-flex justify-center align-center">
            <div className="logo-container d-flex justify-center align-center">
              <img
                className="logo"
                src="/logo/logo-gainz.png"
                alt="logo-gainz"
              />
              <div className="gainz-text d-flex justify-center">GAINZ</div>
            </div>
          </a>
        </Link>
      </header>
      <nav className="d-flex justify-center align-center">
        <Link href="/">
          <a>
            <b>home</b>
          </a>
        </Link>
        <Link href="/paintings">
          <a>paintings</a>
        </Link>
        <Link href="/">
          <a>work on paper</a>
        </Link>
        <a>about</a>
      </nav>
      <style jsx>
        {`
          header {
            width: 100%;
            letter-spacing: 2px;
            z-index: 1;
            padding-top: 20px;
          }
          nav {
            height: 60px;
            background-color: rgba(255, 255, 255, 1);
            position: sticky;
            top: 0;
            z-index: 2;
          }
          nav a:not(:last-child) {
            margin-right: 60px;
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
          }
        `}
      </style>
    </>
  );
};

export default Header;
