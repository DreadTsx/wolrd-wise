import styles from "./PageNotFound.module.css";
function PageNotFound() {
  return (
    <div className={styles.pageNotFound}>
      <h1>Sorry...Page not found 😢</h1>
      <button>Go Back</button>
    </div>
  );
}

export default PageNotFound;
