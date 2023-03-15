import styled from "styled-components";

const Head = styled.header``;

const HeadLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 20px;
`;

function Header() {
  return (
    <Head>
      <HeadLink href="/login">Login</HeadLink>
      <HeadLink href="/join">Join</HeadLink>
    </Head>
  );
}

export default Header;
