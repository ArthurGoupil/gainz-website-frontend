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
          /* MAIN */
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
            color: ${middleBlue};
          }
          main {
            padding: 0 20px 20px 20px;
          }
          /* TITLES */
          h1 {
            color: ${middleBlue};
            display: block;
            font-size: 2.4rem;
            line-height: 2.8rem;
            font-weight: bold;
            margin-bottom: 10px;
          }
          h2 {
            color: ${middleBlue};
            display: block;
            font-size: 1.6rem;
            line-height: 2rem;
          }
          h3 {
            color: ${middleBlue};
            display: block;
            font-size: 1.6rem;
            line-height: 1.8rem;
            font-weight: bold;
          }
          h4 {
            color: ${middleBlue};
            display: block;
            font-size: 1.4rem;
            line-height: 1.7rem;
            font-weight: bold;
          }

          /* LINKS */
          a {
            text-decoration: none;
          }
          a:link {
            color: inherit;
          }
          a:visited {
            color: inherit;
          }

          /* FONTS */
          b {
            font-weight: bold;
          }

          /* INPUTS */
          input:not(.submit),
          textarea {
            border-radius: ${miniRadius};
            border: none;
            margin: 5px 0 10px 0;
            padding: 10px 10px;
            background-color: ${lightGrey};
          }
          input {
            width: 100%;
            height: 40px;
            padding: 10px 10px;
          }
          textarea {
            min-width: 400px;
            max-width: 400px;
            min-height: 100px;
          }
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          textarea:-webkit-autofill,
          textarea:-webkit-autofill:hover,
          textarea:-webkit-autofill:focus,
          select:-webkit-autofill,
          select:-webkit-autofill:hover,
          select:-webkit-autofill:focus {
            border: 2px solid ${middleBlue};
            -webkit-box-shadow: 0 0 0px 1000px ${lightGrey} inset;
            transition: background-color 5000s ease-in-out 0s;
          }

          /* CONTAINER */
          .container {
            width: 96vw;
            max-width: ${container};
          }

          /* FLEXBOX */
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
