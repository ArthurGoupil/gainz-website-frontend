import { useState } from 'react';
import Link from 'next/link';

import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import ArtPreview from '../Utils/ArtPreview';

const ArtBloc = ({ photo, margin, artType }) => {
  const [imgIsLoading, setImgIsLoading] = useState(true);
  const [previewImgIsLoading, setPreviewImgIsLoading] = useState(true);

  const { _id, name, isSold, src, previewImage, width, height } = photo;

  const previewIsOn = imgIsLoading && !previewImgIsLoading;

  const imgIsOn = !imgIsLoading && !previewImgIsLoading;

  return (
    <Link href={`/${artType}/[id]`} as={`/${artType}/${_id}`}>
      <div className='art-container d-flex d-flex justify-center align-center'>
        <div>
          <ArtPreview
            setPreviewImgIsLoading={setPreviewImgIsLoading}
            previewImage={previewImage}
            previewIsOn={previewIsOn}
            width='100%'
            height='100%'
            contain={false}
          />
          <img
            className='lazyload art'
            data-src={src}
            width={width}
            height={height}
            alt={name}
            onLoad={() => {
              setImgIsLoading(false);
            }}
          />
        </div>
        <div className='art-infos d-flex flex-column align-center'>
          <div className='art-name'>{name.toUpperCase()}</div>
        </div>
        {!imgIsLoading && <div className='tag'></div>}
        <style jsx>
          {`
            .art-container {
              cursor: pointer;
              margin: ${margin}px;
              position: relative;
            }
            .art {
              opacity: ${imgIsOn ? 1 : 0};
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
