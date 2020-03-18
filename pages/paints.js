import { useState, useEffect, useCallback } from "react";

import axios from "axios";
import Gallery from "react-photo-gallery";

import Layout from "../components/Layout";
import PaintBloc from "../components/PaintBloc";
import SelectedImage from "../components/SelectedImage";

const Paints = props => {
  const [paints, setPaints] = useState([]);
  const [paintsGrid, setPaintsGrid] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const paintsArr = [];

  const fetchPaints = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3100/paints");
      setPaints(response.data);
      response.data.forEach(paint => {
        paintsArr.push({
          src: paint.smallImage,
          width: paint.width,
          height: paint.height
        });
      });
      setPaintsGrid(paintsArr);
      setIsLoading(false);
    } catch (e) {
      console.error(e.message);
    }
  });

  useEffect(() => {
    fetchPaints();
  }, []);

  return (
    <Layout>
      {!isLoading ? (
        <Gallery
          photos={paintsGrid}
          limitNodeSearch={3}
          targetRowHeight={400}
          renderImage={({ index, photo }) => (
            <PaintBloc
              key={paints[index]._id}
              index={index}
              photo={photo}
              {...paints[index]}
            />
          )}
        />
      ) : (
        <span>test</span>
      )}
    </Layout>
  );
};

export default Paints;
