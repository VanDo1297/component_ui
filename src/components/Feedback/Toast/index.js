import React, { useState } from "react";
const definePosition = {
  topleft: "TOP-LEFT",
  topcenter: "TOP-CENTER",
  topright: "TOP-RIGHT",
  left: "LEFT",
  center: "CENTER",
  right: "RIGHT",
  bottomleft: "BOTTOM-LEFT",
  bottomcenter: "BOTTOM-CENTER",
  bottomright: "BOTTOM-RIGHT",
};
const Toast = (props) => {
  const positionToMap = () => {
    switch (props.position) {
      case definePosition.topleft:
        return { top: 0, left: 0 };
      case definePosition.topcenter:
        return {
          top: 0,
          left: `calc(50% - 150px)`,
          justifyContent: "center",
          display: "flex",
        };
      case definePosition.topright:
        return { top: 0, right: 0, justifyContent: "end", display: "flex" };

      case definePosition.left:
        return {
          top: `calc(50% - 100px)`,
          left: 0,
          display: "flex",
          alignItems: "center",
        };
      case definePosition.right:
        return {
          top: `calc(50% - 100px)`,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        };
      case definePosition.center:
        return {
          top: `calc(50% - 100px)`,
          left: `calc(50% - 150px)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        };

      case definePosition.bottomleft:
        return { bottom: 0, left: 0, display: "flex", alignItems: "end" };
      case definePosition.bottomcenter:
        return {
          bottom: 0,
          left: `calc(50% - 150px)`,
          display: "flex",
          alignItems: "end",
          textAlign: "center",
          justifyContent: "center",
        };
      case definePosition.bottomright:
        return {
          bottom: 0,
          right: 0,
          display: "flex",
          alignItems: "end",
          justifyContent: "end",
        };
      default:
        return;
    }
  };
  return (
    <div
      style={{
        ...positionToMap(),
        position: "absolute",
        width: "300px",
        height: "200px",
        border: "1px solid red",
      }}
    >
      {props.message || "Toasting !"}
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
            isShowDefault: !state.isShowDefault,
          })
        }
        type="button"
        className="btn btn-secondary"
        data-dismiss="modal"
      >
        Show toast
      </button>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "600px",
          backgroundColor: "#f1f1f1",
        }}
      >
        {state.isShowDefault && (
          <>
            <Toast
              message="Toasting rendering top left!!!"
              position={definePosition.topleft}
            />
            <Toast
              message="Toasting rendering top center !!!"
              position={definePosition.topcenter}
            />
            <Toast
              message="Toasting rendering top right!!!"
              position={definePosition.topright}
            />
            <Toast
              message="Toasting rendering center left!!!"
              position={definePosition.left}
            />
            <Toast
              message="Toasting rendering center!!!"
              position={definePosition.center}
            />
            <Toast
              message="Toasting rendering center right!!!"
              position={definePosition.right}
            />
            <Toast
              message="Toasting rendering bottom left!!!"
              position={definePosition.bottomleft}
            />
            <Toast
              message="Toasting rendering bottom center!!!"
              position={definePosition.bottomcenter}
            />
            <Toast
              message="Toasting rendering bottom right!!!"
              position={definePosition.bottomright}
            />
          </>
        )}
      </div>
    </div>
  );
}
