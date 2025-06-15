import styles from "../AboutSection/About.module.css";
import ProjectSection from "../ProjectsSection/Project-Section";
import projectstyles from "../ProjectsSection/Project-Section.module.css";
import image1 from "../../assets/constructor.jpg";
import image2 from "../../assets/project1.jpg";
import image3 from "../../assets/works-image.jpg";
import image4 from "../../assets/constructor.jpg";

function About() {
  return (
    <>
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImage}>
            <div className={styles.imageContainer}>
              <div className={styles.upperImage}>
                <div>
                  <img src={image1} alt="about image" />
                </div>
                <div>
                  <img src={image2} alt="about image" />
                </div>
              </div>
              <div className={styles.lowerImage}>
                <div>
                  <img src={image3} alt="about image" />
                </div>
                <div>
                  <img src={image4} alt="about image" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aboutTextContainer}>
            <div className={styles.aboutTitle}>
              <span></span>
              <h3>About Us</h3>
            </div>
            <div className={styles.aboutText}>
              <div className={styles.aboutHeader}>
                <h2>Crafting Excellence</h2>
                <h2>in Every project</h2>
              </div>
              <p className={styles.aboutNote}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                doloribus voluptas eligendi placeat architecto assumenda,
                repellendus quia atque! Dolore vero possimus eos, magni
                necessitatibus iure!
              </p>
              <div className={projectstyles.projectCard}>
                <ProjectSection title="Total Worker's" total={200} />
                <ProjectSection title="Projected Completed" total={130} />
                <ProjectSection title="Years of Experience" total={30} />
                <ProjectSection title="Happy Customers" total={130} />
              </div>
              <button>Reach Out to Us</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
