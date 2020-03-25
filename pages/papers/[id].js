import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";

import axios from "axios";

import Layout from "../../components/Layout";
import CompleteArtBloc from "../../components/CompleteArtBloc";

const Papers = props => {
  const router = useRouter();
  const [paper, setPaper] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [displayModal, setDisplayModal] = useState(false);
  const id = router.query.id;

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
    <Layout backButtonLink="/papers">
      <CompleteArtBloc art={paper} isLoading={isLoading} />
    </Layout>
  );
};

export default Papers;
