import Image from "next/image";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/HomePage.module.css";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h4 className={styles.welcome}>Hello, I'm</h4>
        <h1 className={styles.title}>Karin Bhandari</h1>
        <h3 className={styles.subtitle}>Full Stack Developer (MERN)</h3>
        <ul className={styles.contacts}>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:7.21karinbhandari@gmail.com">
              7.21karinbhandari@gmail.com
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarker} />
            <a target="blank" href="https://goo.gl/maps/ARYh5VSds94VZx7K9">
              Kathmandu, Nepal
            </a>{" "}
          </li>
          <li>
            <FontAwesomeIcon icon={faPhoneAlt} />
            <a href="tel:+9779867259730">+977 9867259730</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faGithubAlt} />
            <a target="_blank" href="https://github.com/Karin-Bhandari">
              Github
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} />
            <a
              target="_blank"
              href="https://www.linkedin.com/in/karin-b-68154a1a2/"
            >
              Linkedin
            </a>
          </li>
          {/* <li>
            <FontAwesomeIcon icon={faTwitter} />
            <a href="https://www.linkedin.com/in/karin-b-68154a1a2/">Twitter</a>
          </li> */}
        </ul>
      </div>
      <div className={styles.right}>
        <div className={styles.picture_boader}>
          <Image
            className={styles.picture}
            src="/karin.jpg"
            width={300}
            height={290}
            alt="Karin's picture"
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
