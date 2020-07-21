import React from "react";
import Grid from "../components/Grid";

import Inputs from "../components/Inputs";
import "./index.css";
export default function App() {
  const renderItemGrid = (item) => {
    return (
      <div>
        <img
          style={{ width: "100%", height: "100px", objectFit: "cover" }}
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
      <Grid
        columnGap="20px"
        columnCount={2}
        itemWrapper={(item) => renderItemGrid(item)}
        className=""
        itemClassName=""
        gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
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
      <Inputs />
    </div>
  );
}
