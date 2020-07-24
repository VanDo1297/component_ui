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

  const renderButtonOutline = () => {
    return (
      <div>
        <button type="button" class="btn btn-outline-primary">
          Primary
        </button>
        <button type="button" class="btn btn-outline-secondary">
          Secondary
        </button>
        <button type="button" class="btn btn-outline-success">
          Success
        </button>
        <button type="button" class="btn btn-outline-danger">
          Danger
        </button>
        <button type="button" class="btn btn-outline-warning">
          Warning
        </button>
        <button type="button" class="btn btn-outline-info">
          Info
        </button>
        <button type="button" class="btn btn-outline-light">
          Light
        </button>
        <button type="button" class="btn btn-outline-dark">
          Dark
        </button>
      </div>
    );
  };

  const renderButtonAnySize = () => {
    return (
      <div>
        <button type="button" class="btn btn-primary btn-lg mr-2">
          Large button
        </button>
        <button type="button" class="btn btn-secondary btn-lg mr-2">
          Large button
        </button>

        <button type="button" class="btn btn-primary btn-sm mr-2">
          Small button
        </button>
        <button type="button" class="btn btn-secondary btn-sm">
          Small button
        </button>
      </div>
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
      <div className="p-5">
        <p style={{ fontSize: "20px" }}>Button outline</p>
        {renderButtonOutline()}
      </div>
      <div className="p-5">
        <p style={{ fontSize: "20px" }}>Button Any Sizes</p>
        {renderButtonAnySize()}
      </div>
    </div>
  );
}
