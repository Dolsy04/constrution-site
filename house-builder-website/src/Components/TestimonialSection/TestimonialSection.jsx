import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TestimonialSection.module.css";

function TestimonialSection() {
  const Testimonials = [
    {
      id: "1",
      name: "Lamidi Tawakalitu",
      role: "Homeowner",
      text: "This construction company built my dream home flawlessly. Highly recommended!",
      image: "/Lamidi.jpg",
    },
    {
      id: 2,
      name: "Nimotallahi Abdulsalam",
      role: "Office Manager",
      text: "They renovated our office quickly and professionally.",
      image: "/nimah.jpg",
    },
    {
      id: 3,
      name: "Dolapo Abdulrahman",
      role: "Architect",
      text: "Excellent planning and coordination. Will work with them again!",
      image: "/myself.jpg",
    },
    {
      id: 4,
      name: "Zarat Hamzat",
      role: "Shopowner",
      text: "Excellent in building and crafting shops with enough space.",
      image: "/zarat.jpg",
    },
    {
      id: 5,
      name: "Hassanah Qosim",
      role: "Businessowner",
      text: "Professionals in crafting companys.",
      image: "/hassanah.jpg",
    },
    {
      id: 6,
      name: "Oluwatosin Jimoh",
      role: "Fashionist",
      text: "Best company with good and strong plans for all asset.",
      image: "/oluwatosin.jpg",
    },
    {
      id: 7,
      name: "Oyinkansola Aisha",
      role: "Estateowner",
      text: "This company built my dream estate flawlessly. Forever the best!",
      image: "/oyinkansola.jpg",
    },
  ];

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
     responsive: [
    {
      breakpoint: 768, // screens below 768px width (e.g. tablets, phones)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  };

  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
      <div className={styles.testimonialContainer}>
        <Slider {...sliderSettings}>
          {Testimonials.map((item) => (
            <div key={item.id}>
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>"{item.text}"</p>
                <div className={styles.testimonialProfile}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.testimonialImage}
                  />
                  <div>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.role}>{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TestimonialSection;
