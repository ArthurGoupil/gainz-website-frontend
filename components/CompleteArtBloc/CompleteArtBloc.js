import React, { useState, useEffect, useRef } from 'react';

import ArtsDisplay from './ArtsDisplay';
import TextDisplay from './TextDisplay';
import BackgroundPreview from '../Utils/ArtPreview';

const CompleteArtBloc = ({
  art,
  artType,
  isLoading,
  wallColor,
  setWallColor,
}) => {
  const [backgroundIsLoading, setBackgroundIsLoading] = useState(true);
  const [backgroundPreviewIsLoading, setBackgroundPreviewIsLoading] = useState(
    true
  );
  const [displayModal, setDisplayModal] = useState(false);

  const backgroundRef = useRef();

  const backgroundSrc =
    'https://res.cloudinary.com/goupil/image/upload/v1586641448/gainz/home5-empty-nogainz_ckhcwa.jpg';
  const backgroundPreviewSrc =
    'https://res.cloudinary.com/goupil/image/upload/v1586641442/gainz/home5-empty-nogainz-preview_wjvtk7.jpg';

  const backgroundPreviewIsOn =
    backgroundIsLoading && !backgroundPreviewIsLoading;
  const backgroundIsOn = !backgroundIsLoading && !backgroundPreviewIsLoading;

  useEffect(() => {
    if (backgroundRef.current.complete) {
      setBackgroundIsLoading(false);
    }
  }, [backgroundRef]);

  return (
    <div className='responsive-margins d-flex flex-column justify-center align-center'>
      <div className='top-container d-flex justify-center align-center'>
        <div className='background-container'>
          <BackgroundPreview
            setPreviewImgIsLoading={setBackgroundPreviewIsLoading}
            previewImage={backgroundPreviewSrc}
            previewIsOn={backgroundPreviewIsOn}
            width='100%'
            height='100%'
            backgroundSize='cover'
          />
          <div className='background-color-softener'></div>
          <div className='background-color'></div>
          <img
            ref={backgroundRef}
            className='background'
            src={backgroundSrc}
            alt='Mur gris'
            onLoad={() => setBackgroundIsLoading(false)}
          />
        </div>
        <div className='modal' onClick={() => setDisplayModal(false)}></div>
        <ArtsDisplay
          art={art}
          setDisplayModal={setDisplayModal}
          displayModal={displayModal}
        />
      </div>
      <TextDisplay
        art={art}
        isLoading={isLoading}
        artType={artType}
        wallColor={wallColor}
        setWallColor={setWallColor}
      />
      <style jsx>{`
        .top-container {
          width: 100%;
          height: calc(75vh - 140px);
          position: relative;
        }
        .background-container {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: ${backgroundIsOn ? 1 : 0};
          transition: opacity linear 0.5s;
          overflow: hidden;
        }
        .background-container {
          width: 100%;
          height: 100%;
        }
        .background {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .background-color {
          width: 100%;
          height: 100%;
          background-color: ${wallColor.rgba};
          transition: background-color 0.5s linear;
          position: absolute;
          mix-blend-mode: multiply;
        }
        .background-color-softener {
          width: 100%;
          height: 100%;
          background-color: ${wallColor.rgba};
          transition: background-color 0.5s linear;
          position: absolute;
          opacity: 0.3;
        }
        .modal {
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.7);
          position: fixed;
          top: 0;
          z-index: 2;
          opacity: ${displayModal ? '1' : '0'};
          pointer-events: ${displayModal ? 'inherit' : 'none'};
          cursor: pointer;
          transition: opacity 0.4s ease;
        }
      `}</style>
    </div>
  );
};

export default CompleteArtBloc;
