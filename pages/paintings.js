import { useState, useEffect, useCallback } from "react";

import axios from "axios";
import Gallery from "react-photo-gallery";

import Layout from "../components/Layout";
import ArtBloc from "../components/ArtBloc";
import Loader from "../components/Loader";

const Paintings = props => {
  const [paintings, setPaintings] = useState([]);
  const [paintingsGrid, setPaintingsGrid] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const paintingsArr = [];

  const fetchPaintings = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.BACKEND_URL}/paintings`);
      setPaintings(response.data);
      response.data.forEach(painting => {
        paintingsArr.push({
          src: painting.smallImage,
          width: painting.width,
          height: painting.height
        });
      });
      setPaintingsGrid(paintingsArr);
      setIsLoading(false);
    } catch (e) {
      console.error(e.message);
    }
  });

  useEffect(() => {
    fetchPaintings();
  }, []);

  return (
    <Layout>
      {!isLoading ? (
        <Gallery
          margin={10}
          photos={paintingsGrid}
          limitNodeSearch={3}
          targetRowHeight={450}
          renderImage={({ index, photo, margin }) => (
            <ArtBloc
              key={paintings[index]._id}
              index={index}
              photo={photo}
              margin={margin}
              {...paintings[index]}
              artType="paint"
            />
          )}
        />
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default Paintings;
