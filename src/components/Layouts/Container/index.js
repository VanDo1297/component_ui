import React from "react";
import "./container.css";
export default function Box(props) {
  const {
    width,
    height,
    backgroundColor,
    className,
    children,
    fullWidth,
  } = props;

  const styles = {
    width: fullWidth ? "100%" : width ? width : "100%",
    height: height || "100%",
    backgroundColor: backgroundColor,
  };
  const classNameWrapper = className || "container-css-default";

  return (
    <div className="w-100 h-100">
      <h1>Container</h1>
      <p>
        The container centers your content horizontally. It's the most basic
        layout element.
      </p>
      <h1>API</h1>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Default</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">children</th>
            <td>node</td>
            <td>{`<div />`}</td>
            <td>the component you want render</td>
          </tr>
          <tr>
            <th scope="row">fullWidth</th>
            <td>boolean</td>
            <td>{`false`}</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">height</th>
            <td>string</td>
            <td>100%</td>
            <td>height of wrapper</td>
          </tr>
          <tr>
            <th scope="row">width</th>
            <td>string</td>
            <td>100%</td>
            <td>width of wrapper</td>
          </tr>

          <tr>
            <th scope="row">backgroundColor</th>
            <td>string</td>
            <td>100%</td>
            <td>backgroundColor of wrapper</td>
          </tr>
          <tr>
            <th scope="row"> className</th>
            <td>string</td>
            <td>container-css-default</td>
            <td>css class name of wrapper</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-5">Result : </h3>
      <div
        ref={(el) => {
          if (el) {
            el.style.setProperty(
              "background-color",
              styles.backgroundColor,
              "important"
            );
            el.style.setProperty("width", styles.width, "important");
            el.style.setProperty("height", styles.height, "important");
          }
        }}
        className={classNameWrapper}
        style={styles}
      >
        {children}
      </div>
    </div>
  );
}
