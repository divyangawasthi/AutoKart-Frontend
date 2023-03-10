import styled from "styled-components";
const MainWrapper = styled.section`
  .card-class {
    position: relative;
    background: linear-gradient(
      110.5deg,
      rgba(248, 196, 249, 0.66) 22.8%,
      rgba(253, 122, 4, 0.15) 64.6%
    );
    animation: rotate 1.5s linear infinite;
  }

  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  .image-box {
    position: relative;
    margin: auto;
    overflow: hidden;
  }

  .image-box img {
    max-width: 100%;
    transition: all 0.3s;
    display: block;
    width: 100%;
    height: auto;
    transform: scale(1);
  }
  .image-box:hover img {
    transform: scale(1.2);
  }

  img {
    max-width: 100%;
    max-height: 100%;
    background-size: cover;
    object-fit: contain;
    cursor: pointer;
    transition: transform 0.5s ease;
    box-shadow: ${({ theme }) => theme.colors.shadow};
  }
  .img:hover {
    transform: scale(1.5);
  }
`;

export default MainWrapper;
