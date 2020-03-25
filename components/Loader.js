import DotLoader from "react-spinners/DotLoader";

const Loader = ({ marginTop, color, width, height }) => {
  return (
    <div className="loader-container d-flex justify-center align-center">
      <DotLoader size={50} color={color ? color : darkBlue} />
      <style jsx>{`
        .loader-container {
          width: ${width ? width : "100%"};
          height: ${height ? height : "calc(100vh - 140px)"};
          margin-top: ${marginTop ? marginTop : "0px"};
        }
      `}</style>
    </div>
  );
};

export default Loader;
