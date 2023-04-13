import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';

import axios from 'axios';

import CompleteArtBloc from '../../components/CompleteArtBloc/CompleteArtBloc';

const Papers = ({ wallColor, setWallColor, paper }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (paper) setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>{`Gainz - ${paper.name}`}</title>
        <meta property='og:title' content={`Gainz - ${paper.name}`} />
        <meta
          property='og:description'
          content={`${paper.creationYear}, ${paper.type}`}
        />
        <meta property='og:image' content={paper.smallImage} />
      </Head>
      {!isLoading && (
        <CompleteArtBloc
          art={paper}
          artType='papers'
          isLoading={isLoading}
          wallColor={wallColor}
          setWallColor={setWallColor}
        />
      )}
    </>
  );
};

Papers.getInitialProps = async (ctx) => {
  const slugAndShortId = ctx.query.id;
  const shortId = slugAndShortId.slice(slugAndShortId.lastIndexOf('-') + 1);

  try {
    const response = await axios.get(
      `${process.env.BACKEND_URL}/papers/${shortId}`
    );
    return { paper: response.data };
  } catch (e) {
    console.error(e.message);
  }
};

export default Papers;
