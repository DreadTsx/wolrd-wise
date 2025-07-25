import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
import CountryItem from "../CountryItem/CountryItem";
import styles from "./CountryList.module.css";
import { useCities } from "../../context/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();
  //
  if (isLoading) return <Spinner />;
  //
  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking on a city on a map" />
    );
  }

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, countryCode: city.countryCode }];
    } else {
      return arr;
    }
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
