import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";

import axios from "axios";

import ContactForm from "../../components/ContactForm";

const MoreInfos = props => {
  const router = useRouter();
  const artTypeId = router.query.id;
  const [art, setArt] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [artType, setArtType] = useState(null);
  const [id, setId] = useState(null);

  const fetchArt = useCallback(async () => {
    if (artTypeId) {
      setArtType(artTypeId.substr(0, artTypeId.indexOf("-")));
      setId(artTypeId.substr(artTypeId.indexOf("-") + 1, artTypeId.length - 1));
      if (id && artType) {
        try {
          const response = await axios.get(
            `${process.env.BACKEND_URL}/${artType}/${id}`
          );
          setArt(response.data);
          setIsLoading(false);
        } catch (e) {
          console.error(e.message);
        }
      }
    }
  });

  useEffect(() => {
    fetchArt();
  }, [artTypeId, id, artType]);

  return (
    <>
      <div className="more-infos d-flex justify-center">
        <div className="form-container">
          <ContactForm art={art} isLoading={isLoading} artType={artType} />
        </div>
      </div>
      <style jsx>{`
        .more-infos {
          background-image: url("/images/home5-empty-nogainz.jpg");
          background-size: cover;
          background-position: center;
          width: calc(100vw - 40px);
          min-height: calc(100vh - 160px);
        }
        .form-container {
          opacity: ${isLoading ? 0 : 1};
          transition: 0.5s;
        }
      `}</style>
    </>
  );
};

export default MoreInfos;
