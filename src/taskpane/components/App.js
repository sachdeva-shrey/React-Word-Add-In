import * as React from "react";
import Pivot from "./Pivot";

/* global Button Header, HeroList, HeroListItem, Progress, Word */

export default class App extends React.Component {
  render() {
    return (
      <div className="ms-welcome">
         <Pivot></Pivot>
      </div>
    );
  }
}
