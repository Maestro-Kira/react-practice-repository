import { useLocation, useParams } from "react-router-dom";

const RecipeDetails = () => {
  const params = useParams();
  console.log(params);

  const { id } = params;

  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1 className="text-2xl">Recipe Details of recipe item {id}</h1>
    </div>
  );
};
export default RecipeDetails;
