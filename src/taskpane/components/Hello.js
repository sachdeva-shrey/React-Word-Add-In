import * as React from "react";
import Header from "./Header";
import { PrimaryButton, Button, ButtonType } from "office-ui-fabric-react";
import HeroList, { HeroListItem } from "./HeroList";
import Progress from "./Progress";

export default class Hello extends React.Component {

      insertParagraph = async () => {
        const header = `Hi, I'm Shrey Sachdeva`;
        const body = `"An aspiring tech enthusiast and an innovator. I love the way technology evolves and would like to be the forerunner of it to make it different from what it is today."`;
        return Word.run(async context => {
          const paragraph = context.document.body.insertParagraph(header, Word.InsertLocation.end);
          paragraph.font.set({
            bold: true,
            size: 21
          });
          paragraph.font.color = "black";

          const paragraphBody = context.document.body.insertParagraph(body, Word.InsertLocation.end);
          paragraphBody.font.set({
            size: 12
          });
          paragraphBody.font.color = "black";
          await context.sync();
        });
      };
    
      changeName = async () => {
        return Word.run(async context => {
          var searchResults = context.document.body.search('as*ng' || 'te*g',  {matchWildCards: true});
          context.load(searchResults, 'font');
          return context.sync().then(function () {
              console.log('Found count: ' + searchResults.items.length);
              for (var i = 0; i < searchResults.items.length; i++) {
                  searchResults.items[i].font.color = 'orange';
                  searchResults.items[i].font.bold = true;
              }
              return context.sync();
          });  
        });
      };
      
    render() {
        return(
            <div>
                <Header logo="../../../assets/shrey-sachdeva.jpg" title={this.props.title} message="Hi, I'm Shrey Sachdeva" />
                <PrimaryButton onClick={this.insertParagraph} id="apply-style" className="ms-Button">Insert Portfolio</PrimaryButton>
                <PrimaryButton onClick={this.changeName} id="apply-style" className="ms-Button">Highlight</PrimaryButton>
            </div>
        );
    };
};
