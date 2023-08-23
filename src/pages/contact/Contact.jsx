import React from "react";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Prevents the default form submission behavior
  // };
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be shy !</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects,creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail Me </span>
                <h4 className="info__desc">amishpratapsingh13@gmai.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call Me </span>
                <h4 className="info__desc">+91 6350521225</h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a
              href="https://www.linkedin.com/in/amish-pratap-singh/"
              className="contact__social-link"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Amish-pratap"
              className="contact__social-link"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/amishpratallop/practice"
              className="contact__social-link"
              target="_blank"
            >
              <SiGeeksforgeeks />
            </a>
            <a
              href="https://leetcode.com/amishpratapsingh13/"
              className="contact__social-link"
              target="_blank"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>
        <form
          name="contact"
          className="contact__form"
          // onSubmit={handleSubmit}
          netlify
        >
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>
          <button type="submit" className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
