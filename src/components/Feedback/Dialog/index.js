import React from "react";
import "./styles.css";
export default function Dialog(props) {
  const [isOpenDialog, setOpenDialog] = React.useState(false);
  const renderDialog = () => {
    return (
      <>
        <div
          style={{
            position: "absolute",
            top: 0,
            zIndex: 9,
            opacity: 0.4,
            backgroundColor: "#333",
          }}
          className="w-100 h-100 "
        ></div>
        <div
          style={{
            zIndex: 9,
            position: "absolute",
            top: "calc(50% - 110px)",
            left: "calc(50% - 300px)",
            width: "600px ",
            height: "220px",
          }}
          className="modal-c"
          tabindex="-1"
          role="dialog"
        >
          <div className="modal-content h-100">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                onClick={() => setOpenDialog(false)}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
              <button
                onClick={() => setOpenDialog(false)}
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  const renderButton = () => {
    return (
      <button
        onClick={() => setOpenDialog(true)}
        type="button"
        className="btn btn-outline-dark"
      >
        Open dialog
      </button>
    );
  };
  return (
    <div
      className="w-100 "
      style={{
        position: "relative",
        height: "100vh",
      }}
    >
      {renderButton()}
      {isOpenDialog && renderDialog()}
    </div>
  );
}
