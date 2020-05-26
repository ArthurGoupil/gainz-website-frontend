import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

import BackgroundPreview from '../components/Utils/ArtPreview';
import HomePaintings from '../components/HomePaintings';

const Home = (props) => {
  const [backgroundIsLoading, setBackgroundIsLoading] = useState(true);
  const [backgroundPreviewIsLoading, setBackgroundPreviewIsLoading] = useState(
    true
  );
  const backgroundRef = useRef();

  const backgroundSrc =
    'https://res.cloudinary.com/goupil/image/upload/v1586641442/gainz/home5-empty_ridqzp.jpg';
  const backgroundPreviewSrc =
    'https://res.cloudinary.com/goupil/image/upload/v1586641442/gainz/home5-empty-preview_rkzcqe.jpg';

  const backgroundPreviewIsOn =
    backgroundIsLoading && !backgroundPreviewIsLoading;
  const backgroundIsOn = !backgroundIsLoading && !backgroundPreviewIsLoading;

  useEffect(() => {
    if (backgroundRef.current.complete) {
      setBackgroundIsLoading(false);
    }
  }, [backgroundRef]);

  return (
    <>
      <Head>
        <title>Gainz</title>
        <meta property='og:title' content='Gainz' />
        <meta
          property='og:description'
          content='Peinture, travail sur papier.'
        />
        <meta property='og:image' content={backgroundSrc} />
      </Head>
      <div className='home responsive-margins d-flex justify-center'>
        <img
          ref={backgroundRef}
          className='background'
          src={backgroundSrc}
          alt='Mur gris dans la rue.'
          onLoad={() => {
            setBackgroundIsLoading(false);
          }}
        />
        <BackgroundPreview
          setPreviewImgIsLoading={setBackgroundPreviewIsLoading}
          previewImage={backgroundPreviewSrc}
          previewIsOn={backgroundPreviewIsOn}
          width='100%'
          height='100%'
          backgroundSize='cover'
        />
        <HomePaintings margin='10vh 0 0 0' />
      </div>
      <style jsx>
        {`
          .home {
            width: calc(100vw - 40px);
            height: calc(100vh - 160px);
            position: relative;
            overflow: hidden;
          }
          .background {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            position: absolute;
            opacity: ${backgroundIsOn ? 1 : 0};
            transition: opacity linear 0.5s;
          }

          @media only screen and (max-width: 769px) {
            .home {
              height: calc(100vh - 80px);
              width: 100vw;
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
