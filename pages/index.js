import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';

import axios from 'axios';

import BackgroundPreview from '../components/Utils/ArtPreview';

const Home = (props) => {
  const [homePaintingsArr, setHomePaintingsArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [firstPainting, setFirstPainting] = useState(0);
  const [secondPainting, setSecondPainting] = useState(1);
  const [firstImgOn, setFirstImgOn] = useState(true);

  const homeBackground =
    'https://res.cloudinary.com/goupil/image/upload/v1586641442/gainz/home5-empty_ridqzp.jpg';
  const homeBackgroundPreview =
    'https://res.cloudinary.com/goupil/image/upload/v1586641442/gainz/home5-empty-preview_rkzcqe.jpg';

  const fetchPaintings = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.BACKEND_URL}/paintings/home`
      );
      setHomePaintingsArr(response.data);
      setIsLoading(false);
    } catch (e) {
      console.error(e.message);
    }
  });

  useEffect(() => {
    fetchPaintings();
  }, []);

  return (
    <>
      <Head>
        <title>Gainz</title>
      </Head>
      <div className='home extra-margin d-flex justify-center'>
        <div
          className='paints-container'
          onMouseEnter={() => {
            if (window.innerWidth > 769) {
              setFirstImgOn(!firstImgOn);
              if (!firstImgOn) {
                if (secondPainting !== homePaintingsArr.length - 1) {
                  setFirstPainting(secondPainting + 1);
                } else setFirstPainting(0);
              } else {
                if (firstPainting !== homePaintingsArr.length - 1) {
                  setSecondPainting(firstPainting + 1);
                } else setSecondPainting(0);
              }
            }
          }}
          onClick={() => {
            if (window.innerWidth < 769) {
              setFirstImgOn(!firstImgOn);
              if (!firstImgOn) {
                if (secondPainting !== homePaintingsArr.length - 1) {
                  setFirstPainting(secondPainting + 1);
                } else setFirstPainting(0);
              } else {
                if (firstPainting !== homePaintingsArr.length - 1) {
                  setSecondPainting(firstPainting + 1);
                } else setSecondPainting(0);
              }
            }
          }}
        >
          {!isLoading && (
            <>
              <img
                className='second-paint'
                src={homePaintingsArr[firstPainting].smallImage}
                alt='second-paint'
              />
              <img
                className='first-paint'
                src={homePaintingsArr[secondPainting].smallImage}
                alt='first-paint'
              />
            </>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .home-background-preload {
            display: none;
          }
          .home {
            background-image: url(${homeBackground});
            background-size: cover;
            background-position: center;
            height: calc(100vh - 160px);
            width: calc(100vw - 40px);
            position: relative;
            overflow: hidden;
            opacity: 1;
          }
          .paints-container {
            height: 24vh;
            width: 24vh;
            margin-top: 10vh;
            box-shadow: 3px 3px 2px 1px #2a2a2a;
            position: relative;
            opacity: ${!isLoading ? 1 : 0};
            transition: 0.5s;
            border-radius: 3px;
            overflow: hidden;
          }

          .first-paint {
            width: 100%;
            height: 100%;
            filter: saturate(0.7) brightness(0.9);
            opacity: ${!firstImgOn ? 1 : 0};
            -webkit-transition: opacity 0.5s ease-in-out;
            -moz-transition: opacity 0.5s ease-in-out;
            -o-transition: opacity 0.5s ease-in-out;
            transition: opacity 0.5s ease-in-out;
          }
          .second-paint {
            width: 100%;
            height: 100%;
            filter: saturate(0.6) brightness(0.9);
            position: absolute;
            top: 0;
            opacity: ${!firstImgOn ? 0 : 1};
            -webkit-transition: opacity 0.5s ease-in-out;
            -moz-transition: opacity 0.5s ease-in-out;
            -o-transition: opacity 0.5s ease-in-out;
            transition: opacity 0.5s ease-in-out;
          }
          .button-carousel {
            width: 191px;
            height: 191px;
          }
          @media only screen and (max-width: 769px) {
            .home {
              height: calc(100vh - 100px);
            }
            .paints-container {
              height: 20vh;
              width: 20vh;
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
