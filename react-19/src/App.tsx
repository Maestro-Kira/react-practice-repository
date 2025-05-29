// https://restcountries.com/v3.1/all
//

import { useEffect, useState } from "react";
import CountriesPage from "./components/CountriesPage";
import { Countries } from "./components/CountriesPage";

const App = () => {
  const [countries, setCountries] = useState<Countries[]>([]);
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState<string>("");
  const [filteredCountries, setFilteredCountries] = useState<Countries[]>([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        setLoading(true);
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        setLoading(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(userInput.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [userInput, countries]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {" "}
          <h2 className="text-2xl font-extrabold text-center">
            Countries and Capitals
          </h2>
          <div className="w-full flex justify-center">
            <input
              type="text"
              placeholder="Type Capital"
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
            />
          </div>
          <CountriesPage countryList={filteredCountries} />
        </>
      )}
    </div>
  );
};
export default App;
