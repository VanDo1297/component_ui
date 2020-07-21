import React from "react";
import "./box.css";
export default function Box(props) {
  const { children, clone, component } = props;
  const styles = {};
  return (
    <div className="box-component">
      <p>Box</p>
    </div>
  );
}
