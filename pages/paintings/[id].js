import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";

import axios from "axios";

import Layout from "../../components/Layout";
import CompleteArtBloc from "../../components/CompleteArtBloc";

const Paintings = props => {
  const router = useRouter();
  const [painting, setPainting] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const id = router.query.id;

  const fetchPainting = useCallback(async () => {
    if (id) {
      try {
        const response = await axios.get(
          `http://localhost:3100/paintings/${id}`
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
    <Layout backButtonLink="/paintings">
      {!isLoading ? <CompleteArtBloc art={painting} /> : <span>test</span>}
    </Layout>
  );
};

export default Paintings;
