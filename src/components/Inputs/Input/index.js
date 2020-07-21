import React from "react";
import "./inputeffect.css";

export default function InputComponent(props) {
  const renderInputEffect = () => {
    return (
      <>
        <h3 className="mb-5">Input</h3>
        <div class="form">
          <input type="text" name="name" autocomplete="off" required />
          <label for="name" class="label-name-input">
            <span class="content-label-name">Name</span>
          </label>
        </div>
      </>
    );
  };
  const renderInputWithIcon = () => {};
  return (
    <div>
      {renderInputEffect()}
      {renderInputWithIcon()}
    </div>
  );
}
