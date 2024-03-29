import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { PageTransition } from 'next-page-transitions';
import ReactGA from 'react-ga';

import '../styles/reset.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [wallColor, setWallColor] = useState({
    rgba: 'rgba(236,236,236,1)',
    hex: '#ececec',
  });

  useEffect(() => {
    ReactGA.initialize('UA-55980200-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return router.pathname !== '/sitemap.xml' ? (
    <Layout>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta
          property='og:url'
          content={`https://www.gainz-art.com${router.asPath}`}
        />
        <meta property='og:type' content='website' />
        <meta property='fb:app_id' content='1078456695887562' />
      </Head>
      <PageTransition timeout={300} classNames='page-transition'>
        <Component
          {...pageProps}
          wallColor={wallColor}
          setWallColor={setWallColor}
          key={router.pathname}
        />
      </PageTransition>
      <style jsx global>
        {`
          /* MAIN */
          * {
            box-sizing: border-box;
          }
          html,
          input,
          textarea,
          button {
            font-size: 62.5%;
            font-family: 'Quicksand', sans-serif;
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

          /* EXTRA-MARGIN */
          .static-margins {
            margin: 0 20px 0 20px;
          }
          .responsive-margins {
            margin: 0 20px 0 20px;
          }
          @media only screen and (max-width: 769px) {
            .responsive-margins {
              margin: 0;
            }
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
            cursor: pointer;
          }
          a:hover {
            color: ${darkBlue};
          }
          a:link {
            color: ${middleBlue};
          }
          a:visited {
            color: ${middleBlue};
          }
          a:visited:hover {
            color: ${darkBlue};
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
          button.submit {
            height: 40px;
            margin-top: 10px;
            background-color: ${middleBlue};
            color: white;
            font-weight: bold;
            border-radius: ${miniRadius};
            border: none;
            cursor: pointer;
          }
          button.submit:hover {
            background-color: ${darkBlue};
          }
          input {
            width: 100%;
            height: 40px;
            padding: 10px 10px;
          }
          textarea {
            min-width: 100%;
            max-width: 100%;
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

          /* COLOR PICKER */
          .color-picker input {
            font-size: 1.2rem;
            padding: 5px;
            height: inherit;
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

          /* PAGE TRANSITIONS */
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 200ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 200ms;
          }
        `}
      </style>
    </Layout>
  ) : (
    <Component {...pageProps} />
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
