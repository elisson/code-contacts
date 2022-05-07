/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useFormik } from "formik";
import InputMask from 'react-input-mask';
import styles from "./ContactFormComponent.module.scss";

interface IContactFormComponentProps {
  email: string;
  name: string;
  phone: string;
}

export default function ContactFormComponent(
  props: IContactFormComponentProps
) {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
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
      } else if (!/([a-z]{1,}\s[a-z]{1,}){1}/gi.test(name)) {
        errors.name = "Invalid phone, phone should be in brazilian format";
      }

      return errors;
    },
    onSubmit: (values: IContactFormComponentProps) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(
    function () {
      if (Object(props).id) {
        /* fill a user by his unique ID */
        Object.keys(props).map((prop) =>
          formik.setFieldValue(
            prop,
            props[prop as keyof IContactFormComponentProps]
          )
        );
      }
    },
    [props]
  );

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div>
        <label htmlFor="name">Best phone number</label>

        <InputMask
          mask="99/99/9999"
          onChange={formik.handleChange}
          value={formik.values.phone}
        >
          {/* {(inputProps: any) => ( */}
            <input id="phone" name="phone" type="phone" />
          {/* )} */}
        </InputMask>
      </div>
      <div>
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
