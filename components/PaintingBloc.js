import Link from "next/link";

const PaintingBloc = ({
  _id,
  name,
  details,
  width,
  height,
  date,
  smallImage,
  bigImage,
  photo,
  margin
}) => {
  return (
    <Link href="/painting/[id]" as={`/painting/${_id}`}>
      <div className="painting-container d-flex d-flex justify-center align-center">
        <img className="painting" {...photo} alt={name} />
        <div className="painting-infos d-flex flex-column align-center">
          <div className="painting-name">{name.toUpperCase()}</div>
          <div className="painting-dimensions">
            {width}cm x {height}cm
          </div>
        </div>
        <style jsx>
          {`
            .painting-container {
              cursor: pointer;
              margin: ${margin}px;
              position: relative;
            }
            .painting {
              transition: 0.2s;
            }
            .painting-container:hover .painting {
              filter: contrast(1.2) brightness(0.5);
              transition: 0.2s;
            }
            .painting-infos {
              position: absolute;
            }
            .painting-name {
              color: white;
              font-size: 2rem;
              font-weight: bold;
              margin-bottom: 10px;
              opacity: 0;
              transition: 0.2s;
            }
            .painting-dimensions {
              color: white;
              font-size: 1.5rem;
              font-style: italic;
              opacity: 0;
              transition: 0.2s;
            }
            .painting-container:hover .painting-name,
            .painting-container:hover .painting-dimensions {
              opacity: 1;
              transition: 0.2s;
            }
          `}
        </style>
      </div>
    </Link>
  );
};

export default PaintingBloc;
