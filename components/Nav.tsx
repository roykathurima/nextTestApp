import Link from "next/link";
import styled from "@emotion/styled";

const Navigation = styled.nav`
  background-color: black;
  color: white;
  display: flex;
  ul {
    list-style: none;
    display: flex;
  }
  ul > li {
    margin-right: 10px;
  }
`;

const Nav = () => {
  return (
    <Navigation>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </Navigation>
  );
};

export default Nav;
