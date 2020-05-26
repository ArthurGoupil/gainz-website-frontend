import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import axios from 'axios';

import CompleteArtBloc from '../../components/CompleteArtBloc/CompleteArtBloc';

const Paintings = ({ wallColor, setWallColor, painting }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (painting) setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Gainz - {painting.name}</title>
        <meta property='og:title' content={`Gainz - ${painting.name}`} />
        <meta
          property='og:description'
          content={`${painting.creationYear}, ${painting.type}`}
        />
        <meta property='og:image' content={painting.smallImage} />
      </Head>
      {!isLoading && (
        <CompleteArtBloc
          art={painting}
          artType='paintings'
          isLoading={isLoading}
          wallColor={wallColor}
          setWallColor={setWallColor}
        />
      )}
    </>
  );
};

Paintings.getInitialProps = async (ctx) => {
  const slugAndShortId = ctx.query.id;
  const shortId = slugAndShortId.slice(slugAndShortId.lastIndexOf('-') + 1);

  try {
    const response = await axios.get(
      `${process.env.BACKEND_URL}/paintings/${shortId}`
    );

    return { painting: response.data };
  } catch (e) {
    console.error(e.message);
  }
};

export default Paintings;
