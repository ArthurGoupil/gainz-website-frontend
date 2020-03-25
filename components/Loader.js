import BarLoader from "react-spinners/BarLoader";

const Loader = ({ marginTop, color, width, height }) => {
  return (
    <div className="loader-container d-flex justify-center align-center">
      <BarLoader size={60} color={color ? color : middleBlue} />
      <style jsx>{`
        .loader-container {
          width: ${width ? width : "100%"};
          height: ${height ? height : "calc(60vh)"};
        }
      `}</style>
    </div>
  );
};

export default Loader;
