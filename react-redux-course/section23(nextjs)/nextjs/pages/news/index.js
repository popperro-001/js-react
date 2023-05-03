import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">NextJS is a great tool</Link>
        </li>
        <li>ReactJS is also great tool</li>
      </ul>
    </>
  );
};

export default NewsPage;
