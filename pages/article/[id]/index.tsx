import { useRouter } from "next/router";
import styled from "@emotion/styled";

const Back = styled.button`
  background-color: green;
  border: none;
  padding: 10px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

export default ({ article }: any) => {
  const router = useRouter();
  const { title, body } = article;
  return (
    <>
      <h3>{title}</h3>
      <p>{body}</p>
      <Back onClick={() => router.back()}>Go Back</Back>
    </>
  );
};

// Fetches the data at the time it is requested as opposed to pre-fetching at buildtime
export const getServerSideProps = async (context: any) => {
  // Context allows us to get the id of whats in the URL
  //   Context can also be passed to the getStatic Props
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};
