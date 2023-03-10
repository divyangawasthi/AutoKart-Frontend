import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import Wrapper from "../styles/ErrorPageStyle"


const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h1>Error 404</h1>
          <h2>UH OH! You're lost.</h2>
          <p>
            The page you are looking for does not exist. You can click the
            button below to go back to the homepage.
          </p>

          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
