import { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [nameVisible, setNameVisible] = useState(false);
  const [boxVisible, setBoxVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const nameTimer = setTimeout(() => {
      setNameVisible(true);
    }, 0);

    const boxTimer = setTimeout(() => {
      setBoxVisible(true);
    }, 2200);

    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 2200);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(boxTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div id="about-me" className="centerContainer">
      <div className={`homeContent ${boxVisible ? "visible-box" : ""}`}>
        <h1 className={`typing-name ${nameVisible ? "typing-name-visible" : ""}`}>
          Simon Zhao
        </h1>
        <div
          className={`hidden-content ${contentVisible ? "visible-content" : ""}`}>
          <p>
            I'm a{" "}
            <strong style={{ color: "#84AE84" }}> backend software developer </strong>{" "}
            with a strong interest in working with{" "}
            <strong style={{ color: "#84AE84" }}>backend systems</strong>,{" "}
            <strong style={{ color: "#84AE84" }}>and databases.</strong>
          </p>
          <p>
            Beyond software development, I enjoy configuring Neovim using Lua,
            developing scripts, and exploring command line tools to enhance
            productivity and streamline workflows.
          </p>
          <div className="contactMe">
            <button type="button" className="contactMeButton">
              Contact Me
            </button>
          </div>
        </div>
      </div>
      <svg className="arrows">
        <path className="a1" d="M0 0 L30 32 L60 0"></path>
        <path className="a2" d="M0 20 L30 52 L60 20"></path>
        <path className="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
    </div>
  );
}
