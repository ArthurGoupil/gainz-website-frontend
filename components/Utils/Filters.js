import React, { useState, useContext } from 'react';
import LangContext from '../../contexts/LangContext';
import data from '../../languages/data.json';

import _ from 'lodash';

import { MdAdjust, MdRadioButtonUnchecked } from 'react-icons/md';

const Filters = ({ arts, setArtsGrid, setFiltersAreChanging }) => {
  const lang = useContext(LangContext);
  const [yearFilterType, setYearFilterType] = useState('availability');
  const [availabilitySort, setAvailabilitySort] = useState(true);
  const [showArts, setShowArts] = useState('all');

  const handleIsSoldWhenYearSort = (showArts) => {
    if (showArts === 'all') {
      return;
    } else if (showArts === 'available') {
      return { isSold: false };
    } else if (showArts === 'sold') {
      return { isSold: true };
    }
  };

  const sortArts = (arts, sort, sortType) => {
    setFiltersAreChanging(true);
    const sortedArts = _.orderBy(
      _.filter(arts, handleIsSoldWhenYearSort(showArts)),
      [sort],
      [sortType]
    );
    const sortedArtsGrid = [];
    sortedArts.forEach((art) => {
      sortedArtsGrid.push({
        shortId: art.shortId,
        name: art.name,
        isSold: art.isSold,
        src: art.smallImage,
        previewImage: art.previewImage,
        width: art.width,
        height: art.height,
      });
    });
    if (sort === 'isSold') {
      setYearFilterType('availability');
    } else {
      setYearFilterType(sortType);
    }

    setArtsGrid(sortedArtsGrid);
    setTimeout(() => setFiltersAreChanging(false), 100);
  };

  const handleShowArts = (arts, sortType) => {
    setFiltersAreChanging(true);
    if (sortType === 'all') {
      const sortedArts = _.orderBy(arts, ['creationYear'], [yearFilterType]);
      const sortedArtsGrid = [];
      sortedArts.forEach((art) => {
        sortedArtsGrid.push({
          shortId: art.shortId,
          name: art.name,
          isSold: art.isSold,
          src: art.smallImage,
          previewImage: art.previewImage,
          width: art.width,
          height: art.height,
        });
      });
      setShowArts('all');
      setArtsGrid(sortedArtsGrid);
    } else if (sortType === 'available') {
      setYearFilterType('desc');
      const sortedArts = _.orderBy(
        _.filter(arts, { isSold: false }),
        ['creationYear'],
        ['desc']
      );
      const sortedArtsGrid = [];
      sortedArts.forEach((art) => {
        sortedArtsGrid.push({
          shortId: art.shortId,
          name: art.name,
          isSold: art.isSold,
          src: art.smallImage,
          previewImage: art.previewImage,
          width: art.width,
          height: art.height,
        });
      });
      setShowArts('available');
      setArtsGrid(sortedArtsGrid);
    } else if (sortType === 'sold') {
      setYearFilterType('desc');
      const sortedArts = _.orderBy(
        _.filter(arts, { isSold: true }),
        ['creationYear'],
        ['desc']
      );
      const sortedArtsGrid = [];
      sortedArts.forEach((art) => {
        sortedArtsGrid.push({
          shortId: art.shortId,
          name: art.name,
          isSold: art.isSold,
          src: art.smallImage,
          previewImage: art.previewImage,
          width: art.width,
          height: art.height,
        });
      });
      setShowArts('sold');
      setArtsGrid(sortedArtsGrid);
    }
    setTimeout(() => setFiltersAreChanging(false), 100);
  };

  return (
    <div className='filters d-flex'>
      <div className='sort-container d-flex'>
        <div className='sort'>
          <b>{data[lang].filters.sort}&nbsp;&nbsp;</b>|
        </div>
        <div
          className='sort-element availability d-flex align-center'
          onClick={() => sortArts(arts, 'isSold', 'asc')}
          style={{
            opacity: showArts === 'all' ? 1 : 0.3,
            pointerEvents: showArts === 'all' ? 'auto' : 'none',
          }}
        >
          <div className='icons d-flex align-center'>
            {yearFilterType === 'availability' ? (
              <MdAdjust />
            ) : (
              <MdRadioButtonUnchecked />
            )}
          </div>
          <span>{data[lang].filters.availability}</span>
        </div>
        <div
          className='sort-element desc d-flex align-center'
          onClick={() => sortArts(arts, 'creationYear', 'desc')}
        >
          <div className='icons d-flex align-center'>
            {yearFilterType === 'desc' ? (
              <MdAdjust />
            ) : (
              <MdRadioButtonUnchecked />
            )}
          </div>
          <span>{data[lang].filters.newest}</span>
        </div>
        <div
          className='sort-element asc d-flex align-center'
          onClick={() => sortArts(arts, 'creationYear', 'asc')}
        >
          <div className='icons d-flex align-center'>
            {yearFilterType === 'asc' ? (
              <MdAdjust />
            ) : (
              <MdRadioButtonUnchecked />
            )}
          </div>
          {data[lang].filters.oldest}
        </div>
      </div>
      <div className='sort-container d-flex'>
        <div className='show'>
          <b>{data[lang].filters.show}&nbsp;&nbsp;</b>|
        </div>
        <div
          className='sort-element all d-flex align-center'
          onClick={() => {
            handleShowArts(arts, 'all');
          }}
        >
          <div className='icons d-flex align-center'>
            {showArts === 'all' ? <MdAdjust /> : <MdRadioButtonUnchecked />}
          </div>
          {data[lang].filters.all}
        </div>
        <div
          className='sort-element available d-flex align-center'
          onClick={() => {
            handleShowArts(arts, 'available');
          }}
        >
          <div className='icon-available d-flex align-center'>
            {showArts === 'available' ? (
              <MdAdjust />
            ) : (
              <MdRadioButtonUnchecked />
            )}
          </div>
          {data[lang].filters.available}
        </div>
        <div
          className='sort-element sold d-flex align-center'
          onClick={() => handleShowArts(arts, 'sold')}
        >
          <div className='icon-sold d-flex align-center'>
            {showArts === 'sold' ? <MdAdjust /> : <MdRadioButtonUnchecked />}
          </div>
          {data[lang].filters.sold}
        </div>
      </div>
      <style jsx>
        {`
          .filters {
            width: 100%;
            padding: 0 20px;
          }
          .sort {
            margin-right: 20px;
          }
          .show {
            margin-right: 20px;
            margin-left: 20px;
          }
          .sort-container {
            margin-right: 20px;
            margin-bottom: 10px;
          }
          .sort-element {
            margin-right: 15px;
            color: ${greyBlue};
            cursor: pointer;
          }
          .sort-element.availability {
            font-weight: ${yearFilterType === 'availability' &&
            showArts === 'all' &&
            'bold'};
          }
          .sort-element.asc {
            font-weight: ${yearFilterType === 'asc' && 'bold'};
          }
          .sort-element.desc {
            font-weight: ${yearFilterType === 'desc' && 'bold'};
          }
          .sort-element.all {
            font-weight: ${showArts === 'all' && 'bold'};
          }
          .sort-element.available {
            font-weight: ${showArts === 'available' && 'bold'};
          }
          .sort-element.sold {
            font-weight: ${showArts === 'sold' && 'bold'};
          }
          .sort-element:hover {
            color: ${middleBlue};
          }
          .year-desc-icon {
            opacity: ${yearFilterType === 'desc' ? 1 : 0};
            margin-right: 3px;
            transition: opacity linear 0.1s;
            font-size: 12px;
          }
          .icons,
          .icon-available,
          .icon-sold {
            margin-right: 3px;
            font-size: 1.2rem;
          }
          .icon-available {
            color: green;
          }
          .icon-sold {
            color: red;
          }
          @media only screen and (max-width: 600px) {
            .filters {
              flex-direction: column;
            }
            .show {
              margin-right: 20px;
              margin-left: 0px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Filters;
