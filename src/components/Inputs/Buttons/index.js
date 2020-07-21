import React from "react";
import "./button.css";
import "./buttondark.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function ButtonComponent(props) {
  const renderNeumorphismButtonLight = () => {
    return (
      <section class="session-nermorphism-button-light">
        <ul>
          <li>
            <label>
              <input type="checkbox" name="" />
              <div class="icon-box">
                <FontAwesomeIcon icon={faCoffee} />
              </div>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="" />
              <div class="icon-box">
                <FontAwesomeIcon icon={faCoffee} />
              </div>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="" />
              <div class="icon-box">
                <FontAwesomeIcon icon={faCoffee} />
              </div>
            </label>
          </li>
        </ul>
      </section>
    );
  };

  const renderNeumorphismButtonDark = () => {
    return (
      <section class="session-nermorphism-button">
        <ul>
          <li>
            <label>
              <input type="checkbox" name="" />
              <div class="icon-box">
                <FontAwesomeIcon icon={faCoffee} />
              </div>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="" />
              <div class="icon-box">
                <FontAwesomeIcon icon={faCoffee} />
              </div>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="" />
              <div class="icon-box">
                <FontAwesomeIcon icon={faCoffee} />
              </div>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="" />
              <div class="icon-box">
                <FontAwesomeIcon icon={faCoffee} />
              </div>
            </label>
          </li>
        </ul>
      </section>
    );
  };

  return (
    <div>
      <h3>Button</h3>
      <div className="p-5">
        <p style={{ fontSize: "20px" }}>Neumorphism Button Light</p>
        {renderNeumorphismButtonLight()}
      </div>
      <div className="p-5">
        <p style={{ fontSize: "20px" }}>Neumorphism Button Dark</p>
        {renderNeumorphismButtonDark()}
      </div>
    </div>
  );
}
