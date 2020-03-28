import { useState } from "react";

import _ from "lodash";

const Filters = ({ arts, setArtsGrid }) => {
  const [filterType, setFilterType] = useState(null);

  const sortArtsByYear = (arts, sortType) => {
    const sortedArtsGrid = [];
    const sortedArts = _.orderBy(arts, ["creationYear"], [sortType]);
    sortedArts.forEach(art => {
      sortedArtsGrid.push({
        _id: art._id,
        name: art.name,
        isSold: art.isSold,
        src: art.smallImage,
        width: art.width,
        height: art.height
      });
    });
    setArtsGrid(sortedArtsGrid);
    setFilterType(`year ${sortType}`);
  };
  return (
    <>
      <div className="filters d-flex">
        <div className="sort-container d-flex space-between">
          <span className="sort">
            <b>sort&nbsp;&nbsp;</b>|
          </span>
          <span
            className="sort-element desc"
            onClick={() => sortArtsByYear(arts, "desc")}
          >
            newest
          </span>
          <span
            className="sort-element asc"
            onClick={() => sortArtsByYear(arts, "asc")}
          >
            oldest
          </span>
        </div>
        <div className="sort-container d-flex space-between">
          <span className="sort">
            <b>include&nbsp;&nbsp;</b>|
          </span>
          <span
            className="sort-element desc"
            onClick={() => sortArtsByYear(arts, "desc")}
          >
            available
          </span>
          <span
            className="sort-element asc"
            onClick={() => sortArtsByYear(arts, "asc")}
          >
            sold
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .filters {
            width: 100%;
            padding: 0 10px;
          }
          .sort {
            margin-right: 10px;
          }
          .sort-container {
            margin-right: 20px;
            margin-bottom: 10px;
          }
          .sort-element {
            margin-right: 10px;
            color: ${greyBlue};
            cursor: pointer;
            transition: 0.2s;
          }
          .sort-element.asc {
            font-weight: ${filterType === "year asc" && "bold"};
          }
          .sort-element.desc {
            font-weight: ${filterType === "year desc" && "bold"};
          }
          .sort-element:hover {
            color: ${middleBlue};
            transition: 0.2s;
          }
        `}
      </style>
    </>
  );
};

export default Filters;
