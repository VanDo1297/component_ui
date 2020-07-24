import React, { useState, useEffect } from "react";
import "./slider.css";
export const photos = [
  {
    id: 1,
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3MW95Om1Bq2XdApdizYgIG0GM6H5gaT8aiw&usqp=CAU",
  },
  {
    id: 2,
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTI2zIVWGQ16fwoAEOOuUrBZbMHJffklHMXTQ&usqp=CAU",
  },
  {
    id: 4,
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwiAxrDo28FnaRC-WdH8x93uXrjbJBOSFAkw&usqp=CAU",
  },
  {
    id: 3,
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTW1VAHyL0Ha7JFWBsIC3DP-BgFQZJZhtpq9Q&usqp=CAU",
  },
];
export default function HomeContainer() {
  useEffect(() => {
    setTimeout(() => {
      if (imgIndex + 1 >= photos.length) {
        setImgIndex(0);
      } else {
        setImgIndex(imgIndex + 1);
      }
    }, 3000);
  });

  const [imgIndex, setImgIndex] = useState(0);

  const onKeyDown = (e) => {
    switch (e.keyCode) {
      case 37:
      case 38:
        if (imgIndex > 0) {
          setImgIndex(imgIndex - 1);
        }
        return;
      case 39:
      case 40:
        if (imgIndex < photos.length - 1) {
          setImgIndex(imgIndex + 1);
        }
        return;
      default:
        return;
    }
  };

  const renderListPhoto = (index) => {
    return (
      <div>
        {index > 0 && (
          <button
            onClick={() => {
              setImgIndex(imgIndex - 1);
            }}
            className="button-pre"
          >
            <i className="fa fa-arrow-left mr-1" aria-hidden="true"></i>
            <span className="span-btn">Prev</span>
          </button>
        )}
        <img className="image" src={photos[imgIndex].src} alt="" />
        {index < photos.length - 1 && (
          <button
            onClick={() => {
              setImgIndex(imgIndex + 1);
            }}
            className="button-next"
          >
            <span className="span-btn">Next</span>
            <i className="fa fa-arrow-right ml-1" aria-hidden="true"></i>
          </button>
        )}
      </div>
    );
  };

  const renderDots = () => {
    return photos.map((i, index) => {
      return (
        <div
          className={`${
            index === imgIndex ? "dot-active" : "dot"
          } m-1 text-white`}
        />
      );
    });
  };

  return (
    <div className="photo-container" onKeyDown={onKeyDown} tabIndex="0">
      <div className="photo d-flex justify-content-center align-items-center">
        {renderListPhoto(imgIndex)}
        <div className="dots d-flex flex-row align-items-center">
          {renderDots()}
        </div>
      </div>
    </div>
  );
}
