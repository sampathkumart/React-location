import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = { lati: null, err: "" };
  }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lati: position.coords.latitude }),
      err => this.setState({ err: err.message })
    );
    return (
      <div>
        Latitude:{this.state.lati}
        <br />
        Error:{this.state.err}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
