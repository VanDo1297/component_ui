import React from "react";
import "./index.css";
export default function Radio(props) {
  const largerRadio = () => {
    return (
      <form action="#">
        <h5>Large Radio</h5>
        <div class="switch">
          <input id="switch-1" type="checkbox" class="switch-input" />
          <label for="switch-1" class="large-radio">
            Switch
          </label>
        </div>
      </form>
    );
  };

  const smallRadio = () => {
    return (
      <form action="#" className="mt-5 pt-5">
        <h5>Small Radio</h5>
        <div class="switch">
          <input id="switch-2" type="checkbox" class="switch-input" />
          <label for="switch-2" class="small-radio">
            Switch
          </label>
        </div>
      </form>
    );
  };

  return (
    <>
      <h1>Radio</h1>
      {largerRadio()}
      {smallRadio()}
    </>
  );
}
