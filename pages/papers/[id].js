import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import axios from 'axios';

import CompleteArtBloc from '../../components/CompleteArtBloc/CompleteArtBloc';

const Papers = ({ wallColor, setWallColor }) => {
  const router = useRouter();
  const [paper, setPaper] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const slugAndId = router.query.id;
  let id;
  if (slugAndId) {
    id = slugAndId.slice(slugAndId.lastIndexOf('-') + 1);
  }

  const fetchPaper = useCallback(async () => {
    if (id) {
      try {
        const response = await axios.get(
          `${process.env.BACKEND_URL}/papers/${id}`
        );
        setPaper(response.data);
        setIsLoading(false);
      } catch (e) {
        console.error(e.message);
      }
    }
  });

  useEffect(() => {
    fetchPaper();
  }, [id]);

  return (
    <>
      <Head>
        <title>Gainz - {paper.name}</title>
      </Head>
      <CompleteArtBloc
        art={paper}
        artType='papers'
        isLoading={isLoading}
        wallColor={wallColor}
        setWallColor={setWallColor}
      />
      ;
    </>
  );
};

export default Papers;
