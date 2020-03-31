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
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div>
        <Select value={selectedOption} onChange={this.handleChange} options={options} />
        <PrimaryButton className="btn" onClick={() => this.handleNext()}>
          Next
        </PrimaryButton>
        {this.state.render && <Container value={this.state.selectedOption.value} />}
      </div>
    );
  }
}

class Container extends React.Component {
  constructor(props) {
    super();
  }

  handleSubmit = async () => {
    return Word.run(async context => {
      let searchResults = context.document.body.search("[[]*[]]", { matchWildCards: true }).context.insertContentControl();
      context.load(searchResults, 'font');
      context.load(searchResults, 'text');
      return context.sync().then(function() {
        console.log("Found count: " + searchResults.items.length);
        for (let i = 0; i < searchResults.items.length; i++) {
          searchResults.items[i].font.color = "orange";
          searchResults.items[i].font.bold = true;
          console.log(searchResults.items[i].text)
        //   let search = searchResults.items[i].text;
        //   let searched = context.document.body.search(search, { matchWholeWord: true }).insertContentControl();
        // }
    }
        return context.sync();
    });
  });
}

  render() {
    return (
      <div>
        <PrimaryButton onClick={this.handleSubmit}>Show Variables</PrimaryButton>
      </div>
    );
  }
}

export default Experience;
