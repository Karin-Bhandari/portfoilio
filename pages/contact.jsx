import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/ContactPage.module.css";

const EMAIL_REGEX =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const ErrorMessage = (props) => {
  const { validationStatus } = props;

  if (!validationStatus.isValidated) {
    return (
      <div>
        <h3>{validationStatus.message}</h3>
      </div>
    );
  }
  return <React.Fragment />;
};

const ContactPage = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [validationStatus, setValidationStatus] = useState({
    isValidated: true,
    message: "",
  });

  const _setFormValuesHandler = (e, type) => {
    const value = e.target.value;
    _validateFormValues(value, type);
    if (type === "firstname") {
      return setFormValues((prevState) => ({
        ...prevState,
        firstName: value,
      }));
    } else if (type === "lastname") {
      return setFormValues((prevState) => ({
        ...prevState,
        lastName: value,
      }));
    } else if (type === "email") {
      return setFormValues((prevState) => ({
        ...prevState,
        email: value,
      }));
    }
    return setFormValues((prevState) => ({
      ...prevState,
      message: value,
    }));
  };

  const _validateText = (value) => {
    if (!value?.length) {
      return setValidationStatus({
        isValidated: false,
        message: "Firstname cannot be empty!",
      });
    }
    setValidationStatus({
      isValidated: true,
      message: "",
    });
  };

  const _validateEmail = (value) => {
    const condition = value.match(EMAIL_REGEX);
    if (!condition) {
      return setValidationStatus({
        isValidated: false,
        message: "Email is invalid!",
      });
    }
    setValidationStatus({
      isValidated: true,
      message: "",
    });
  };

  const _validateFormValues = (value, type) => {
    if (!value?.length) {
      return setValidationStatus({
        isValidated: false,
        message: "Firstname cannot be empty!",
      });
    }
    setValidationStatus({
      isValidated: true,
      message: "",
    });
  };

  const submitValue = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!validationStatus.isValidated) {
    }
  }, [validationStatus]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftScreen}>
          <div className={styles.card}>
            <FontAwesomeIcon icon={faMapMarker} className={styles.cardIcon} />
            <div className={styles.cardBody}>
              <h2>Address</h2>
              <address>Kathmandu, Nepal</address>
            </div>
          </div>
          <div className={styles.card}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.cardIcon} />
            <div className={styles.cardBody}>
              <h2>Email</h2>
              <p>
                <a href="mailto:abdulrasheedibrahim47@gmail.com">
                  7.21karinbhandari@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <FontAwesomeIcon icon={faPhoneAlt} className={styles.cardIcon} />
            <div className={styles.cardBody}>
              <h2>Address</h2>
              <p>
                <a href="tel:+9779867259730">+977 9867259730</a>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.rightScreen}>
          <ErrorMessage validationStatus={validationStatus} />
          <div>
            <input
              required
              type="text"
              name="first_name"
              placeholder="First name"
              onChange={(e) => _setFormValuesHandler(e, "firstname")}
              onBlur={(e) => _validateText(e.target.value)}
            />
          </div>
          <div>
            <input
              required
              type="text"
              name="last_name"
              placeholder="Last name"
              onChange={(e) => _setFormValuesHandler(e, "lastname")}
              onBlur={(e) => _validateText(e.target.value)}
            />
          </div>
          <div>
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => _setFormValuesHandler(e, "email")}
              onBlur={(e) => _validateEmail(e.target.value)}
            />
          </div>
          <div>
            <textarea
              required
              placeholder="Your message"
              onChange={(e) => _setFormValuesHandler(e, "message")}
            ></textarea>
          </div>
          <button onClick={submitValue} className={styles.button}>
            Send Message
          </button>
        </div>
      </div>
      <div className={styles.underConstruction}>
        <div className={styles.card}>
          <div className={styles.cardBody}>
            <h2 className={styles.cardBodyPTag}>
              This website is under development...
            </h2>
            <p>
              Articles / Github / Projects pages will be available on next
              updates.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Contact" },
  };
}

export default ContactPage;
