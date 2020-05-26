import React from 'react';

const Loader = ({ width, height }) => {
  return (
    <div className='loader-container d-flex justify-center align-center'>
      <div className='loader d-flex justify-center align-center'></div>
      <style jsx>{`
        .loader-container {
          width: 100%;
          height: 100%;
        }
        .loader {
          width: ${width ? width : '70px'};
          height: ${height ? height : '70px'};
          background-image: url('/loader/loader.png');
          background-size: contain;
          animation: rotation 1s infinite linear;
        }
        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(359deg);
          }
        }
        .loader-container {
          width: ${width ? width : '100%'};
          height: ${height ? height : 'calc(60vh)'};
        }
      `}</style>
    </div>
  );
};

export default Loader;
