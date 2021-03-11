import { Component } from "react";
import "./App.css";
import Button from "./components/Button";

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
      display: "0",
    };
  }
  handlClick = (event) => {
    const { value } = event.target;
    this.setState((prev, curr) => {
      if (value === "ac") {
        return { result: "", display: "0" };
      } else if (["+", "-", "*", "/", "%"].includes(value)) {
        return { result: prev.result + value };
      } else if (value === "c") {
        if (prev.display.length > 1) {
          return {
            result: prev.display.slice(0, -1),
            display: prev.display.slice(0, -1),
          };
        } else {
          return { result: "", display: "0" };
        }
      } else if (value === "=") {
        let str = new String(prev.result);
        str = str.toString();
        let out;
        try {
          out = eval(str);
        } catch (e) {
          out = e;
        }
        return { display: out, result: 0 };
      } else if (
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(value)
      ) {
        return { result: prev.result + value, display: prev.result + value };
      } else {
        return { result: "", display: "0" };
      }
    });
  };

  render() {
    return (
      <div className="app">
        <div className="cal">
          <div className="row">
            <input
              type="text"
              readOnly
              className="input"
              value={this.state.display}
            />
          </div>
          <div className="row">
            <Button onClick={this.handlClick} lable="ac" type="pow" />
            <Button onClick={this.handlClick} lable="c" type="pow" />
            <Button onClick={this.handlClick} lable="%" type="op" />
            <Button onClick={this.handlClick} lable="/" type="op" />
          </div>
          <div className="row">
            <Button onClick={this.handlClick} lable="1" type="num" />
            <Button onClick={this.handlClick} lable="2" type="num" />
            <Button onClick={this.handlClick} lable="3" type="num" />
            <Button onClick={this.handlClick} lable="*" type="op" />
          </div>
          <div className="row">
            <Button onClick={this.handlClick} lable="4" type="num" />
            <Button onClick={this.handlClick} lable="5" type="num" />
            <Button onClick={this.handlClick} lable="6" type="num" />
            <Button onClick={this.handlClick} lable="-" type="op" />
          </div>
          <div className="row">
            <Button onClick={this.handlClick} lable="7" type="num" />
            <Button onClick={this.handlClick} lable="8" type="num" />
            <Button onClick={this.handlClick} lable="9" type="num" />
            <Button onClick={this.handlClick} lable="+" type="op" />
          </div>
          <div className="row">
            <Button onClick={this.handlClick} lable="0" type="num" />
            <Button onClick={this.handlClick} lable="." type="num" />
            <Button onClick={this.handlClick} lable="+/_" type="op" />
            <Button onClick={this.handlClick} lable="=" type="op" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
