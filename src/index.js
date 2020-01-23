import React from "react";
import ReactDOM from "react-dom";
import Loader from "./Components/Loader/Loader";
import { loaderStatus } from "./Utils/utilities";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  // Simulation function to show and hide the loading screen
  onShowLoading() {
    loaderStatus.next(true); // Emitting true for loaderStatus to turn on loading screen
    setTimeout(() => {
      loaderStatus.next(false); // Emitting false for loaderStatus to turn on loading screen
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <Loader />
        <h1>React Loves RxJS</h1>
        <h2>Click the following button to show loading screen.</h2>

        <button onClick={this.onShowLoading.bind(this)}>Show Loading</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
