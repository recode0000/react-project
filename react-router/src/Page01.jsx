import { Link } from "react-router-dom";

export const Page01 = () => {
  return (
    <div>
      <h1>Page01 Page</h1>
      <Link to="/page01/detailsA" />
      <Link to="/page01/detailsB" />
    </div>
  );
};