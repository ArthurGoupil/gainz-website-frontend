const GlobalClasses = () => {
  return (
    <style jsx global>
      {`
        // CONTAINER
        .container {
          width: 96vw;
          max-width: ${container};
        }

        // MAIN
        .is-main-padding {
          margin: 100px 20px 20px 20px;
        }

        // FLEXBOX
        .d-flex {
          display: flex;
        }
        .justify-center {
          justify-content: center;
        }
        .space-between {
          justify-content: space-between;
        }
        .space-around {
          justify-content: space-around;
        }
        .align-center {
          align-items: center;
        }
        .flex-column {
          flex-direction: column;
        }
        .flex-wrap {
          flex-wrap: wrap;
        }
      `}
    </style>
  );
};

export default GlobalClasses;
