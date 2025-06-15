import styles from "../ContactSection/Contact.module.css";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  MessageCircleMore as WhatsApp,
} from "lucide-react";

function ContactSection(){
    return(<>
        <div className={styles.contactContainer}>
            <div className={styles.innerContactContainer}>
                <div className={styles.leftSection}>
                    <h3>Reach out to us</h3>

                    <div className={styles.contactLeftSection}>
                        <ul>
                            <li>Address: <MapPin className={styles.locationLogo} size={20}/> Along Elebu Junction, BL12 Iyana-ipaja Ibadan, Oyo State</li>
                            <li>Email: <a href="mailto:constructionbuilder@gmail.com"><Mail size={20}/> constructionbuilder@gmail.com</a></li>
                            <li>Phone: <a href="tel:08113441673"><Phone size={20}/>08113441673</a></li>
                        </ul>
                        <p>Also, reach out to us on social media</p>
                        <ul className={styles.socialLinks}>
                            <li><a href=""><Facebook/></a></li>
                            <li><a href=""><Instagram/></a></li>
                            <li><a href=""><Twitter/></a></li>
                            <li><a href=""><WhatsApp /></a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <h3>Send us a message</h3>

                    <div>
                        <label htmlFor="">Full Name</label><br />
                        <input type="text" placeholder="John Doe" />
                    </div>
                    <div>
                        <label htmlFor="">Email</label><br />
                        <input type="email" placeholder="your@gamil.com" />
                    </div>
                    <div>
                        <label htmlFor="">Message</label><br />
                        <textarea rows={6} placeholder="Say Something..." id=""></textarea>
                    </div>
                    <button>Send Message</button>
                </div>
            </div>
        </div>
    </>);
}

export default ContactSection;