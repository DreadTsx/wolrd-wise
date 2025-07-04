import styles from "./Footer.module.css";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {currentYear} by WorldWise Inc
      </p>
    </footer>
  );
}

export default Footer;
