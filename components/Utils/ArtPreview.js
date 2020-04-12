import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const ArtPreview = ({
  setPreviewImgIsLoading,
  previewImage,
  previewIsOn,
  width,
  height,
  backgroundSize,
}) => {
  return (
    <>
      <div className='art-preview-preload'>
        <img
          src={previewImage}
          alt='Preview image preload'
          onLoad={() => setPreviewImgIsLoading(false)}
        />
      </div>
      <div className='art-preview'></div>
      <style jsx>{`
        .art-preview {
          background-image: url(${previewImage});
          background-size: ${backgroundSize ? backgroundSize : '100% 100%'};
          background-repeat: no-repeat;
          background-position: center;
          position: absolute;
          width: ${width ? width : '90%'};
          height: ${height ? height : '75%'};
          filter: blur(5px);
          opacity: ${previewIsOn ? 1 : 0};
          transition: opacity ease-in 0.5s;
        }
        .art-preview-preload {
          display: none;
        }
      `}</style>
    </>
  );
};

export default ArtPreview;
