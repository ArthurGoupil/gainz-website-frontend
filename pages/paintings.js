import { useState, useEffect, useCallback, useContext } from 'react';
import Head from 'next/head';
import data from '../languages/data.json';
import LangContext from '../contexts/LangContext';

import axios from 'axios';

import Loader from '../components/Utils/Loader';
import Filters from '../components/Utils/Filters';
import ArtsGrid from '../components/ArtsGrid/ArtsGrid';

const Paintings = (props) => {
  const lang = useContext(LangContext);
  const [paintings, setPaintings] = useState([]);
  const [paintingsGrid, setPaintingsGrid] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filtersAreChanging, setFiltersAreChanging] = useState(false);
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

  const metaImage =
    'https://res.cloudinary.com/goupil/image/upload/v1586641448/gainz/home5-empty-nogainz_ckhcwa.jpg';

  return (
    <>
      <Head>
        <title>Gainz - {data[lang].main.paintings}</title>
        <meta
          property='og:title'
          content={`Gainz - ${data[lang].main.paintings}`}
        />
        <meta property='og:description' content='Travail sur toile.' />
        <meta property='og:image' content={metaImage} />
      </Head>
      <Filters
        arts={paintings}
        setArtsGrid={setPaintingsGrid}
        setIsLoading={setIsLoading}
        setFiltersAreChanging={setFiltersAreChanging}
      />
      {!isLoading ? (
        !filtersAreChanging && (
          <ArtsGrid
            artsGrid={paintingsGrid}
            arts={paintings}
            artType='paintings'
          />
        )
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Paintings;
