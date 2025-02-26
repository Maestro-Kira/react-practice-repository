// www.themealdb.com/api/json/v1/1/list.php?a=list  area list

import axios from "axios";
import { useEffect, useState } from "react";
import "../style.css";

const Meals = () => {
  const [mealCategory, setMealCategory] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      try {
        let res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
        );

        setMealCategory(res.data.meals);
      } catch (error) {
        console.log(`Eror duing fetch: ${error}`);
      }
    }

    fetchMeals();
  }, []);
  console.log(mealCategory);

  return (
    <div>
      <section>
        <h1>Please choose meal category:</h1>
        <ul className="list">
          {mealCategory.map(({ strArea }) => (
            <div key={strArea} className="meal-item">
              <img src="https://flagsapi.com/BE/flat/64.png" />
              <li>{strArea}</li>
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Meals;
