import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  return <h1>The Detail Page {newsId}</h1>;
};

export default DetailPage;
