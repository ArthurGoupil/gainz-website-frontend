import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import axios from 'axios';

import CompleteArtBloc from '../../components/CompleteArtBloc/CompleteArtBloc';

const Papers = ({ wallColor, setWallColor, paper }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (paper) setIsLoading(false);
  }, []);

  console.log(paper);

  return (
    <>
      <Head>
        <title>Gainz - {paper.name}</title>
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
  const slugAndId = ctx.query.id;
  const id = slugAndId.slice(slugAndId.lastIndexOf('-') + 1);
  try {
    const response = await axios.get(`${process.env.BACKEND_URL}/papers/${id}`);
    return { paper: response.data };
  } catch (e) {
    console.error(e.message);
  }
};

export default Papers;
