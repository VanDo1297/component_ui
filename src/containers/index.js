import React from "react";
import Box from "../components/Layouts/Box";
import Container from "../components/Layouts/Container";
import "./index.css";
export default function App() {
  const renderChilderContaienr = () => {
    return <p>children container</p>;
  };
  return (
    <div className="m-2">
      <div>
        <h1 className="font-weight-bold">{`>> Layout <<`}</h1>
        <Box
          className="w-100 h-100 box-className"
          children={<div>component-box</div>}
        />
        <Container
          children={renderChilderContaienr()}
          className="bg-info"
          backgroundColor="red"
          fullWidth={true}
          width="50%"
        ></Container>
      </div>
    </div>
  );
}
