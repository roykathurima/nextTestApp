import type { NextPage } from "next";
import Link from "next/link";
import styled from "@emotion/styled";
interface Article {
  id: number;
  userId: number;
  body: string;
  title: string;
}

const Card = styled.a`
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 8px 2px #ccc;
  padding: 5px 20px;
  margin: 10px 0;
  display: block;
  cursor: pointer;
`;

const Home: NextPage = ({ articles }: any) => {
  return (
    <>
      <h2>Home Page</h2>
      {articles.map(({ id, title, body }: Article) => (
        <Link key={id} href="/article/[id]" as={`/article/${id}`}>
          <Card>
            <h3>{title}</h3>
            <p>{body}</p>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default Home;

// Data is Fetched at Buildtime
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  );
  const articles = await res.json();

  // We return an object with props that contains the data
  // we wanna pass to our components
  return {
    props: {
      articles,
    },
  };
};
