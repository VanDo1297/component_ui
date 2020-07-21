import React from "react";
import Box from "../components/Layouts/Box";
import Container from "../components/Layouts/Container";
import Grid from "../components/Layouts/Grid";
import "./index.css";
export default function App() {
  const renderChilderContaienr = () => {
    return <p>children container</p>;
  };
  const renderItemGrid = (item) => {
    return (
      <div>
        <img
          style={{ width: "100%", height: "100px" }}
          alt=""
          src={
            item.img ||
            "https://znews-photo.zadn.vn/w660/Uploaded/kbd_bcvi/2019_11_23/5d828d976f24eb1a752053b5_thumb.jpg"
          }
        ></img>
        <p>Display grid</p>
        <p>Name: {item.name || "Sodlado"}</p>
      </div>
    );
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
        <Grid
          itemWrapper={(item) => renderItemGrid(item)}
          className=""
          itemClassName=""
          gridTemplateColumns="1fr 1fr 1fr 1fr"
          gridTemplateRows="1fr 1fr 1fr"
          data={[
            {
              name: "Test1",
              img:
                "https://sohanews.sohacdn.com/thumb_w/660/2019/4/16/photo-7-15554046424151085127637-crop-15554051612471476202748.jpg",
            },
            2,
            3,
            4,
            {
              name: "Test5",
              img:
                "https://sohanews.sohacdn.com/thumb_w/660/2019/4/16/photo-7-15554046424151085127637-crop-15554051612471476202748.jpg",
            },
            6,
            7,
            {
              name: "Test8",
              img:
                "https://sohanews.sohacdn.com/thumb_w/660/2019/4/16/photo-7-15554046424151085127637-crop-15554051612471476202748.jpg",
            },
            9,
          ]}
        />
      </div>
    </div>
  );
}
