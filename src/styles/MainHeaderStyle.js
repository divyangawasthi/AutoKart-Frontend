import styled from "styled-components";

const MainHeader = styled.header`
  padding: 0 5rem;
  height: 6rem;
  background: linear-gradient(
    89deg,
    rgb(21, 74, 189) 0.1%,
    rgb(26, 138, 211) 51.5%,
    rgb(72, 177, 234) 100.2%
  );

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 4rem;
  }
  .searchBar {
    display: flex;
    padding-left: 25rem;
  }
`;

export default MainHeader;