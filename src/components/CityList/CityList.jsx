import styles from "./CityList.module.css";
import Spinner from "../Spinner/Spinner";
import Message from "../Message/Message";
import CityItem from "../CityItem/CityItem";
import { useCities } from "../../context/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();
  //
  if (isLoading) return <Spinner />;
  //
  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking on a city on a map" />
    );
    //
  }
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
