import React, { useState } from 'react';
import Link from 'next/link';

import slugify from 'slugify';

import ArtPreview from '../Utils/ArtPreview';

const ArtBloc = ({ photo, margin, artType }) => {
  const [imgIsLoading, setImgIsLoading] = useState(true);
  const [previewImgIsLoading, setPreviewImgIsLoading] = useState(true);

  const { shortId, name, isSold, src, previewImage, width, height } = photo;

  const nameSlug = slugify(name, {
    remove: /[*+~.()'"!:@/]/g,
    lower: true,
  });

  const previewIsOn = imgIsLoading && !previewImgIsLoading;

  const imgIsOn = !imgIsLoading && !previewImgIsLoading;

  return (
    <Link href={`/${artType}/[id]`} as={`/${artType}/${nameSlug}-${shortId}`}>
      <div className='art-container d-flex d-flex justify-center align-center'>
        <div>
          <ArtPreview
            setPreviewImgIsLoading={setPreviewImgIsLoading}
            previewImage={previewImage}
            previewIsOn={previewIsOn}
            width='100%'
            height='100%'
          />
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
        </div>
        <div className='art-infos d-flex flex-column align-center'>
          <div className='art-name'>{name.toUpperCase()}</div>
        </div>
        {(!imgIsLoading && isSold) && <div className='tag'/>}
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
              background-color: red;
            }
          `}
        </style>
      </div>
    </Link>
  );
};

export default ArtBloc;
