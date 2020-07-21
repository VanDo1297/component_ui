import React from "react";
import "./box.css";
export default function Box(props) {
  const { className, children } = props;
  const element = children || <div />;
  const styles = {
    className: className || "w-100 h-100",
    wrapper: "box-component",
  };
  return (
    <div className={styles.wrapper}>
      <h1>Box</h1>
      <p>
        The Box component serves as a wrapper component for most of the CSS
        utility needs.
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
            <th scope="row">className</th>
            <td>className</td>
            <td>"w-100 h-100"</td>
            <td>the wrapper css</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-5">Result : </h3>
      <div className={styles.className}>{element}</div>
    </div>
  );
}
