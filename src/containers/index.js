import React, { useState, useEffect } from "react";
import Grid from "../components/Grid";
import Input from "../components/Inputs/Input";
import Button from "../components/Inputs/Buttons";
import CheckBox from "../components/Inputs/Checkbox";
import Radio from "../components/Inputs/Radio";
import "./index.css";

import { menus, children } from "../menu";
import { mockdata } from "../mockdata";

export default function App(props) {
  useEffect(() => {
    if (props.history.location.pathname) {
      setPath(props.history.location.pathname);
    }
  }, [props.history.location.pathname]);

  const [itemActive, setItemActive] = useState(0);
  const [path, setPath] = useState("/");

  const renderMenulist = (menus) => {
    return menus.map((menuItem, index) => {
      return (
        <li
          onClick={() => {
            if (itemActive === menuItem.id) {
              setItemActive(0);
            } else {
              setItemActive(menuItem.id);
            }
            if (children[index].length === 0) {
              props.history.push(menuItem.name);
            }
          }}
        >
          <h5>{menuItem.name}</h5>
          <div
            style={{
              transition: "display 5s ease-out",
              display: menuItem.id === itemActive ? "flex" : "none",
            }}
            className="flex-column"
          >
            {children[index].length > 0 &&
              children[index].map((item) => (
                <a className="text-capitalize" href={item}>
                  {item}
                </a>
              ))}
          </div>
        </li>
      );
    });
  };
  const renderSideEffect = (menus) => {
    return (
      <div>
        <p>Menu List</p>
        <ul>{renderMenulist(menus)}</ul>
      </div>
    );
  };

  const renderContent = () => {
    switch (path) {
      case "/":
        return "";
      case "/button":
        return <Button />;
      case "/textfield":
        return <Input />;
      case "/checkbox":
        return <CheckBox />;
      case "/radio":
        return <Radio />;
      case "/grid":
        return (
          <Grid
            columnGap="20px"
            columnCount={2}
            // itemWrapper={(item) => renderItemGrid(item)}
            className="w-50"
            itemClassName=""
            gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            gridTemplateRows="1fr 1fr 1fr"
            data={mockdata}
          />
        );
      default:
        return "";
    }
  };

  return (
    <div className="m-2 d-flex flex-row">
      <div className="side-effect">{renderSideEffect(menus)}</div>
      <div className="d-flex flex-column w-100">{renderContent()}</div>
    </div>
  );
}
