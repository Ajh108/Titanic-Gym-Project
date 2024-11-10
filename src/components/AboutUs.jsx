import { Button, Card } from "react-bootstrap";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div id="about-us">
      <div className="content">
        <div className="subtitle">
          <h3>Welcome to Titanic Gym - Unleash Your Potential</h3>
          <p>
            At Titanic Gym, we believe that strength goes beyond physical
            prowess; it embodies resilience, determination, and the relentless
            pursuit of personal excellence. Titanic Gym is your premier
            destination for transformative fitness experiences.
          </p>
        </div>
        <div className="content-title">
          <h1>Titanic Gym</h1>
        </div>
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            Our mission is to empower every individual to achieve their personal
            fitness goals, regardless of their starting point. Whether you're a
            seasoned athlete or taking your first step into the world of
            fitness, Titanic Gym provides a supportive environment where
            everyone can thrive. 
          </p>
        </div>
      </div>
      <div className="content-list">
        <div className="list">
          <ol>
            <Card>
              <Card.Header>State-of-the-Art Facilities:</Card.Header>
              <Card.Body>
                Equipped with the latest in fitness technology and a diverse
                range of training equipment, our facilities cater to all aspects
                of fitness, from strength training to cardio and functional
                workouts.
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Expert Trainers:</Card.Header>
              <Card.Body>
                Our team of certified and passionate trainers are here to guide,
                motivate, and customize your fitness plan to ensure you meet
                your goals. With their expertise, you can navigate through any
                fitness challenge and unlock your potential.
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Variety of Classes:</Card.Header>
              <Card.Body>
                From high-intensity interval training (HIIT) to yoga, pilates,
                and martial arts, our diverse class offerings ensure there's
                something for everyone. Our classes are designed to be
                inclusive, catering to all fitness levels.
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Community Focused:</Card.Header>
              <Card.Body>
                At Titan Gym, you're not just a member; you're part of a family.
                We pride ourselves on creating a welcoming atmosphere where you
                can connect with like-minded individuals, celebrate successes,
                and build lasting friendships.
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Holistic Approach:</Card.Header>
              <Card.Body>
                Beyond physical training, we emphasize overall wellness. Our
                nutrition experts, wellness coaches, and recovery services are
                here to support your journey to a healthier lifestyle.
              </Card.Body>
            </Card>
          </ol>
        </div>
        <div className="join-us">
          <a href="">
            <ul>
              <li className="button"><a href="#subscription">Join us today</a></li>
              <li className="button"><a href="#contact">I'm still thinking</a></li>
            </ul>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
