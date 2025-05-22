import useFetch from "@/hooks/useFetch";

interface Recipe {
  id: number;
  name: string;
  image: string;
}

interface RecipesResponse {
  recipes: Recipe[];
}

const Recipes = () => {
  const { data, loading } = useFetch<RecipesResponse>(
    "https://dummyjson.com/recipes"
  );

  if (loading) return <h1>Fetching recipes</h1>;

  return (
    <div>
      <h1 className="text-2xl">RECUPY</h1>
      <ul>
        {data?.recipes && data.recipes.length > 0
          ? data?.recipes.map((recipeItem) => (
              <div>
                <img src={recipeItem.image} alt="" />
                <label>{recipeItem.name}</label>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
};
export default Recipes;
