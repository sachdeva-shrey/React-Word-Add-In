import * as React from 'react';
import {
  Label,
  Pivot,
  PivotItem
} from 'office-ui-fabric-react';

import Hello from './Hello';
import Experience from './Experience';
import Skills from './Skills';
import Socials from './Socials';

export default class PivotBasicExample extends React.Component {
  render() {
    return (
      <div>
        <Pivot className="pivot-style">
            <PivotItem linkText='Main'>
                <Hello></Hello>
            </PivotItem>
            <PivotItem linkText='Add Socials'>
                <Socials></Socials>
            </PivotItem>
            <PivotItem linkText='Add Controls'>
                <Experience></Experience>
            </PivotItem>
            {/* <PivotItem linkText='Skills'>
                <Skills></Skills>
            </PivotItem> */}
        </Pivot>
      </div>
    );
  }
}