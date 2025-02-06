import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { NavLink } from "react-router-dom";
import houseImage from "../assets/house.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const reviews = [
  {
    text: "This is the best house planning tool I've ever used! It saved me so much time and effort. I can't recommend it enough.",
    author: "Chathurika",
  },
  {
    text: "Apexa AI made my home renovation so much easier. The intuitive design and powerful features are just amazing!",
    author: "Vihan",
  },
  {
    text: "Fantastic results and very easy to use! I was able to create my dream home plan in no time.",
    author: "Buddhika Siriwardhane",
  },
  {
    text: "The accuracy and detail in the house plans generated by Apexa AI are incredible. It's like having a professional architect at your fingertips.",
    author: "Robert Agalawatthe",
  },
  {
    text: "I was skeptical at first, but after using Apexa AI, I am thoroughly impressed. It has made the entire house planning process a breeze.",
    author: "Manjitha Bandara",
  },
  {
    text: "Apexa AI is a game-changer in the field of house planning. The user-friendly interface and powerful features make it a must-have tool.",
    author: "Kasun Perera",
  },
  {
    text: "I love how Apexa AI provides a variety of design options and customization features. It truly caters to all my house planning needs.",
    author: "Nuwan Jayasinghe",
  },
  {
    text: "The support team at Apexa AI is outstanding. They were always available to help me with any questions or issues I had.",
    author: "Piyumi Fernando",
  },
  {
    text: "Apexa AI has revolutionized the way I approach house planning. The efficiency and precision of the tool are unmatched.",
    author: "Lahiru Wickramasinghe",
  },
  {
    text: "The 3D visualization feature in Apexa AI is fantastic. It allows me to see exactly how my house will look before construction even begins.",
    author: "Thilini Senanayake",
  },
];

const Home = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        setFade(true);
      }, 1000); 
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <Header />
      <img src={houseImage} alt="House" className="home-image" />
      <div className="home-content">
        <h1>APEXA AI</h1>
        <p>All New Automated House Planning & Visualization System</p>
        <p>Upload your images and start making a house plan!</p>
        <NavLink to="/user-inputs" className="home-button">
          Create A Plan
        </NavLink>
      </div>
      <div className="review-container">
        <div className={`review ${fade ? "show" : ""}`}>
          {reviews[currentReviewIndex].text}
          <div className="review-author">
            - {reviews[currentReviewIndex].author}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
