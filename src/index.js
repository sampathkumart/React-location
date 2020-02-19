import React from "react";
import ReactDOM from "react-dom";
import SeasonDisply from "./seasonDisplay";
import Spinner from "./spinner";

class App extends React.Component {
  state = { lati: null, err: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lati: position.coords.latitude }),
      err => this.setState({ err: err.message })
    );
  }

  renderContent() {
    if (!this.state.lati && this.state.err) {
      return <div>Error:{this.state.err}</div>;
    }
    if (this.state.lati && !this.state.err) {
      return <SeasonDisply lat={this.state.lati} />;
    }
    return <Spinner alert="accept the request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
