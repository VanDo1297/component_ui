import React, { useState } from "react";
import "./inputeffect.css";
import "./inputicon.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { debounce } from "../../../helpers/debounce";
export default function InputComponent(props) {
  const [searchText, setSearchText] = useState("");

  const handleChangeText = (e) => {
    const value = e.target.value;
    setSearchText(value);

    debounce(callAPISearch, 1000, value);
  };

  const handleSearch = () => {
    console.log(searchText);
    // TODO: using searchText call API. example API: https://abc.com?searcch=${searchText}
  };

  const callAPISearch = (value) => {
    console.log("a", value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      console.log(searchText);
      // TODO: using searchText call API. example API: https://abc.com?searcch=${searchText}
    }
  };
  const renderInputEffect = () => {
    return (
      <>
        <h3 className="mb-5">Input</h3>
        <div class="form">
          <input type="text" name="name" autocomplete="off" required />
          <label for="name" class="label-name-input">
            <span class="content-label-name">Name</span>
          </label>
        </div>
      </>
    );
  };
  const renderInputWithIcon = () => {
    return (
      <div>
        <h3 className="mb-5 mt-5">Input with icons</h3>
        <div class="input-icon">
          <input
            placeholder="Placeholder"
            type="text"
            name="name"
            autocomplete="off"
            required
          />
          <FontAwesomeIcon className="input-with-icon" icon={faCoffee} />
        </div>
      </div>
    );
  };

  const exampleSearchWithInput = () => {
    return (
      <div onKeyDown={handleKeyDown}>
        <h3 className="mb-5 mt-5">Example Search Input </h3>
        <div class="input-icon">
          <input
            value={searchText}
            placeholder="Search text ..."
            type="text"
            name="name"
            autocomplete="off"
            required
            onChange={handleChangeText}
          />
          <FontAwesomeIcon
            onClick={handleSearch}
            className="input-with-icon"
            icon={faSearch}
          />
        </div>
      </div>
    );
  };
  return (
    <div>
      {renderInputEffect()}
      {renderInputWithIcon()}
      {exampleSearchWithInput()}
    </div>
  );
}
