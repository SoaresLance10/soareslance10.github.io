import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "motion/react";
import ContactSvg from "./contactSvg";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();
  const ref = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          setError(true);
          setSuccess(false);
          console.log(error);
        },
      );
  };

  const isInView = useInView(form, { margin: "-200px" });

  return (
    <div className="contact" ref={ref} onSubmit={sendEmail}>
      <div className="cSection">
        <motion.form variants={listVariant} animate={isInView ? "animate" : "initial"} ref={form}>
          <motion.h1 variants={listVariant} className="cTitle">
            <span>Lets</span>
            <br />
            Keep in touch
          </motion.h1>
          <motion.div variants={listVariant} className="formItem">
            <label htmlFor="from_name">Name</label>
            <input type="text" placeholder="John Doe" id="from_name" name="from_name" />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label htmlFor="from_email">Email ID</label>
            <input
              type="email"
              placeholder="example@domain.com"
              id="from_email"
              name="from_email"
            />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label htmlFor="message">Message</label>
            <textarea rows={10} placeholder="Write your Message..." id="message" name="message" />
          </motion.div>
          <motion.button variants={listVariant} className="formButton">
            Send
          </motion.button>
          {success && <span className="emailMsg">Your message has been sent Successfully!</span>}
          {error && <span className="emailMsg">Something went Wrong!</span>}
        </motion.form>
      </div>
      <div className="cSection">
        <ContactSvg />
      </div>
    </div>
  );
};

export default Contact;
