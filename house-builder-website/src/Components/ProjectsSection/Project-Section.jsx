import styles from "../ProjectsSection/Project-Section.module.css";

function ProjectSection({ title = "Null", total = "Null" }) {
  return (
    <>
      <section className={styles.cardContainer}>
        <div className={styles.innerCardContainer}>
          <div className={styles.card}>
            <p>{total}+</p>
            <h3>{title}</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectSection;
