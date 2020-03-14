import * as React from 'react';
import {
  Label,
  Pivot,
  PivotItem
} from 'office-ui-fabric-react';

import Hello from './Hello';

export default class PivotBasicExample extends React.Component {
  render() {
    return (
      <div>
        <Pivot className="pivot-style">
        <PivotItem linkText='Main'>
              <Label>Main</Label>
              <Hello></Hello>
            </PivotItem>
            <PivotItem linkText='Experience'>
              <Label>Experience</Label>
            </PivotItem>
            <PivotItem linkText='Skills'>
              <Label>Skills</Label>
            </PivotItem>
            <PivotItem linkText='Socials'>
              <Label>Socials</Label>
            </PivotItem>
        </Pivot>
      </div>
    );
  }
}