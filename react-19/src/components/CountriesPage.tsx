import CountryComponent from "./CountryComponent";

export interface Countries {
  capital: string[];
  name: {
    common: string;
  };
  cca2: string;
}

const CountriesPage = ({ countryList }) => {
  return (
    <div className="flex flex-wrap space-x-4 space-y-4 justify-evenly items-center">
      {countryList.map((country) => {
        return (
          <div key={country.cca2}>
            <CountryComponent
              countryName={country?.name?.common}
              countryCapital={country?.capital}
            />
          </div>
        );
      })}
    </div>
  );
};
export default CountriesPage;
