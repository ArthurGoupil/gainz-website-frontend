import { useContext } from 'react';
import Head from 'next/head';
import data from '../languages/data.json';
import LangContext from '../contexts/LangContext';

const About = (props) => {
  const lang = useContext(LangContext);
  const backgroundSrc =
    'https://res.cloudinary.com/goupil/image/upload/v1586727187/gainz/about_mh6rvb.jpg';

  return (
    <>
      <Head>
        <title>Gainz - {data[lang].main.about}</title>
      </Head>
      <div className='about extra-margin d-flex justify-center'></div>
      <style jsx>{`
        .about {
          background-image: url(${backgroundSrc});
          background-size: cover;
          background-position: center;
          width: calc(100vw - 40px);
          min-height: calc(100vh - 160px);
        }
      `}</style>
    </>
  );
};

export default About;
