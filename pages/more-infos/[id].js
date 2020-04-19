import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import axios from 'axios';

import ContactForm from '../../components/ContactForm';

const MoreInfos = (props) => {
  const router = useRouter();
  const artTypeId = router.query.id;
  const [art, setArt] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [artType, setArtType] = useState(null);
  const [id, setId] = useState(null);
  const backgroundSrc =
    'https://res.cloudinary.com/goupil/image/upload/v1586641448/gainz/home5-empty-nogainz_ckhcwa.jpg';

  const fetchArt = useCallback(async () => {
    if (artTypeId) {
      setArtType(artTypeId.substr(0, artTypeId.indexOf('-')));
      setId(artTypeId.substr(artTypeId.indexOf('-') + 1, artTypeId.length - 1));
      if (id && artType) {
        try {
          const response = await axios.get(
            `${process.env.BACKEND_URL}/${artType}/${id}`
          );
          setArt(response.data);
          setIsLoading(false);
        } catch (e) {
          console.error(e.message);
        }
      }
    }
  });

  useEffect(() => {
    fetchArt();
  }, [artTypeId, id, artType]);

  return (
    <>
      <Head>{!isLoading && <title>Gainz - {art.name}</title>}</Head>
      <div className='more-infos responsive-margins d-flex justify-center'>
        <div className='contact-form-container d-flex justify-center'>
          <ContactForm art={art} isLoading={isLoading} artType={artType} />
        </div>
      </div>
      <style jsx>{`
        .more-infos {
          background-image: url(${backgroundSrc});
          background-size: cover;
          background-position: center;
          width: calc(100vw - 40px);
          min-height: calc(100vh - 160px);
        }
        .contact-form-container {
          width: 100%;
          opacity: ${isLoading ? 0 : 1};
          transition: 0.5s;
        }
        @media only screen and (max-width: 769px) {
          .more-infos {
            width: 100vw;
          }
        }
      `}</style>
    </>
  );
};

export default MoreInfos;
