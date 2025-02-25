//  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
import axios from "axios";
import { useEffect, useState } from "react";
const Meals = () => {
  const [meals, setMeals] = useState([]);

  const listStyles = {
    color: "blue",
    fontSize: "20px",
    backgroundColor: "lightgray",
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  useEffect(() => {
    async function fetchMeal() {
      try {
        let response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );

        setMeals(response.data.meals);
      } catch (error) {
        console.log(`Fetch data erorr: ${error}`);
      }
    }
    fetchMeal();
  }, []);

  return (
    <div>
      <ul style={listStyles}>
        {meals.map(({ idMeal, strMeal, strMealThumb }) => (
          <li key={idMeal}>
            <h1>Meal number: {idMeal}</h1>
            <img src={strMealThumb} alt={strMeal} />
            <h2>{strMeal}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Meals;
