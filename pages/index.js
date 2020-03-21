import { useState, useEffect } from "react";

import Layout from "../components/Layout";
import Carousel from "nuka-carousel";

const Home = props => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Layout>
      <div className="home d-flex justify-center">
        <div className="paints-container">
          <Carousel
            vertical={true}
            wrapAround={true}
            renderCenterRightControls={({ nextSlide }) => (
              <div className="button-carousel" onMouseEnter={nextSlide}></div>
            )}
            renderCenterLeftControls={() => <></>}
            renderBottomCenterControls={() => <></>}
            transitionMode="fade"
          >
            <img className="paint" src="/images/paint1.jpg" alt="" />
            <img className="paint" src="/images/paint2.jpg" alt="" />
            <img className="paint" src="/images/paint3.jpg" alt="" />
            <img className="paint" src="/images/paint4.jpg" alt="" />
          </Carousel>
        </div>
      </div>
      <style jsx>
        {`
          .home {
            background-image: url("/images/home5-empty.jpg");
            background-size: cover;
            background-position: center;
            height: calc(100vh - 160px);
            width: calc(100vw - 40px);
            position: fixed;
            top: 140px;
            z-index: -1;
          }

          .paints-container {
            width: 191px;
            height: 191px;
            margin-top: 90px;
            border-radius: 3px;
            box-shadow: 3px 3px 2px 1px #2a2a2a;
          }
          .paint {
            width: 191px;
            height: 191px;
            filter: saturate(0.6) brightness(0.9);
          }
          .button-carousel {
            width: 191px;
            height: 191px;
          }
        `}
      </style>
    </Layout>
  );
};

export default Home;
