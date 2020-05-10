import { useContext } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import data from '../languages/data.json';
import LangContext from '../contexts/LangContext';

const About = (props) => {
  const lang = useContext(LangContext);
  const backgroundSrc =
    'https://res.cloudinary.com/goupil/image/upload/v1586641448/gainz/home5-empty-nogainz_ckhcwa.jpg';
  const gainzSrc =
    'https://res.cloudinary.com/goupil/image/upload/v1586641448/gainz/gainz-about3_wgz1mf.png';

  return (
    <>
      <Head>
        <title>Gainz - {data[lang].main.about}</title>
      </Head>
      <div className='container responsive-margins d-flex justify-center'>
        {/* <img className='background' src={backgroundSrc} alt='Mur gris' /> */}
        <div className='about-container'>
          <img className='gainz' src={gainzSrc} alt='Gaspard Pellerin' />
          <div className='about-text-container d-flex flex-column'>
            <h1>À propos</h1>
            <img className='logo' src='/logo/logo-gainz.svg' alt='logo-gainz' />
            <span className='description'>
              Gainz réalise ses premières peintures dans la rue, ce qui lui a
              permis d’acquérir un geste vif et précis tout en apprenant à
              composer dans de grands espaces. Son travail sur toile a commencé
              autour de compositions totalement libres et improvisées en noir et
              blanc, à l’encre de chine, avec une lame de rasoir en guise de
              pinceau. Cet outil peu commun est par la suite devenu son outil de
              prédilection. Son travail se développe aujourd’hui encore autour
              de cette lame. Passant du noir et blanc à la couleur, gouache,
              acrylique, bombe de peinture, posca et même fusain, Gainz aime
              varier les matériaux et les mélanger. Ses tableaux abstraits
              incorporent de nombreuses formes subjectives propres à
              l’interprétation de chacun.
            </span>
            <span className='inquiry'>
              {data[lang].main.inquiry} :{' '}
              <Link href='mailto: contact@gainz-art.com'>
                <a className='email' target='_blank'>
                  contact@gainz-art.com
                </a>
              </Link>
            </span>
            <iframe
              src='https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FGainz-644885112313740%2F&width=200&layout=button&action=like&size=large&share=true&height=65&appId'
              width='200'
              height='29'
              scrolling='no'
              frameborder='0'
              allowTransparency='true'
              allow='encrypted-media'
            ></iframe>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: calc(100vw - 40px);
          min-height: calc(100vh - 160px);
          overflow: hidden;
          background-image: url(${backgroundSrc});
          background-size: cover;
          background-repeat: no-repeat;
        }
        .about-container {
          width: 490px;
          background-color: white;
          opacity: 1;
          position: relative;
          border-radius: 10px;
          padding: 45px;
          box-shadow: 3px 3px 10px 4px rgba(42, 42, 42, 0.2);
          min-height: calc(100vh - 200px);
          margin: 20px 0;
        }
        .gainz {
          position: absolute;
          right: -200px;
          bottom: -40px;
        }
        .about-text-container {
          margin-right: 13%;
        }
        .logo {
          width: 70%;
          margin: 10px 0 30px 0;
        }
        .description,
        .inquiry {
          margin-bottom: 20px;
        }
        .email {
          text-decoration: underline;
        }

        @media only screen and (max-width: 769px) {
          .container {
            width: 100vw;
            min-height: calc(100vh - 80px);
          }
          .about-container {
            width: calc(100vw - 40px);
            max-width: 490px;
            min-height: calc(100vh - 140px);
            padding: 25px;
          }
          .gainz {
            right: -230px;
          }
        }
      `}</style>
    </>
  );
};

export default About;
