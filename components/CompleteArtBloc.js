import { useState } from "react";
import Link from "next/link";

const CompleteArtBloc = ({ art, isLoading }) => {
  const [displayModal, setDisplayModal] = useState(false);

  const getArtMaxWidth = (format, displayModal) => {
    if (format === "triptyque") {
      if (displayModal) {
        return "30vw";
      } else return "25%";
    } else if (format === "diptyque") {
      if (displayModal) {
        return "60vw";
      } else return "50%";
    } else {
      if (displayModal) {
        return "90vw";
      } else return "90%";
    }
  };

  const getArtShadow = (format, displayModal) => {
    if (!displayModal) {
      if (format === "diptyque" || format === "triptyque") {
        return "3px 3px 2px 1px rgba(42,42,42, 0.5)";
      } else return "3px 3px 2px 1px rgba(42,42,42, 0.8)";
    } else return "0px 0px 20px 10px rgba(42,42,42, 0.7)";
  };

  return (
    <div className="d-flex flex-column align-center">
      <div className="main-background d-flex justify-center align-center">
        <div className="modal" onClick={() => setDisplayModal(false)}></div>
        <img
          className="art"
          src={art.bigImage}
          alt="art"
          onClick={() => setDisplayModal(!displayModal)}
        />
        {(art.format === "diptyque" || art.format === "triptyque") && (
          <img
            className="art scnd-art"
            src={art.scndBigImage}
            alt="art"
            onClick={() => setDisplayModal(!displayModal)}
          />
        )}
        {art.format === "triptyque" && (
          <img
            className="art thrd-art"
            src={art.thrdBigImage}
            alt="art"
            onClick={() => setDisplayModal(!displayModal)}
          />
        )}
      </div>
      <div className="text-container d-flex flex-column align-center space-around">
        <div className="d-flex flex-column align-center">
          <span className="name">{art.name}</span>
          <span className="details">
            {art.creationYear}
            {art.details && ` - ${art.details}`}
          </span>
        </div>
        <div className="sub-text-container d-flex space-around flex-wrap">
          <span className="art-info">{art.type}</span>
          <span className="art-info">
            {art.format === "normal" ? (
              `${art.width}cm x ${art.height}cm`
            ) : art.format === "diptyque" ? (
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
          <span className="art-info d-flex align-center">
            <div className="sold-tag"></div>
            {art.isSold ? "Already sold" : "Available"}
          </span>
          <span className="art-info">{art.price}&nbsp;€</span>
        </div>
        {!art.isSold && (
          <Link href="/more-infos/[id]" as={`/more-infos/${art._id}`}>
            <a>
              <button className="more">Interested ? Contact us.</button>
            </a>
          </Link>
        )}
      </div>
      <style jsx>{`
        .main-background {
          background-image: url("/images/home5-empty-nogainz.jpg");
          background-size: cover;
          background-position: center;
          height: calc(75vh - 140px);
          width: calc(100vw - 40px);
        }
        .art {
          max-width: ${getArtMaxWidth(art.format, displayModal)};
          max-height: ${displayModal ? "90vh" : "75%"};
          box-shadow: ${getArtShadow(art.format, displayModal)};
          border-radius: 3px;
          transition: 0.5s;
          cursor: pointer;
          opacity: ${!isLoading ? 1 : 0};
          z-index: 3;
        }
        .scnd-art,
        .thrd-art {
          margin-left: ${displayModal ? "15px" : "10px"};
        }
        .art:hover {
          transform: ${!displayModal ? "scale(1.02)" : "none"};
          transition: 0.5s;
        }
        .modal {
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.7);
          position: fixed;
          top: 0;
          z-index: 2;
          opacity: ${displayModal ? "1" : "0"};
          pointer-events: ${displayModal ? "inherit" : "none"};
          cursor: pointer;
          -webkit-transition: opacity 0.4s ease-in-out;
          -moz-transition: opacity 0.4s ease-in-out;
          -o-transition: opacity 0.4s ease-in-out;
          transition: opacity 0.4s ease-in-out;
        }
        .art-modal {
          max-height: 90vh;
          max-width: 90vh;
        }
        .text-container {
          width: 70%;
          height: 25vh;
          padding: 20px 0;
          opacity: ${!isLoading ? 1 : 0};
        }
        .art-info {
          width: 200px;
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
        }
        .sub-text-container {
          width: 100%;
        }
        .sold-tag {
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: ${art.isSold ? "red" : "green"};
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
      `}</style>
    </div>
  );
};

export default CompleteArtBloc;
