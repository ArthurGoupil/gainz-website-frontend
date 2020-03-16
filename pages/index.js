import Layout from "../components/Layout";

const Home = props => {
  return (
    <Layout>
      <div className="home no-main-padding d-flex justify-center">
        <div className="paint-container">
          <img className="canvas" src="/images/canvas.jpg" alt="canvas" />
          <img className="paint" src="/images/paint1.jpg" alt="paint" />
        </div>
        <div className="paint-container">
          <img className="canvas" src="/images/canvas.jpg" alt="canvas" />
          <img className="paint" src="/images/paint2.jpg" alt="paint" />
        </div>
        <div className="paint-container">
          <img className="canvas" src="/images/canvas.jpg" alt="canvas" />
          <img className="paint" src="/images/paint3.jpg" alt="paint" />
        </div>
      </div>
      {/* <h1>Hello world</h1> */}
      <style jsx>
        {`
          .home {
            background-image: url("/images/blank-canvas.jpg");
            background-size: cover;
            background-position: center;
            height: 100vh;
            width: 100vw;
             {
            }
          }
          .paint-container {
            position: relative;
            width: 323px;
            height: 323px;
            top: 20%;

            margin-left: 60px;
            border-radius: 3px;
          }
          .canvas {
            width: 323px;
            height: 323px;
            position: absolute;
            top: 0;
            box-shadow: 0px 10px 8px 2px #aa967d;
          }
          .paint {
            width: 323px;
            height: 323px;
            position: absolute;
            top: 0;
            opacity: 0;
            transition: 0.2s;
            border-radius: 3px;
          }
          .paint:hover {
            opacity: 1;
            transition: 0.2s;
          }
        `}
      </style>
    </Layout>
  );
};

export default Home;
