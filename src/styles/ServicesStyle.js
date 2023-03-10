import styled from "styled-components";
const Wrapper = styled.section`
  padding: 9rem 0;

  .grid {
    gap: 4.8rem;
  }

  .services-1 {
    background: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
  }
  .services-3 {
    background: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    transition: transform 0.2s;
  }
  .services-1:hover {
    transform: scale(1.1);
    background: #e3f2fd;
  }

  .services-3:hover {
    transform: scale(1.1);
    background: #e3f2fd;
  }
  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-column-2 {
      transition: transform 0.2s;
      background: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);

      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        gap: 1rem;
      }
    }
    .services-column-2:hover {
      background: #e3f2fd;
      transform: scale(1.1);
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`;

export default Wrapper;