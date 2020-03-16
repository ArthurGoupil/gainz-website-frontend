import Link from "next/link";

const Header = props => {
  return (
    <header className="d-flex space-between align-center">
      <img className="logo" src="/logo/logo-gainz.png" alt="logo-gainz" />
      <nav className="d-flex">
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/paints">
          <a>ART</a>
        </Link>
        <a>CONTACT</a>
      </nav>
      <style jsx>
        {`
          header {
            width: 100%;
            height: 100px;
            letter-spacing: 2px;
            font-weight: bold;
            padding: 20px 40px;
            position: fixed;
            top: 0;
          }
          nav a:not(:last-child) {
            margin-right: 60px;
          }
          .logo {
            width: 180px;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
