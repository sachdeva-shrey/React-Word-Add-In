import * as React from "react";
import Header from "./Header";
import { PrimaryButton, Button, ButtonType } from "office-ui-fabric-react";
import HeroList, { HeroListItem } from "./HeroList";
import Progress from "./Progress";

export default class Hello extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          listItems: []
        };
      }
    
    
      insertParagraph = async () => {
        return Word.run(async context => {
          const paragraph = context.document.body.insertParagraph("Hello World", Word.InsertLocation.end);
          paragraph.font.set({
            bold: true,
            size: 21
          })
          paragraph.font.color = "blue";
    
          await context.sync();
        });
      };
    
      changeName = async () => {
        return Word.run(async context => {
          var serviceNameRange = context.document.getSelection();
          var serviceNameContentControl = serviceNameRange.insertContentControl();
          serviceNameContentControl.title = "You can change this text";
          serviceNameContentControl.tag = "Hello World";
          
          var serviceNameContentControl = context.document.contentControls.getByTag("Hello World").getFirst();
          serviceNameContentControl.insertText("HAHA", "Replace").font.set({ bold: true , size: 21 , color: "blue"});
    
          await context.sync();
        })
      }
    render() {
        return(
            <div>
                <Header logo="../../../assets/shrey-sachdeva.jpg" title={this.props.title} message="Hi, I'm Shrey Sachdeva" />
                <PrimaryButton onClick={this.insertParagraph} classID="apply-style" className="ms-Button">Insert Portfolio</PrimaryButton>
                <PrimaryButton onClick={this.changeName} classID="apply-style" className="ms-Button">Change name</PrimaryButton>
            </div>
        )
    }
}
