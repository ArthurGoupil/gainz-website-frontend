import { useState } from 'react';
import Link from 'next/link';

const ArtBloc = ({ photo, margin, artType }) => {
  const [imgIsLoading, setImgIsLoading] = useState(true);
  const [previewImgIsLoading, setPreviewImgIsLoading] = useState(true);

  const { _id, name, isSold, src, previewImage, width, height } = photo;
  return (
    <Link href={`/${artType}/[id]`} as={`/${artType}/${_id}`}>
      <div className='art-container d-flex d-flex justify-center align-center'>
        <div className='art-preview-container'>
          <img
            className='art-preview'
            src={previewImage}
            alt={name + '-preview'}
            onLoad={() => {
              setPreviewImgIsLoading(false);
            }}
          />
        </div>
        <img
          className='art'
          src={src}
          width={width}
          height={height}
          alt={name}
          onLoad={() => {
            setImgIsLoading(false);
          }}
        />
        <div className='art-infos d-flex flex-column align-center'>
          <div className='art-name'>{name.toUpperCase()}</div>
        </div>
        <div className='tag'></div>
        <style jsx>
          {`
            .art-preview-container {
              height: 100%;
              opacity: ${imgIsLoading && !previewImgIsLoading ? 1 : 0};
              transition: opacity ease-in 0.5s;
              pointer-events: ${!imgIsLoading && 'none'};
              z-index: 4;
              position: absolute;
            }
            .art-preview {
              height: 100%;
              filter: blur(5px);
              z-index: 4;
            }
            .art-container {
              cursor: pointer;
              margin: ${margin}px;
              position: relative;
            }
            .art {
              opacity: ${!imgIsLoading && !previewImgIsLoading ? 1 : 0};
              transition: 0.5s;
            }
            .art-container:hover .art {
              filter: contrast(1.2) brightness(0.5);
              transition: 0.2s;
            }
            .art-infos {
              width: 100%;
              position: absolute;
            }
            .art-name {
              color: white;
              font-size: 2rem;
              font-weight: bold;
              opacity: 0;
              transition: 0.2s;
            }
            .art-container:hover .art-name {
              opacity: 1;
              transition: 0.2s;
            }
            .tag {
              width: 10px;
              height: 10px;
              border-radius: 10px;
              position: absolute;
              bottom: 20px;
              right: 20px;
              background-color: ${isSold ? 'red' : 'green'};
            }
          `}
        </style>
      </div>
    </Link>
  );
};

export default ArtBloc;
