import Link from "next/link";

const PaintBloc = ({ _id, name, details, date, smallImage, bigImage }) => {
  return (
    <Link href="/paint/[id]" as={`/paint/${name}`}>
      <div className="paint-container d-flex justify-center align-center">
        <img className="paint" src={smallImage} alt={name} />
        <div className="paint-infos">{name.toUpperCase()}</div>
        <style jsx>
          {`
            .paint-container {
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

            .paint-infos {
              color: white;
              font-weight: bold;
              position: absolute;
              opacity: 0;
              transition: 0.2s;
            }
            .paint-container:hover .paint-infos {
              opacity: 1;
              transition: 0.2s;
            }
          `}
        </style>
      </div>
    </Link>
  );
};

export default PaintBloc;
