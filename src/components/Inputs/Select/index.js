import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./single.css";

class SingleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isSelected: "Select ...",
    };
  }
  renderItemSelected = (data) => {
    return data.map((item) => (
      <p
        style={{ margin: "unset" }}
        className="selected-item"
        onClick={() => this.setState({ isSelected: item, isOpen: false })}
      >
        {item}
      </p>
    ));
  };
  render() {
    var { isOpen, isSelected } = this.state;
    return (
      <div className="selected">
        <p>Single Selected</p>
        <div
          onClick={() =>
            this.setState({
              isOpen: !isOpen,
            })
          }
          className="selected-label d-flex flex-row"
        >
          <label className="w-100 mb-0">{isSelected}</label>
          <div className="text-right">
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
        {isOpen && (
          <div className="selected-list">
            {this.renderItemSelected(["Ha Noi", "Ho Chi Minh", "Phu Yen"])}
          </div>
        )}
      </div>
    );
  }
}
class MultipleSelected extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      isOpen: false,
      placeholder: "Multi Select ...",
      result: [],
    };
  }

  handleClick = (e) => {
    if (this.myRef.current.contains(e.target)) {
      return;
    }
    this.setState({
      isOpen: false,
    });
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick);
    return () => {
      document.removeEventListener("mousedown", this.handleClick);
    };
  }

  handleSelect = (item) => {
    if (this.state.result.indexOf(item) > -1) {
      this.state.result.splice(this.state.result.indexOf(item), 1);
      this.setState({
        result: [...this.state.result],
        placeholder:
          this.state.result.length > 0
            ? this.state.result.join(", ")
            : "Multi Select ...",
      });
    } else {
      this.setState({
        result: [...this.state.result, item],
        placeholder: [...this.state.result, item].join(", "),
      });
    }
  };
  renderItemSelected = (data) => {
    return data.map((item) => (
      <div
        onClick={() => this.handleSelect(item)}
        className="d-flex flex-row align-items-center selected-item"
      >
        <input
          type="checkbox"
          className="ml-2"
          checked={this.state.result.indexOf(item) > -1}
        />
        <p style={{ margin: "unset" }}>{item}</p>
      </div>
    ));
  };
  render() {
    var { isOpen, placeholder } = this.state;
    return (
      <div ref={this.myRef} className="selected mt-5">
        <p>Multiple Selected</p>
        <div
          onClick={() =>
            this.setState({
              isOpen: !isOpen,
            })
          }
          className="selected-label d-flex flex-row"
        >
          <label className="w-100 mb-0">{placeholder}</label>
          <div className="text-right">
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
        {isOpen && (
          <div className="selected-list">
            {this.renderItemSelected(["Ha Noi", "Ho Chi Minh", "Phu Yen"])}
          </div>
        )}
      </div>
    );
  }
}
class MultipleSelectedWithSearch extends React.Component {
  // Multi Select Item : DONE
  // Search : DONE
  //
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      isOpen: false,
      placeholder: "Multi Select ...",
      result: [],
      value: "",
      data: ["Ha Noi", "Ho Chi Minh", "Phu Yen"],
      array: [],
    };
  }

  handleChange = (e) => {
    let array = [];
    this.state.data.forEach((item) => {
      console.log(item.toLowerCase().indexOf(e.target.value.toLowerCase()));
      if (item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
        array.push(item);
      }
    });
    this.setState({
      array: array,
      isOpen: true,
      value: e.target.value,
    });
  };

  handleClick = (e) => {
    if (this.myRef.current.contains(e.target)) {
      return;
    }
    this.setState({
      isOpen: false,
      seatchText: "",
    });
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick);
    return () => {
      document.removeEventListener("mousedown", this.handleClick);
    };
  }

  handleSelect = (item, index) => {
    this.setState({
      value: "",
    });
    if (this.state.result.indexOf(item) > -1) {
      this.state.result.splice(this.state.result.indexOf(item), 1);
      this.setState({
        result: [...this.state.result],
        value: this.state.result.join(", "),
      });
    } else {
      this.setState({
        result: [...this.state.result, item],
        value: [...this.state.result, item].join(", "),
      });
    }
  };
  renderItemSelected = (data) => {
    return data.length > 0 ? (
      data.map((item, index) => (
        <div
          style={{ position: "relative" }}
          onClick={() => this.handleSelect(item, index)}
          className="d-flex flex-row align-items-center selected-item h-100 justify-content-center"
        >
          <input
            style={{ minHeight: "50px" }}
            id={`selected-item-${index}`}
            type="checkbox"
            className="ml-2 w-100 "
            checked={this.state.result.indexOf(item) > -1}
          />
          <p
            style={{
              margin: "unset",
              position: "absolute",
              left: "60px",
              height: "100%",
              top: 5,
            }}
          >
            {item}
          </p>
        </div>
      ))
    ) : (
      <p style={{ minHeight: "70px" }} className="mb-0 text-center">
        No results
      </p>
    );
  };
  render() {
    var { isOpen, placeholder } = this.state;
    return (
      <div ref={this.myRef} className="selected mt-5">
        <p>Multiple Selected With Search</p>
        <div
          onClick={() =>
            this.setState({
              isOpen: !isOpen,
            })
          }
          className="selected-label p-0 d-flex flex-row h-100"
        >
          <input
            className="w-100 h-100"
            value={this.state.value}
            placeholder={placeholder}
            onChange={this.handleChange}
          />
          <div
            style={{ paddingRight: "10px" }}
            className="text-right d-flex align-items-center icon"
          >
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
        {isOpen && (
          <div className="selected-list">
            {this.renderItemSelected(this.state.data)}
          </div>
        )}
      </div>
    );
  }
}

export default function Select(props) {
  return (
    <div>
      <SingleSelect />
      <MultipleSelected />
      <MultipleSelectedWithSearch />
    </div>
  );
}
