import axios from "axios";
import { useEffect, useState } from "react";

const Meals2 = ({ country, setDisplayMeals, setDisplayCountries }) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!country) return;
    async function fetchMeals() {
      try {
        setIsLoading(true);
        let res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
        );
        setMeals(res.data.meals);
      } catch (error) {
        console.log(`Error during fetching of meals: ${error}`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMeals();
  }, [country]);

  const handleButton = () => {
    setDisplayCountries(true);
    setDisplayMeals(false);
  };

  return (
    <div>
      {
        <section className="menu">
          <button onClick={handleButton} id="top">
            Back to Main
          </button>
          <h1>{country} Meals:</h1>
          {isLoading ? (
            <h2>Loading meals..</h2>
          ) : (
            <ul className="all-cards">
              {meals.map(({ idMeal, strMeal, strMealThumb }) => (
                <li key={idMeal} className="food-card">
                  {strMeal}
                  <img
                    src={strMealThumb}
                    alt={`Photo of ${strMeal}`}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          )}
          {meals.length >= 6 && (
            <a className="btn" href="#top">
              Up
            </a>
          )}
        </section>
      }
    </div>
  );
};

export default Meals2;
