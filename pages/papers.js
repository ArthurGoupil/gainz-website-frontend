import { useState, useEffect, useCallback } from "react";

import axios from "axios";
import Gallery from "react-photo-gallery";

import Layout from "../components/Layout";
import ArtBloc from "../components/ArtBloc";

const Papers = props => {
  const [papers, setPapers] = useState([]);
  const [papersGrid, setPapersGrid] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const papersArr = [];

  const fetchPapers = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3100/papers");
      setPapers(response.data);
      response.data.forEach(paper => {
        papersArr.push({
          src: paper.smallImage,
          width: paper.width,
          height: paper.height
        });
      });
      setPapersGrid(papersArr);
      setIsLoading(false);
    } catch (e) {
      console.error(e.message);
    }
  });

  useEffect(() => {
    fetchPapers();
  }, []);

  return (
    <Layout>
      {!isLoading ? (
        <Gallery
          margin={10}
          photos={papersGrid}
          limitNodeSearch={5}
          targetRowHeight={300}
          renderImage={({ index, photo, margin }) => (
            <ArtBloc
              key={papers[index]._id}
              index={index}
              photo={photo}
              margin={margin}
              {...papers[index]}
              artType="papers"
            />
          )}
        />
      ) : (
        <span>test</span>
      )}
    </Layout>
  );
};

export default Papers;
