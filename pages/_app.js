// import App from 'next/app'
import "../styles/reset.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowLeft);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          // MAIN
          * {
            box-sizing: border-box;
          }
          @import url("https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap");
          html,
          input,
          textarea,
          button {
            font-size: 62.5%;
            font-family: "Quicksand", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
          }
          /* Hide scrollbar for Chrome, Safari and Opera */
          body::-webkit-scrollbar {
            display: none;
          }
          /* Hide scrollbar for IE and Edge */
          body {
            -ms-overflow-style: none;
          }
          body,
          input,
          button,
          textarea {
            font-size: 1.4rem;
            line-height: 1.9rem;
            color: ${darkBlue};
          }
          main {
            padding: 0 20px 20px 20px;
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

          // CONTAINER
          .container {
            width: 96vw;
            max-width: ${container};
          }

          // FLEXBOX
          .d-flex {
            display: flex;
          }
          .justify-center {
            justify-content: center;
          }
          .space-between {
            justify-content: space-between;
          }
          .space-around {
            justify-content: space-around;
          }
          .align-center {
            align-items: center;
          }
          .flex-column {
            flex-direction: column;
          }
          .flex-wrap {
            flex-wrap: wrap;
          }
        `}
      </style>
      ;
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
