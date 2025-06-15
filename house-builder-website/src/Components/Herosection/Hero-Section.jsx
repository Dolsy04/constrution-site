import styles from "../HeroSection/Hero-Section.module.css";
import heroImage from "../../assets/works-image.jpg";

function HeroSection({ onGetStartedClick }) {
  return (
    <section className={styles.heroSectionContainer}>
      <div className={styles.innerHeroSection}>
        <div className={styles.heroText}>
          <h2>Welcome to our company</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo iusto
            ducimus, ipsam deserunt recusandae saepe perspiciatis et mollitia
            asperiores expedita.
          </p>
          <button onClick={onGetStartedClick}>Get Started</button>
        </div>
        <div className={styles.heroSectionImage}>
          <img src={heroImage} alt="construction workers" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
