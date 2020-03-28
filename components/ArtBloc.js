import Link from "next/link";

const ArtBloc = ({ photo, margin, artType }) => {
  const { _id, name, isSold } = photo;
  return (
    <Link href={`/${artType}/[id]`} as={`/${artType}/${_id}`}>
      <div className="art-container d-flex d-flex justify-center align-center">
        <img
          className="art"
          src={photo.src}
          width={photo.width}
          height={photo.height}
          alt={name}
        />
        <div className="art-infos d-flex flex-column align-center">
          <div className="art-name">{name.toUpperCase()}</div>
        </div>
        <div className="tag"></div>
        <style jsx>
          {`
            .art-container {
              cursor: pointer;
              margin: ${margin}px;
              position: relative;
            }
            .art {
              transition: 0.2s;
            }
            .art-container:hover .art {
              filter: contrast(1.2) brightness(0.5);
              transition: 0.2s;
            }
            .art-infos {
              width: 100%;
              position: absolute;
            }
            .art-name {
              color: white;
              font-size: 2rem;
              font-weight: bold;
              opacity: 0;
              transition: 0.2s;
            }
            .art-container:hover .art-name {
              opacity: 1;
              transition: 0.2s;
            }
            .tag {
              width: 10px;
              height: 10px;
              border-radius: 10px;
              position: absolute;
              bottom: 20px;
              right: 20px;
              background-color: ${isSold ? "red" : "green"};
            }
          `}
        </style>
      </div>
    </Link>
  );
};

export default ArtBloc;
