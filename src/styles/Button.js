import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  background: linear-gradient(
    89deg,
    rgb(21, 74, 189) 0.1%,
    rgb(26, 138, 211) 51.5%,
    rgb(72, 177, 234) 100.2%
  );
  color: rgb(255 255 255);
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
    background: none;
    background-color: #42a5f5;
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;
