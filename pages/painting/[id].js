import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";

import axios from "axios";

import Layout from "../../components/Layout";

const Painting = props => {
  const router = useRouter();
  const [painting, setPainting] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const id = router.query.id;

  const fetchPainting = useCallback(async () => {
    if (id) {
      try {
        const response = await axios.get(
          `http://localhost:3100/painting/${id}`
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
    <Layout>
      {!isLoading ? (
        <img className="image" src={painting.bigImage} alt="" />
      ) : (
        <span>test</span>
      )}
      <style jsx>{`
        .image {
          height: calc(100vh - 155px);
        }
      `}</style>
    </Layout>
  );
};

export default Painting;
