import Gallery from 'react-photo-gallery';
import InfiniteScroll from 'react-infinite-scroller';

import ArtBloc from './ArtBloc';

const ArtsGrid = ({ artsGrid, arts, artType }) => {
  return (
    <InfiniteScroll
      pageStart={0}
      threshold={600}
      loader={
        <div className='loader' key={0}>
          Loading ...
        </div>
      }
    >
      <Gallery
        margin={10}
        photos={artsGrid}
        limitNodeSearch={artType === 'paintings' ? 3 : 5}
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
    </InfiniteScroll>
  );
};

export default ArtsGrid;
