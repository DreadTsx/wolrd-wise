import styles from "./PricingPage.module.css";
import PageNav from "../../components/PageNav/PageNav.jsx";

function PricingPage() {
  return (
    <main className={styles.pricing}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img src="/img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}

export default PricingPage;
