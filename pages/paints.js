import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../components/Layout";

const Paints = props => {
  return (
    <Layout>
      <div className="is-main-padding d-flex flex-wrap space-between">
        <Link href="/paint/[id]" as="/paint/123">
          <div className="paint-container d-flex justify-center align-center">
            <img className="paint" src="/images/paint1.jpg" alt="paint" />
            <div className="paint-infos">
              <span className="search-icon"></span>
              HORIZON
            </div>
          </div>
        </Link>
        <div className="paint-container middle-column d-flex justify-center align-center">
          <img className="paint" src="/images/paint2.jpg" alt="paint" />
          <div className="paint-infos">
            <span className="search-icon"></span>
            KINAHO'S CHIEF
          </div>
        </div>
        <div className="paint-container d-flex justify-center align-center">
          <img className="paint" src="/images/paint3.jpg" alt="paint" />
          <div className="paint-infos">
            <span className="search-icon"></span>
            PROFONDEUR
          </div>
        </div>
        <div className="paint-container d-flex justify-center align-center">
          <img className="paint" src="/images/paint4.jpg" alt="paint" />
          <div className="paint-infos">
            <span className="search-icon"></span>
            HOMARD
          </div>
        </div>
        <div className="paint-container middle-column d-flex justify-center align-center">
          <img className="paint" src="/images/paint5.jpg" alt="paint" />
          <div className="paint-infos">
            <span className="search-icon"></span>
            CONFINEMENT
          </div>
        </div>
        <div className="paint-container d-flex justify-center align-center">
          <img className="paint" src="/images/paint6.jpg" alt="paint" />
          <div className="paint-infos">
            <span className="search-icon"></span>
            COCORICO
          </div>
        </div>
        <div className="paint-container d-flex justify-center align-center">
          <img className="paint" src="/images/paint7.jpg" alt="paint" />
          <div className="paint-infos">
            <span className="search-icon"></span>
            TOUAREG
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .paint-container {
            width: calc((100% - 40px) / 3);
            height: calc((100% - 40px) / 3);
            margin-bottom: 20px;
            position: relative;
            cursor: pointer;
            font-size: 2rem;
          }
          .paint {
            width: 100%;
            transition: 0.2s;
          }
          .paint-container:hover .paint {
            filter: contrast(1.2) brightness(0.5);
            transition: 0.2s;
          }
          .middle-column {
            margin: 0 20px 20px 20px;
          }
          .paint-infos {
            color: white;
            font-weight: bold;
            position: absolute;
            padding: 10px;
            border-radius: 5px;
            opacity: 0;
            transition: 0.2s;
          }
          .paint-container:hover .paint-infos {
            opacity: 1;
            transition: 0.2s;
          }
          .search-icon {
            margin-right: 7px;
          }
        `}
      </style>
    </Layout>
  );
};

export default Paints;
