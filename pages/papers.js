import { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

import Loader from '../components/Utils/Loader';
import Filters from '../components/Utils/Filters';
import ArtsGrid from '../components/ArtsGrid/ArtsGrid';

const Papers = (props) => {
  const [papers, setPapers] = useState([]);
  const [papersGrid, setPapersGrid] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filtersAreChanging, setFiltersAreChanging] = useState(false);
  const papersArr = [];

  const fetchPapers = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.BACKEND_URL}/papers`);
      setPapers(response.data);
      response.data.forEach((paper) => {
        papersArr.push({
          _id: paper._id,
          name: paper.name,
          isSold: paper.isSold,
          src: paper.smallImage,
          previewImage: paper.previewImage,
          width: paper.width,
          height: paper.height,
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
    <>
      <Filters
        arts={papers}
        setArtsGrid={setPapersGrid}
        setFiltersAreChanging={setFiltersAreChanging}
      />
      {!isLoading ? (
        !filtersAreChanging && (
          <ArtsGrid
            artsGrid={papersGrid}
            arts={papers}
            artType='papers'
            filtersAreChanging={filtersAreChanging}
          />
        )
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Papers;
