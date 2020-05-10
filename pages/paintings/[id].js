import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import axios from 'axios';

import CompleteArtBloc from '../../components/CompleteArtBloc/CompleteArtBloc';

const Paintings = ({ wallColor, setWallColor }) => {
  const router = useRouter();
  const [painting, setPainting] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const slugAndId = router.query.id;
  let id;
  if (slugAndId) {
    id = slugAndId.slice(slugAndId.lastIndexOf('-') + 1);
  }

  const fetchPainting = useCallback(async () => {
    if (id) {
      try {
        const response = await axios.get(
          `${process.env.BACKEND_URL}/paintings/${id}`
        );
        setPainting(response.data);
        setIsLoading(false);
      } catch (e) {
        console.error(e.message);
      }
    }
  });

  useEffect(() => {
    fetchPainting();
  }, [id]);

  return (
    <>
      <Head>
        <title>Gainz - {painting.name}</title>
        <meta
          name='og:description'
          content={`${painting.creationYear}, ${painting.type}`}
        />
        <meta name='og:image' content={painting.smallImage} />
      </Head>
      <CompleteArtBloc
        art={painting}
        artType='paintings'
        isLoading={isLoading}
        wallColor={wallColor}
        setWallColor={setWallColor}
      />
    </>
  );
};

export default Paintings;
