import React from "react";
import Profile from "../../assets/amish.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Amish Pratap Singh, </span>Full Stack Web Developer
          </h1>
          <p className="home__description">
            I'm a Full Stack Web Developer based in India, dedicated to creating
            clean and user-friendly experiences. My passion lies in crafting
            industry-leading software that enhances the lives of those around
            me.
          </p>
          <Link to="/about" className="button">
            More About Me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
