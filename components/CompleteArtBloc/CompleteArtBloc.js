import { useState } from 'react';
import Link from 'next/link';
import ArtPreview from '../Utils/ArtPreview';
import ArtsDisplay from './ArtsDisplay';

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
      <div className='text-container d-flex flex-column align-center space-around'>
        <div className='d-flex flex-column align-center'>
          <span className='name'>{art.name}</span>
          <span className='details'>
            {art.creationYear}
            {art.details && ` - ${art.details}`}
          </span>
        </div>
        <div className='sub-text-container d-flex space-around flex-wrap'>
          <span className='art-info'>{art.type}</span>
          <span className='art-info'>
            {art.format === 'normal' ? (
              `${art.width}cm x ${art.height}cm`
            ) : art.format === 'diptyque' ? (
              <>
                {art.widthOfEach}cm x {art.heightOfEach}cm
                <b>&nbsp;(x2)</b>
              </>
            ) : (
              <>
                {art.widthOfEach}cm x {art.heightOfEach}cm
                <b>&nbsp;(x3)</b>
              </>
            )}
          </span>
          <span className='art-info d-flex align-center'>
            <div className='sold-tag'></div>
            {art.isSold ? 'Already sold' : 'Available'}
          </span>
          <span className='art-info'>{art.price}&nbsp;€</span>
        </div>
        {!art.isSold && (
          <Link
            href='/more-infos/[id]'
            as={`/more-infos/${artType}-${art._id}`}
          >
            <a>
              <button className='more'>Interested ? Contact us.</button>
            </a>
          </Link>
        )}
      </div>
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
        .text-container {
          width: 70%;
          height: 25vh;
          padding: 20px 0;
          opacity: ${!isLoading ? 1 : 0};
        }
        .art-info {
          width: 200px;
          text-align: center;
          display: flex;
          justify-content: center;
          margin-bottom: 5px;
        }
        .name {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 6px;
        }
        .details {
          font-style: italic;
          font-size: 1.3rem;
        }
        .sub-text-container {
          width: 100%;
        }
        .sold-tag {
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: ${art.isSold ? 'red' : 'green'};
          margin-right: 5px;
        }
        .more {
          background: transparent;
          border: 2px solid ${lightGrey};
          border-radius: 5px;
          padding: 5px 10px;
        }
        .more:hover {
          background-color: ${lightGrey};
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default CompleteArtBloc;
