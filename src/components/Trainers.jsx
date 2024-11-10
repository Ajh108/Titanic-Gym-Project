import React, { Component } from "react";
import Slider from "react-slick";
import person from "../photos/person.png"
import "./Trainers.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Trainers() {
  const trainerData = [
    { name: "Alex Johnson", description: "Alex is known for his energetic personality and motivational style. He uses positive reinforcement to push clients beyond their limits, creating a supportive yet challenging environment. His sessions are a mix of high-intensity interval training and strength exercises, designed to boost both fitness and confidence.", image: person },
    { name: "Jamie Smith", description: "Jamie is a seasoned professional with extensive knowledge in exercise science and nutrition. With a calm and methodical approach, Jamie tailors programs to each client's needs, focusing on proper form and technique to prevent injuries and maximize results. Clients appreciate Jamie's depth of knowledge and personalized attention.", image: person },
    { name: "Taylor Brown", description: "Taylor brings a background in competitive sports to the gym, incorporating athletic training techniques into workouts. Known for high-intensity drills and functional fitness routines, Taylor helps clients improve their overall athletic performance. Taylor's sessions are dynamic and fast-paced, ideal for those looking to enhance their agility, strength, and endurance.", image: person },
    { name: "Casey Lee", description: "Casey emphasizes a holistic approach to fitness, integrating elements of yoga, mindfulness, and balanced nutrition into training sessions. With a gentle and encouraging demeanor, Casey focuses on building a strong mind-body connection, making workouts not just about physical exertion but also mental well-being. Clients leave feeling rejuvenated and centered.", image: person },
  ];

  var settings = {
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "ease",
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div id="trainers">
    <div className="spacing"></div>
    <div className="slider-container">
      <h1>Titanic Trainers</h1>
      <Slider {...settings}>
      {trainerData.map((trainer, index) => (
        <div className="slider">
        <section key={index} className="trainers-grid">
            <div className="container-tr">
                <div className="trainer-containers">
                    <div className="trainer-wrapper">
                        <img src={trainer.image} alt="trainer"/>
                        <p className="title">{trainer.name}</p>
                        <p className="text">{trainer.description}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
      ))}
    </Slider>
    </div>
    </div>
  );
}

export default Trainers;
