import React, { useState, Fragment } from "react";
import { TextField, PrimaryButton } from 'office-ui-fabric-react'

const Socials = () => {
  const [inputFields, setInputFields] = useState([{ Social: "" }]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ Social: "" });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].Social = event.target.value; 
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return Word.run(async (context) => {

      var social = context.document.body.insertParagraph("Socials", Word.InsertLocation.end);
        social.font.set({ size: 13.5, bold: true })
        const len = Object.keys(inputFields).length;
        let i = 0;
        while (i !== len) {
            let str = inputFields[i].Social;
            let links = context.document.body.insertParagraph(`${i+1}.${str}`, "End")
            links.font.set({ size: 11, color: 'black', bold: false })
            i++;
        }
        await context.sync();
    })
  };

  return (
    <>
      <h1>Link your socials</h1>
      <p>GitHub, LinkedIn, Dribbble and more!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group">
                <TextField
                  type="text"
                  className="form-control"
                  id="Social"
                  className="input"
                  name="Social"
                  placeholder="Enter Link"
                  value={inputField.Social}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group">
                <div>
                  <PrimaryButton className="btn" type="button" onClick={() => handleRemoveFields(index)}>
                    -
                  </PrimaryButton>
                  <PrimaryButton className="btn" type="button" onClick={() => handleAddFields()}>
                    +
                  </PrimaryButton>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="submit-button">
          <PrimaryButton className="center" type="submit" onSubmit={handleSubmit}>
            Save
          </PrimaryButton>
        </div>
      </form>
    </>
  );
};

export default Socials;
