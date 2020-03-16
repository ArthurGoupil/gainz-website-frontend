import Link from "next/link";

const PaintBloc = props => {
  return (
    <Link href="/paint/[id]" as={`/paint/${name}`}>
      <div className="paint-container d-flex justify-center align-center">
        <img className="paint" src="/images/paint1.jpg" alt="paint" />
        <div className="paint-infos">
          <span className="search-icon"></span>
          {name}
        </div>
      </div>
    </Link>
  );
};

export default PaintBloc;
