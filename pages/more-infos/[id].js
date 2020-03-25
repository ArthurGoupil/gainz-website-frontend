import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";

const MoreInfos = props => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <Layout>
      <div className="home d-flex justify-center">
        <ContactForm id={id} />
      </div>
      <style jsx>{`
        .home {
          background-image: url("/images/home5-empty-nogainz.jpg");
          background-size: cover;
          background-position: center;
          height: calc(100vh - 160px);
          width: calc(100vw - 40px);
        }
      `}</style>
    </Layout>
  );
};

export default MoreInfos;
