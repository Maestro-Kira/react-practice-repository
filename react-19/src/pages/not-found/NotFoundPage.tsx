import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h3>This page doesn't exist</h3>
      <Link to={"/recipes"}>Go to Recipe List page</Link>
    </div>
  );
};
export default NotFoundPage;
