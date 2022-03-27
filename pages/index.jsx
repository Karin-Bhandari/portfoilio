import Image from "next/image";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/HomePage.module.css";
import {
  faGithubAlt,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
            <a href="mailto:abdulrasheedibrahim47@gmail.com">
              7.21karinbhandari@gmail.com
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarker} />
            <a
              target="blank"
              href="https://www.google.com/maps/place/Yola/@9.1982456,12.4179893,12z/data=!3m1!4b1!4m5!3m4!1s0x10fc6b61b99ecf89:0xec813b40178416c7!8m2!3d9.2034963!4d12.4953899"
            >
              Kathmandu, Nepal
            </a>{" "}
          </li>
          <li>
            <FontAwesomeIcon icon={faPhoneAlt} />
            <a href="tel:+2347033389645">+977 9867259730</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faGithubAlt} />
            <a href="https://github.com/Abdoulrasheed">Github</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} />
            <a href="https://www.linkedin.com/in/abdulrasheed-ibrahim-2b3a90103/">
              Linkedin
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} />
            <a href="https://twitter.com/Aiibrahim3">Twitter</a>
          </li>
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
