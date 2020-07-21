import React from "react";
import "./checkbox.css";
import "./checkboxCustom.css";

class SingleCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck: "",
      mockdata: ["yellow", "red"],
    };
  }
  render() {
    var { isCheck, mockdata } = this.state;
    return (
      <div class="container">
        <h5>Single Check box</h5>
        <form style={{ width: "100%" }} action="#">
          {mockdata.map((item) => (
            <p
              onClick={() =>
                this.setState({
                  isCheck: isCheck === item ? "" : item,
                })
              }
            >
              <input type="checkbox" checked={isCheck === item} />
              <label style={{ color: isCheck === item ? "#007bff" : "" }}>
                {item}
              </label>
            </p>
          ))}
        </form>
      </div>
    );
  }
}

class DefaultCheckbox extends React.Component {
  render() {
    return (
      <div class="container">
        <h5>Default Check box</h5>
        <form style={{ width: "100%" }} action="#">
          <p>
            <input type="checkbox" id="test1" />
            <label for="test1">Red</label>
          </p>
          <p>
            <input type="checkbox" id="test2" />
            <label for="test2">Yellow</label>
          </p>
        </form>
      </div>
    );
  }
}

class CustomStyleCheckbox extends React.Component {
  render() {
    return (
      <div className="container">
        <h5>Custom Check box</h5>
        <form style={{ width: "100%" }} action="#">
          <label class="container-custom">
            <input type="checkbox" />
            <span class="checkmark color"></span>
            <p className="custom-color">Custom color checkbox</p>
          </label>
          <label class="container-custom">
            <input type="checkbox" />
            <span class="checkmark bg"></span>
            <p className="custom-bg">Custom color background checkbox</p>
          </label>
        </form>
      </div>
    );
  }
}

export default function Checkbox(props) {
  return (
    <div class="container">
      <h1>Check box</h1>
      <DefaultCheckbox {...props} />
      <SingleCheckbox {...props} />
      <CustomStyleCheckbox {...props} />
    </div>
  );
}
