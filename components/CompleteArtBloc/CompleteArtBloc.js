import { useState } from 'react';
import Link from 'next/link';
import ArtPreview from '../Utils/ArtPreview';
import ArtsDisplay from './ArtsDisplay';
import TextDisplay from './TextDisplay';

const CompleteArtBloc = ({ art, artType, isLoading }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [numberOfLoadedImg, setNumberOfLoadedImg] = useState(0);
  const [previewImgIsLoading, setPreviewImgIsLoading] = useState(true);

  const getImgQty = (format) => {
    if (format === 'triptyque') {
      return 3;
    } else if (format === 'diptyque') {
      return 2;
    } else {
      return 1;
    }
  };

  const previewIsOn =
    numberOfLoadedImg !== getImgQty(art.format) && !previewImgIsLoading;

  const imgIsOn =
    numberOfLoadedImg === getImgQty(art.format) && !previewImgIsLoading;

  return (
    <div className='extra-margin d-flex flex-column align-center'>
      <div className='main-background d-flex justify-center align-center'>
        <div className='modal' onClick={() => setDisplayModal(false)}></div>
        <ArtsDisplay
          art={art}
          setDisplayModal={setDisplayModal}
          displayModal={displayModal}
          setNumberOfLoadedImg={setNumberOfLoadedImg}
          numberOfLoadedImg={numberOfLoadedImg}
          imgIsOn={imgIsOn}
        />
        <ArtPreview
          setPreviewImgIsLoading={setPreviewImgIsLoading}
          previewImage={art.previewImage}
          previewIsOn={previewIsOn}
        />
      </div>
      <TextDisplay art={art} isLoading={isLoading} artType={artType} />
      <style jsx>{`
        .main-background {
          background-image: url('/images/home5-empty-nogainz.jpg');
          background-size: cover;
          background-position: center;
          height: calc(75vh - 140px);
          width: 100%;
          position: relative;
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
          -webkit-transition: opacity 0.4s ease-in-out;
          -moz-transition: opacity 0.4s ease-in-out;
          -o-transition: opacity 0.4s ease-in-out;
          transition: opacity 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default CompleteArtBloc;
