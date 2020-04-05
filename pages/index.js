import { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

const Home = (props) => {
  const [homePaintingsArr, setHomePaintingsArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [firstPainting, setFirstPainting] = useState(0);
  const [secondPainting, setSecondPainting] = useState(1);
  const [firstImgOn, setFirstImgOn] = useState(true);

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
      <div className='home extra-margin d-flex justify-center'>
        <div
          className='paints-container'
          onMouseEnter={() => {
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
          }}
        >
          <img
            className='second-paint'
            src={homePaintingsArr[firstPainting]}
            alt='second-paint'
          />
          <img
            className='first-paint'
            src={homePaintingsArr[secondPainting]}
            alt='first-paint'
          />
        </div>
      </div>
      <style jsx>
        {`
          .home {
            background-image: url('/images/home5-empty.jpg');
            background-size: cover;
            background-position: center;
            height: calc(100vh - 160px);
            width: calc(100vw - 40px);
            position: relative;
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
            filter: saturate(0.6) brightness(0.9);
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
