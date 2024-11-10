import { useEffect, useState } from "react";
import "./Header.css";
import { Button } from "react-bootstrap";

function Header() {
  const [opacity, setOpacity] = useState(1);
  const [title, setTitle] = useState(0);
  const [type, setType] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpacity(0.75);
      setType("secondary");
      setTitle(1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="header"
      style={{ opacity: opacity, transition: "opacity 5s" }}
    >
      <div id="container">
        <h1 id="title" style={{ opacity: title, transition: "ease-in 2s" }}>
          TITANIC GYM
        </h1>
        <Button style={{ opacity: title, border: "none", background: "orange", transition: "ease-in 2s" }}>
        <a href="#nav">
          <span class="material-symbols-outlined" style={{ color: "tomato", opacity: title, transition: "ease-in 2s" }}>arrow_circle_down</span>
        </a>
        </Button>
      </div>
    </div>
  );
}

export default Header;
