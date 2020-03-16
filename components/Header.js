import Link from "next/link";

const Header = props => {
  return (
    <header className="d-flex flex-column align-center">
      <Link href="/" passHref>
        <a>
          <div className="logo-container d-flex justify-center align-center">
            <img className="logo" src="/logo/logo-gainz.png" alt="logo-gainz" />
            <div className="gainz-text d-flex justify-center">GAINZ</div>
          </div>
        </a>
      </Link>
      <nav className="d-flex">
        <Link href="/">
          <a>
            <b>home</b>
          </a>
        </Link>
        <Link href="/paints">
          <a>art</a>
        </Link>
        <a>about</a>
      </nav>
      <style jsx>
        {`
          header {
            width: 100%;

            letter-spacing: 2px;
            padding: 20px 40px;
            position: fixed;
            top: 0;
          }
          nav a:not(:last-child) {
            margin-right: 60px;
          }
          .logo-container {
            position: relative;
            width: 180px;
            height: 55px;
            margin-bottom: 20px;
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
    </header>
  );
};

export default Header;
