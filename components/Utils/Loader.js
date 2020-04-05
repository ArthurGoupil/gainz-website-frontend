import ScaleLoader from 'react-spinners/ScaleLoader';

const Loader = ({ color, width, height, size }) => {
  return (
    <div className='loader-container d-flex justify-center align-center'>
      <ScaleLoader
        height={size ? size : 15}
        color={color ? color : middleBlue}
      />
      <style jsx>{`
        .loader-container {
          width: ${width ? width : '100%'};
          height: ${height ? height : 'calc(60vh)'};
        }
      `}</style>
    </div>
  );
};

export default Loader;
