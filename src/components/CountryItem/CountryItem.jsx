import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  //   const { country, emoji } = country;
  return (
    <li className={styles.countryItem}>
      <span>
        <span className={`fi fi-${country.countryCode}`}></span>
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
