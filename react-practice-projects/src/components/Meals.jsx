import axios from "axios";
import "../style.css";
import getFlagUrl from "./getFlagUrl";
import Meals2 from "./Meals2";
import { useEffect, useState } from "react";

const Meals = () => {
  const [mealCategory, setMealCategory] = useState([]);
  const [displayCountries, setDisplayCountries] = useState(true);
  const [displayMeals, setDisplayMeals] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // Fetch meals category country list
    const fetchMealsCategory = async () => {
      try {
        setIsLoading(true);
        let res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
        );
        setMealCategory(res.data.meals);
      } catch (error) {
        console.log(`Error during fetch: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMealsCategory();
  }, []);

  // Function to hide main page and display specific country meal
  const hideCards = (country) => {
    setSelectedCountry(country);
    setDisplayCountries(false);
    setDisplayMeals(true);
  };
  return (
    <div>
      {displayCountries && (
        <section>
          <h1>Please choose meal category:</h1>
          {isLoading ? (
            <h2>Loading countries..</h2>
          ) : (
            <ul className="list">
              {mealCategory.map(({ strArea }) => (
                <div
                  key={strArea}
                  className="meal-item"
                  onClick={() => hideCards(strArea)}
                >
                  <img
                    src={getFlagUrl(strArea)}
                    alt={`Flag of ${strArea}`}
                    loading="lazy"
                  />
                  <li>{strArea}</li>
                </div>
              ))}
            </ul>
          )}
        </section>
      )}

      {displayMeals && (
        <Meals2
          country={selectedCountry}
          setDisplayMeals={setDisplayMeals}
          setDisplayCountries={setDisplayCountries}
        />
      )}
    </div>
  );
};

export default Meals;
