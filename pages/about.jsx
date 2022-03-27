import Image from "next/image";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rightScreen}>
        <Image
          className={styles.picture}
          src="/karin.jpg"
          width={"auto"}
          height={280}
          alt="Code Avatar"
        />
      </div>
      <div className={styles.leftScreen}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.about}>
          Hello, I’m Karin Bhandari, a Full Stack Web Developer based in
          Kathmandu, Nepal experienced in MERN stack.
        </p>
        <ul className={styles.skillList}>
          <li>
            <span>HTML / CSS / Sass / Scss</span>
          </li>
          <li>
            <span>Javascript / Typescript / ES6</span>
          </li>
          <li>
            <span>ReactJs</span>
          </li>
          <li>
            <span>ReactNative</span>
          </li>
          <li>
            <span>NextJs</span>
          </li>
          <li>
            <span>NodeJs</span>
          </li>
          <li>
            <span>ExpressJs</span>
          </li>
          <li>
            <span>NestJs</span>
          </li>
          <li>
            <span>Postgres</span>
          </li>
          <li>
            <span>MongoDB</span>
          </li>
        </ul>
        <a
          className={styles.resumeButton}
          href="https://drive.google.com/drive/folders/1YezgMv9oK1MTnaF6nY3fgJgtDTiC3bVU?usp=sharing"
          target="_blank"
        >
          <FontAwesomeIcon icon={faDownload} /> Download Resume
        </a>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
