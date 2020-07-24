import React, { useState } from "react";
const definePosition = {
  top: "TOP",
  topleft: "TOP-LEFT",
};
const Toast = (props) => {
  const positionToMap = () => {
    switch (props.position) {
      case definePosition.top:
        return { top: 0, left: 0 };
      case definePosition.topleft:
        return { top: 0, left: "50%" };
      default:
        return;
    }
  };
  return (
    <div style={{ position: "relative" }}>
      <div
        className="d-flex"
        style={{ position: "absolute", ...positionToMap() }}
      >
        {props.message || "Toasting !"}
      </div>
    </div>
  );
};
export default function ToastC(props) {
  const [state, setState] = useState({
    isShowDefault: false,
  });

  return (
    <div className="w-100">
      <button
        onClick={() =>
          setState({
            ...state,
            isShowDefault: true,
          })
        }
        type="button"
        className="btn btn-secondary"
        data-dismiss="modal"
      >
        Show toast
      </button>

      {state.isShowDefault && (
        <Toast
          message="Toasting rendering !!!"
          position={definePosition.topleft}
        />
      )}
    </div>
  );
}
