import { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

import Loader from '../components/Utils/Loader';
import Filters from '../components/Utils/Filters';
import ArtsGrid from '../components/ArtsGrid/ArtsGrid';

const Paintings = (props) => {
  const [paintings, setPaintings] = useState([]);
  const [paintingsGrid, setPaintingsGrid] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const paintingsArr = [];

  const fetchPaintings = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.BACKEND_URL}/paintings`);
      setPaintings(response.data);
      response.data.forEach((painting) => {
        paintingsArr.push({
          _id: painting._id,
          name: painting.name,
          isSold: painting.isSold,
          src: painting.smallImage,
          previewImage: painting.previewImage,
          width: painting.width,
          height: painting.height,
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
    <>
      <Filters arts={paintings} setArtsGrid={setPaintingsGrid} />
      {!isLoading ? (
        <ArtsGrid
          artsGrid={paintingsGrid}
          arts={paintings}
          artType='paintings'
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Paintings;
