import React, { useState, Fragment } from "react";
import { TextField, PrimaryButton } from 'office-ui-fabric-react'

const Skills = () => {
  const [inputFields, setInputFields] = useState([{ Skills: "" }]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ Skills: "" });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].Skills = event.target.value; 
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return Word.run(async (context) => {
        let Skills = context.document.body.insertParagraph("Skills", "End")
        Skills.font.set({ size: 20, color: 'blue', bold: true })
        const len = Object.keys(inputFields).length;
        let i = 0;
        while (i !== len) {
            let str = inputFields[i].Skills;
            let links = context.document.body.insertParagraph(str, "End")
            links.font.set({ size: 15, color: 'black', bold: false })
            i++;
        }
        return await context.sync();
    })
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group">
                <label htmlFor="Social">Skills</label>
                <TextField
                  type="text"
                  className="form-control"
                  id="Skills"
                  className="input"
                  name="Skills"
                  value={inputField.Skills}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group">
                <PrimaryButton className="btn" type="button" onClick={() => handleRemoveFields(index)}>
                  -
                </PrimaryButton>
                <PrimaryButton className="btn" type="button" onClick={() => handleAddFields()}>
                  +
                </PrimaryButton>
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

export default Skills;
