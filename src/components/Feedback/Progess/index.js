import React from "react";
import "./dots.css";
import "./lines.css";
export default function ProgessComponent(props) {
  const renderDots = () => {
    return (
      <>
        <h3>Dots</h3>
        <div class="lds-default mt-5">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </>
    );
  };
  const renderLines = () => {
    return (
      <>
        <h3>Lines</h3>
        <div class="lds-spinner-line">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </>
    );
  };
  return (
    <div>
      <p>
        Copy all loading in{" "}
        <a href="https://loading.io/css/" target="_blank">
          here
        </a>
      </p>
      {renderDots()}
      {renderLines()}
    </div>
  );
}
