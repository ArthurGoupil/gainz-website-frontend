import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

import FirstPaintingPreview from './Utils/ArtPreview';

const HomePaintings = ({ margin }) => {
  const [homePaintingsArr, setHomePaintingsArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [firstPainting, setFirstPainting] = useState(0);
  const [firstPaintingIsLoading, setFirstPaintingIsLoading] = useState(true);
  const [
    firstPaintingPreviewIsLoading,
    setFirstPaintingPreviewIsLoading,
  ] = useState(true);
  const [secondPainting, setSecondPainting] = useState(1);
  const [firstImgOn, setFirstImgOn] = useState(true);

  const firstPaintingPreviewIsOn =
    firstPaintingIsLoading && !firstPaintingPreviewIsLoading;
  const firstPaintingIsOn =
    !firstPaintingIsLoading && !firstPaintingPreviewIsLoading;

  const showNextPainting = (device) => {
    let actionCondition;

    if (device === 'desktop') {
      actionCondition = window.innerWidth > 769;
    } else if (device === 'mobile') {
      actionCondition = window.innerWidth < 769;
    }

    if (actionCondition) {
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
  };

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
    <div
      className='paints-container'
      onMouseEnter={() => showNextPainting('desktop')}
      onClick={() => showNextPainting('mobile')}
    >
      {!isLoading && (
        <>
          <img
            className='second-paint'
            src={homePaintingsArr[secondPainting].smallImage}
            alt='second-paint'
          />
          <img
            className='first-paint'
            src={homePaintingsArr[firstPainting].smallImage}
            alt='first-paint'
            onLoad={() => {
              if (setFirstPaintingIsLoading) setFirstPaintingIsLoading(false);
            }}
          />
          <FirstPaintingPreview
            setPreviewImgIsLoading={setFirstPaintingPreviewIsLoading}
            previewImage={homePaintingsArr[0].previewImage}
            previewIsOn={firstPaintingPreviewIsOn}
            width='100%'
            height='100%'
          />
        </>
      )}
      <style jsx>
        {`
          .paints-container {
            height: 24vh;
            width: 24vh;
            position: relative;
            box-shadow: ${firstPaintingIsOn
              ? '3px 3px 2px 1px #2a2a2a'
              : 'none'};
            opacity: ${!isLoading ? 1 : 0};
            transition: 0.5s;
            border-radius: 3px;
            overflow: hidden;
            margin: ${margin ? margin : 'auto'};
          }

          .first-paint {
            width: 100%;
            height: 100%;
            filter: saturate(0.7) brightness(0.9);
            opacity: ${firstImgOn && firstPaintingIsOn ? 1 : 0};
            transition: opacity 0.5s linear;
          }
          .second-paint {
            width: 100%;
            height: 100%;
            filter: saturate(0.6) brightness(0.9);
            position: absolute;
            top: 0;
            opacity: ${firstImgOn ? 0 : 1};
            transition: opacity 0.5s linear;
          }
          @media only screen and (max-width: 769px) {
            .paints-container {
              height: 20vh;
              width: 20vh;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomePaintings;
