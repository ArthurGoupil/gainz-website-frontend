import { useState, useEffect } from "react";

import axios from "axios";
import StackGrid from "react-stack-grid";

import Layout from "../components/Layout";
import PaintBloc from "../components/PaintBloc";

const Paints = props => {
  const [paints, setPaints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPaints = async () => {
      try {
        const response = await axios.get("http://localhost:3100/paints");
        setPaints(response.data);
        setIsLoading(false);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchPaints();
  }, []);

  return (
    <Layout>
      {!isLoading ? (
        <div className="grid-wrapper">
          <StackGrid columnWidth="33.33333%" gutterWidth={0} gutterHeight={0}>
            {paints.map(paint => {
              return <PaintBloc key={paint._id} {...paint} />;
            })}
          </StackGrid>
          <style jsx>
            {`
              .grid-wrapper {
                width: 100%;
              }
            `}
          </style>
        </div>
      ) : (
        <span>test</span>
      )}
    </Layout>
  );
};

export default Paints;
