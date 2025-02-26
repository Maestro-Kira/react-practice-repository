import axios from "axios";
import { useEffect, useState } from "react";
import "../style.css";
import getFlagUrl from "./getFlagUrl";

const Meals = () => {
  const [mealCategory, setMealCategory] = useState([]);
  const [displayCountries, setDislayCountries] = useState(true);

  useEffect(() => {
    // Fetch meals category country list
    const fetchMealsCategory = async () => {
      try {
        let res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
        );
        setMealCategory(res.data.meals);
      } catch (error) {
        console.log(`Error during fetch: ${error}`);
      }
    };
    fetchMealsCategory();
  }, []);

  // Function to get flag URL based on area (country)
  const hideCard = () => {
    setDislayCountries(false);
  };
  return (
    <div>
      {displayCountries && (
        <section>
          <h1>Please choose meal category:</h1>
          <ul className="list">
            {mealCategory.map(({ strArea }) => (
              <div key={strArea} className="meal-item" onClick={hideCard}>
                <img src={getFlagUrl(strArea)} alt={`Flag of ${strArea}`} />
                <li>{strArea}</li>
              </div>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Meals;
