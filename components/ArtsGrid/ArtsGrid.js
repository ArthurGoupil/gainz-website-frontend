import Gallery from 'react-photo-gallery';

import ArtBloc from './ArtBloc';

const ArtsGrid = ({ artsGrid, arts, artType }) => {
  return (
    <div className='gallery-container'>
      <Gallery
        margin={10}
        photos={artsGrid}
        limitNodeSearch={artType === 'paintings' ? 3 : 4}
        targetRowHeight={artType === 'paintings' ? 400 : 300}
        renderImage={({ index, photo, margin }) => (
          <ArtBloc
            key={arts[index]._id}
            index={index}
            photo={photo}
            margin={margin}
            artType={artType}
          />
        )}
      />
      <style jsx>
        {`
          .gallery-container {
            margin: 0 10px 10px 10px;
          }
        `}
      </style>
    </div>
  );
};

export default ArtsGrid;
