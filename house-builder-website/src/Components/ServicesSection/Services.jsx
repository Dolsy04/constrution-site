import ServiceCard from "../ServicesSection/ServicesCard.jsx";
import styles from "../ServicesSection/Services.module.css";
import { ChevronsRight } from "lucide-react";

function ServicesSection({ services }) {
  return (
    <>
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesTitle}>
            <ChevronsRight className={styles.ChevronsRight} />
            <p>Our Services</p>
          </div>
          <h3 className={styles.serviceNote}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>

          <div className={styles.servicesCardList}>
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                Icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesSection;
