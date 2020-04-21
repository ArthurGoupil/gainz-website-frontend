import { useContext } from 'react';
import LangContext from '../../contexts/LangContext';
import data from '../../languages/data.json';
import Link from 'next/link';

import InputColor from 'react-input-color';

const TextDisplay = ({ art, artType, isLoading, wallColor, setWallColor }) => {
  const lang = useContext(LangContext);
  console.log(wallColor.rgba);

  return (
    <div className='text-container d-flex flex-column align-center'>
      <div className='d-flex flex-column align-center'>
        <span className='name'>{art.name}</span>
        <span className='details'>
          {art.creationYear}
          {art.details && ` - ${art.details}`}
        </span>
      </div>
      <div className='sub-text-container d-flex space-around flex-wrap'>
        <span className='art-info'>{art.type}</span>
        <span className='art-info'>
          {art.format === 'normal' ? (
            `${art.width}cm x ${art.height}cm`
          ) : art.format === 'diptyque' ? (
            <>
              {art.widthOfEach}cm x {art.heightOfEach}cm
              <b>&nbsp;(x2)</b>
            </>
          ) : (
            <>
              {art.widthOfEach}cm x {art.heightOfEach}cm
              <b>&nbsp;(x3)</b>
            </>
          )}
        </span>
        <span className='art-info d-flex align-center'>
          <div className='sold-tag'></div>
          {art.isSold ? data[lang].art.sold : data[lang].art.available}
        </span>
        {!art.isSold && <span className='art-info'>{art.price}&nbsp;€</span>}
      </div>
      <div className='color-picker d-flex align-center'>
        <span>
          {wallColor.rgba === 'rgba(236,236,236,1)'
            ? 'Choisir la couleur du mur :'
            : 'Rétablir la valeur par défaut :'}
          &nbsp;
        </span>
        <InputColor
          initialValue='#ececec'
          onChange={setWallColor}
          placement='top'
        />
      </div>
      {!art.isSold && (
        <Link href='/more-infos/[id]' as={`/more-infos/${artType}-${art._id}`}>
          <a>
            <button className='more'>{data[lang].art.interested}</button>
          </a>
        </Link>
      )}
      <style jsx>{`
        .text-container {
          width: 70%;
          padding: 20px 0;
          opacity: ${!isLoading ? 1 : 0};
        }
        .art-info {
          width: 150px;
          text-align: center;
          display: flex;
          justify-content: center;
          margin-bottom: 5px;
        }
        .name {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 6px;
        }
        .details {
          font-style: italic;
          font-size: 1.3rem;
          margin-bottom: 20px;
        }
        .sub-text-container {
          width: 100%;
          margin-bottom: 20px;
        }
        .sold-tag {
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: ${art.isSold ? 'red' : 'green'};
          margin-right: 5px;
        }
        .more {
          background: transparent;
          border: 2px solid ${lightGrey};
          border-radius: 5px;
          padding: 5px 10px;
        }
        .more:hover {
          background-color: ${lightGrey};
          cursor: pointer;
        }
        .color-picker {
          position: absolute;
          right: 20px;
        }

        @media only screen and (max-width: 920px) {
          .sub-text-container {
            flex-direction: column;
            align-items: center;
          }
        }
        @media only screen and (max-width: 769px) {
          .color-picker {
            position: inherit;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default TextDisplay;
