import { useRouter } from "next/router";

const Paint = props => {
  const router = useRouter();
  const productId = router.query.id;
  return <div>{productId}</div>;
};

export default Paint;
