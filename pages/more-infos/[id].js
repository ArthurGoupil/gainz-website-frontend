import { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import axios from 'axios';

import ContactForm from '../../components/ContactForm';
import BackgroundPreview from '../../components/Utils/ArtPreview';

const MoreInfos = (props) => {
  const router = useRouter();
  const artTypeId = router.query.id;
  const [art, setArt] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [artType, setArtType] = useState(null);
  const [id, setId] = useState(null);

  const [backgroundIsLoading, setBackgroundIsLoading] = useState(true);
  const [backgroundPreviewIsLoading, setBackgroundPreviewIsLoading] = useState(
    true
  );
  const backgroundRef = useRef();

  const backgroundSrc =
    'https://res.cloudinary.com/goupil/image/upload/v1586641442/gainz/home5-empty-nogainz_ckhcwa.jpg';
  const backgroundPreviewSrc =
    'https://res.cloudinary.com/goupil/image/upload/v1586641442/gainz/home5-empty-nogainz-preview_wjvtk7.jpg';

  const backgroundPreviewIsOn =
    backgroundIsLoading && !backgroundPreviewIsLoading;
  const backgroundIsOn = !backgroundIsLoading && !backgroundPreviewIsLoading;

  useEffect(() => {
    if (backgroundRef.current.complete) {
      setBackgroundIsLoading(false);
    }
  }, [backgroundRef]);

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
        <img
          ref={backgroundRef}
          className='background'
          src={backgroundSrc}
          alt='Mur gris dans la rue.'
          onLoad={() => {
            setBackgroundIsLoading(false);
          }}
        />
        <BackgroundPreview
          setPreviewImgIsLoading={setBackgroundPreviewIsLoading}
          previewImage={backgroundPreviewSrc}
          previewIsOn={backgroundPreviewIsOn}
          width='100%'
          height='100%'
          backgroundSize='cover'
        />
      </div>
      <style jsx>{`
        .more-infos {
          width: calc(100vw - 40px);
          min-height: calc(100vh - 160px);
          position: relative;
          overflow: hidden;
        }
        .background {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          position: absolute;
          opacity: ${backgroundIsOn ? 1 : 0};
          transition: opacity linear 0.5s;
        }
        .contact-form-container {
          width: 100%;
          opacity: ${isLoading ? 0 : 1};
          transition: 0.5s;
          z-index: 10;
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
