import * as React from "react";
import { PrimaryButton, Button, ButtonType } from "office-ui-fabric-react";
import Header from "./Header";
import HeroList, { HeroListItem } from "./HeroList";
import Progress from "./Progress";
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
