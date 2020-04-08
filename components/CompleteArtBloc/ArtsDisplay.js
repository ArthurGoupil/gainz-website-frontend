import { useState, useEffect, useCallback } from 'react';

const ArtsDisplay = ({
  art,
  setDisplayModal,
  displayModal,
  setNumberOfLoadedImg,
  numberOfLoadedImg,
  imgIsOn,
}) => {
  const [formatIsLoading, setFormatIsLoading] = useState(true);

  const setFormat = useCallback((format) => {
    if (format) {
      setFormatIsLoading(false);
    }
  });

  useEffect(() => {
    setFormat(art.format);
  }, [art.format]);

  const getArtMaxWidth = (format, displayModal) => {
    if (format === 'triptyque') {
      if (displayModal) {
        return 'calc(90vw / 3)';
      } else return 'calc(90% / 3)';
    } else if (format === 'diptyque') {
      if (displayModal) {
        return 'calc(90vw / 2)';
      } else return 'calc(90% / 2)';
    } else {
      if (displayModal) {
        return '90vw';
      } else return '90%';
    }
  };

  const getArtShadow = (format, displayModal) => {
    if (!displayModal) {
      if (format === 'diptyque' || format === 'triptyque') {
        return '3px 3px 2px 1px rgba(42,42,42, 0.5)';
      } else return '3px 3px 2px 1px rgba(42,42,42, 0.8)';
    } else return '0px 0px 20px 10px rgba(42,42,42, 0.7)';
  };

  return (
    <>
      {!formatIsLoading && (
        <>
          <img
            className='art'
            src={art.bigImage}
            alt={art.name}
            onClick={() => setDisplayModal(!displayModal)}
            onLoad={() => setNumberOfLoadedImg(numberOfLoadedImg + 1)}
          />
          {(art.format === 'diptyque' || art.format === 'triptyque') && (
            <img
              className='art scnd-art'
              src={art.scndBigImage}
              alt={'scnd-' + art.name}
              onClick={() => setDisplayModal(!displayModal)}
              onLoad={() => setNumberOfLoadedImg(numberOfLoadedImg + 1)}
            />
          )}
          {art.format === 'triptyque' && (
            <img
              className='art thrd-art'
              src={art.thrdBigImage}
              alt={'thrd-' + art.name}
              onClick={() => setDisplayModal(!displayModal)}
              onLoad={() => setNumberOfLoadedImg(numberOfLoadedImg + 1)}
            />
          )}
        </>
      )}

      <style jsx>{`
        .art {
          max-width: ${getArtMaxWidth(art.format, displayModal)};
          max-height: ${displayModal ? '90vh' : '75%'};
          box-shadow: ${getArtShadow(art.format, displayModal)};
          border-radius: 3px;
          cursor: pointer;
          opacity: ${imgIsOn ? 1 : 0};
          transition: 0.5s;
          pointer-events: ${!imgIsOn ? 'none' : 'auto'};
          z-index: 3;
        }
        .scnd-art,
        .thrd-art {
          margin-left: ${displayModal ? '15px' : '10px'};
        }
        .art:hover {
          transform: ${!displayModal ? 'scale(1.02)' : 'none'};
          transition: 0.5s;
        }
      `}</style>
    </>
  );
};

export default ArtsDisplay;