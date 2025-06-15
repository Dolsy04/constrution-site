import styles from "../ServicesSection/Services.module.css";

function ServiceCard({ title, Icon }) {
  return (
    <div className={styles.servicesCardItem}>
      <Icon size={30} className={styles.ServiceCardIcon} />
      <h3>{title}</h3>
    </div>
  );
}

export default ServiceCard;
