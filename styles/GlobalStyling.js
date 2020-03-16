const GlobalStyling = () => {
  return (
    <style jsx global>
      {`
        // MAIN
        * {
          box-sizing: border-box;
        }
        @import url("https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap");
        html {
          font-size: 62.5%;
          font-family: "Quicksand", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          background-color: ${lightGrey};
        }

        body,
        input,
        button {
          font-size: 1.6rem;
          line-height: 1.9rem;
          color: ${darkBlue};
        }

        // TITLES
        h1 {
          color: ${darkBlue};
          display: block;
          font-size: 2.4rem;
          line-height: 2.8rem;
          font-weight: bold;
          margin-bottom: 10px;
        }
        h2 {
          color: ${darkBlue};
          display: block;
          font-size: 2rem;
          line-height: 2.4rem;
        }
        h3 {
          color: ${darkBlue};
          display: block;
          font-size: 1.6rem;
          line-height: 1.8rem;
          font-weight: bold;
        }
        h4 {
          color: ${darkBlue};
          display: block;
          font-size: 1.4rem;
          line-height: 1.7rem;
          font-weight: bold;
        }

        // LINKS
        a {
          text-decoration: none;
        }
        a:link {
          color: inherit;
        }
        a:visited {
          color: inherit;
        }

        // FONTS
        b {
          font-weight: bold;
        }
      `}
    </style>
  );
};

export default GlobalStyling;
