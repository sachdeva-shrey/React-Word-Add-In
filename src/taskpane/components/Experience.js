import React from "react";

import Select from "react-select";
import { PrimaryButton } from "office-ui-fabric-react";

const options = [
  { value: "[", label: "[ ] (Square brackets)" },
  { value: "{", label: "{ } (Curly brackets)" },
  { value: `"`, label: `" " (Quotes)` }
];

class Experience extends React.Component {
  state = { render: false, selectedOption: null };

  handleNext = () => {
    this.setState({ render: !this.state.render });
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div>
        <p className="">Enclose words with delimiters to set content controls on them</p>
        <Select className="input" value={selectedOption} onChange={this.handleChange} options={options} />
        <PrimaryButton className="btn-center" onClick={() => this.handleNext()}>
          Next
        </PrimaryButton>
        {this.state.render && <Container value={this.state.selectedOption.value} />}
      </div>
    );
  }
}

class Container extends React.Component {
  state = { key: false };

  handleSubmit = async e => {
    this.setState({ key: true });
    console.log(this.state.key);
    return Word.run(async context => {
      const delimeter = this.props.value;
      var searchResults;
      if (delimeter === "[") {
        searchResults = context.document.body.search("[[]*[]]", { matchWildCards: true });
      } else if (delimeter === `"`) {
        searchResults = context.document.body.search(`"*"`, { matchWildCards: true });
      }
      //   else { searchResults = context.document.body.search("{}*{}",{ matchWildCards: true });  }
      console.log(delimeter);
      context.load(searchResults, "font");
      context.load(searchResults, "text");
      return context.sync().then(function() {
        let keywords = [];
        console.log("Found count: " + searchResults.items.length);
        for (let i = 0; i < searchResults.items.length; i++) {
          keywords.push(searchResults.items[i].text);
          searchResults.items[i].font.color = "orange";
          searchResults.items[i].font.bold = true;
        }
        Word.run(async context => {
          for (let k = 0; k < keywords.length; k++) {
            // console.log(keywords[k]);
            let results = context.document.body.search(keywords[k]);
            results.load("font/bold");
            let customerContentControls = context.document.contentControls.getByTag("Acceptance");
            customerContentControls.load("text");
            await context.sync();
            for (var i = 0; i < results.items.length; i++) {
              results.items[i].font.bold = true;
              console.log(results.items[i]);
              var cc = results.items[i].insertContentControl();
              cc.tag = "Acceptance";
              cc.title = "Variable " + i;
            }
          }
          return context.sync();
        });
        console.log(keywords);
        return context.sync();
      });
    });
  };

  render() {
    return (
      <div>
        <PrimaryButton className="btn-center" onClick={this.handleSubmit}>
          Show Variables
        </PrimaryButton>
        <div>{/* <p>`${keywords} is`</p> */}</div>
      </div>
    );
  }
}

export default Experience;
