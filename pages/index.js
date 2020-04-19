import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

import BackgroundPreview from '../components/Utils/ArtPreview';
import HomePaintings from '../components/HomePaintings';

const Home = (props) => {
  const [backgroundIsLoading, setBackgroundIsLoading] = useState(true);
  const [backgroundPreviewIsLoading, setBackgroundPreviewIsLoading] = useState(
    true
  );
  const backgroundRef = useRef();

  const homeBackground =
    'https://res.cloudinary.com/goupil/image/upload/v1586641442/gainz/home5-empty_ridqzp.jpg';
  const homeBackgroundPreview =
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
      </Head>
      <div className='home extra-margin d-flex justify-center'>
        <img
          ref={backgroundRef}
          className='home-background'
          src={homeBackground}
          alt='Mur gris dans la rue.'
          onLoad={() => {
            setBackgroundIsLoading(false);
          }}
        />
        <BackgroundPreview
          setPreviewImgIsLoading={setBackgroundPreviewIsLoading}
          previewImage={homeBackgroundPreview}
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
            height: calc(100vh - 160px);
            width: calc(100vw - 40px);
            position: relative;
            overflow: hidden;
          }
          .home-background {
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
              height: calc(100vh - 100px);
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
