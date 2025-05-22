import { Link, useNavigate, useRoutes } from "react-router-dom";
import Recipes from "./pages/recipes/Recipes";
import Comments from "./pages/comments/Comments";
import RecipeDetails from "./pages/recipe-details/RecipeDetails";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import Layout from "./components/layout/Layout";

function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        { path: "recipes", element: <Recipes /> },
        { path: "comments", element: <Comments /> },
        { path: "recipes/:id", element: <RecipeDetails /> },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);
  return element;
}

const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-2xl mb-2">Main page</h1>
      <div>
        <Link to={"/"}>Navigate to main page</Link>
        <Link to={"/home/recipes"}>Navigate to recipe page</Link>
        <Link to={"/home/comments"}>Navigate to comments page</Link>
      </div>
      <button
        className="border border-black px-4 py-2 bg-black text-white mr-4 cursor-pointer"
        onClick={() => navigate("/home/recipes")}
      >
        Navigate to Recipe
      </button>
      <button
        className="border border-black px-4 py-2 bg-black text-white cursor-pointer"
        onClick={() => navigate("/home/comments")}
      >
        Navigate to Comments
      </button>

      {/* <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="recipes" element={<Recipes />} />
          <Route path="comments" element={<Comments />} />
          <Route path="recipes/:id" element={<RecipeDetails />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}

      <CustomRoutes />
    </div>
  );
};
export default App;
