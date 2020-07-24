import React from "react";
import "./index.css";
export default function Avatar(props) {
  const renderAvatarRadius = () => {
    return (
      <div
        style={{
          display: "grid",
          columnGap: "10px",
          columnCount: 3,
          gridTemplateRows: "1fr 1fr 1fr",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        <img
          style={{ width: "100%", height: "100px", objectFit: "cover" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3MW95Om1Bq2XdApdizYgIG0GM6H5gaT8aiw&usqp=CAU"
          alt="..."
          class="rounded h-100 w-100"
        />
        <img
          style={{ width: "100%", height: "100px", objectFit: "cover" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3MW95Om1Bq2XdApdizYgIG0GM6H5gaT8aiw&usqp=CAU"
          alt="..."
          class="rounded-top h-100 w-100"
        />
        <img
          style={{ width: "100%", height: "100px", objectFit: "cover" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3MW95Om1Bq2XdApdizYgIG0GM6H5gaT8aiw&usqp=CAU"
          alt="..."
          class="rounded-right h-100 w-100"
        />
        <img
          style={{ width: "100%", height: "100px", objectFit: "cover" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3MW95Om1Bq2XdApdizYgIG0GM6H5gaT8aiw&usqp=CAU"
          alt="..."
          class="rounded-bottom h-100 w-100"
        />
        <img
          style={{ width: "100%", height: "100px", objectFit: "cover" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3MW95Om1Bq2XdApdizYgIG0GM6H5gaT8aiw&usqp=CAU"
          alt="..."
          class="rounded-left h-100 w-100"
        />
        <img
          style={{ width: "100%", height: "100px", objectFit: "cover" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3MW95Om1Bq2XdApdizYgIG0GM6H5gaT8aiw&usqp=CAU"
          alt="..."
          class="rounded-circle h-100 w-100"
        />
        <img
          style={{ width: "100%", height: "100px", objectFit: "cover" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3MW95Om1Bq2XdApdizYgIG0GM6H5gaT8aiw&usqp=CAU"
          alt="..."
          class="rounded-0 h-100 w-100"
        />
      </div>
    );
  };

  const renderProfile = () => {
    return (
      <div class="profile-container">
        <div class="wrapper">
          <a href="/">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3MW95Om1Bq2XdApdizYgIG0GM6H5gaT8aiw&usqp=CAU"
            />
          </a>
          <div class="title">SoldaDo</div>
          <div class="place">Hồ Chí Minh</div>
        </div>
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            eleifend ac augue ut mattis.
          </p>
          <div class="buttons">
            <div class="btn">
              <button>Message</button>
            </div>
            <div class="btn">
              <button>Follow</button>
            </div>
          </div>
        </div>
        <div class="icons">
          <li>
            <a href="/">
              <span class="fab fa-facebook-f"></span>
            </a>
          </li>
          <li>
            <a href="/">
              <span class="fab fa-facebook-f"></span>
            </a>
          </li>
          <li>
            <a href="/">
              <span class="fab fa-facebook-f"></span>
            </a>
          </li>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div>
        <h3>Avatar Radius</h3>
        {renderAvatarRadius()}
      </div>

      <div>
        <h3>Profile</h3>
        {renderProfile()}
      </div>
    </div>
  );
}
