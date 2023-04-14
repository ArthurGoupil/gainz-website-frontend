import React, { useState, useEffect, useCallback, useContext } from 'react';
import Head from 'next/head';
import data from '../languages/data.json';
import LangContext from '../contexts/LangContext';

import axios from 'axios';

import Loader from '../components/Utils/Loader';
import Filters from '../components/Utils/Filters';
import ArtsGrid from '../components/ArtsGrid/ArtsGrid';

const Papers = (props) => {
  const lang = useContext(LangContext);
  const [papers, setPapers] = useState([]);
  const [papersGrid, setPapersGrid] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filtersAreChanging, setFiltersAreChanging] = useState(false);
  const papersArr = [];

  const fetchPapers = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.BACKEND_URL}/papers`);


      const sortedPapers = _.orderBy(
        response.data,
        ['creationYear', "name"],
        ['desc']
      )

      setPapers(sortedPapers);

      sortedPapers.forEach((paper) => {
        papersArr.push({
          shortId: paper.shortId,
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

  const metaImage =
    'https://res.cloudinary.com/goupil/image/upload/v1586641448/gainz/home5-empty-nogainz_ckhcwa.jpg';

  return (
    <>
      <Head>
        <title>{`Gainz - ${data[lang].main.papers}`}</title>
        <meta
          property='og:title'
          content={`Gainz - ${data[lang].main.papers}`}
        />
        <meta
          property='og:description'
          content='Collages, encre de chine, posca ...'
        />
        <meta property='og:image' content={metaImage} />
      </Head>
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
