/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useFormik } from "formik";
import InputMask from "react-input-mask";
import styles from "./ContactFormComponent.module.scss";
import { save } from "../../services/personService";
import { IPerson } from "../../interfaces/services/person.interface";

interface IContactFormComponentProps {
  email: string;
  name: string;
  phone: string;
  onSave?(): void;
}

export default function ContactFormComponent(
  props: IContactFormComponentProps
) {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
    },
    validate({ email, name, phone }) {
      const errors: { [key: string]: string | null } = {};
      if (!email) {
        errors.email = "Email required.";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = "Invalid email address";
      }
      if (!name) {
        errors.name = "Name required.";
      } else if (!/([a-z]{1,}\s[a-z]{1,}){1}/gi.test(name)) {
        errors.name = "Invalid name, name should be 2 or more words";
      }
      if (!phone) {
        errors.phone = "Phone required.";
      } else if (!/^\([1-9]{2}\)\s9\s[0-9]{4}-[0-9]{4}$/gi.test(phone)) {
        errors.name = "Invalid phone, phone should be in brazilian format";
      }

      return errors;
    },
    onSubmit: (values: IContactFormComponentProps) => {
      save(values as IPerson);
      props.onSave?.();
    },
  });

  useEffect(
    function () {
      Object.keys(props).map((prop) =>
        formik.setFieldValue(
          prop,
          props[prop as keyof IContactFormComponentProps]
        )
      );
    },
    [props]
  );

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <div className={styles.inputContainer}>
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors["name"] && (
          <span className={styles.error}>{formik.errors["name"]}</span>
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors["email"] && (
          <span className={styles.error}>{formik.errors["email"]}</span>
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="name">Best phone number</label>
        <InputMask
          mask="(99) 9 9999-9999"
          onChange={formik.handleChange}
          value={formik.values.phone}
        >
          <input id="phone" name="phone" type="phone" />
        </InputMask>
        {formik.touched.phone && formik.errors["phone"] && (
          <span className={styles.error}>{formik.errors["phone"]}</span>
        )}
      </div>

      <button type="submit">Save</button>
    </form>
  );
}
