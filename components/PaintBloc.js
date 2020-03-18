import Link from "next/link";

const PaintBloc = ({
  _id,
  name,
  details,
  dimensions,
  date,
  smallImage,
  bigImage,
  photo
}) => {
  console.log(photo);

  return (
    <Link href="/paint/[id]" as={`/paint/${name}`}>
      <div className="paint-container d-flex justify-center align-center">
        <img className="paint" {...photo} alt={name} />
        <div className="paint-infos">{name.toUpperCase()}</div>
        <style jsx>
          {`
            .paint-container {
              width: ${photo.width};
              height: ${photo.height};
              position: relative;
              cursor: pointer;
              font-size: 2rem;
            }
            .paint {
               {
                /* width: 100%; */
              }
              transition: 0.2s;
            }
            .paint-container:hover .paint {
              filter: contrast(1.2) brightness(0.5);
              transition: 0.2s;
            }
            .middle-column {
               {
                /* margin: 0 20px 20px 20px; */
              }
            }
            .paint-infos {
              color: white;
              font-weight: bold;
              position: absolute;
              padding: 10px;
              border-radius: 5px;
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
