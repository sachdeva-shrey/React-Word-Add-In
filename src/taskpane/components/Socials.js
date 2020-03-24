import React, { useState, Fragment } from "react";
import { TextField, PrimaryButton } from 'office-ui-fabric-react'

const Socials = () => {
  const [inputFields, setInputFields] = useState([{ firstName: "" }]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ firstName: "" });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].firstName = event.target.value; 
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return Word.run(async (context) => {
        const len = Object.keys(inputFields).length;
        let i = 0;
        while (i !== len) {
            let str = inputFields[i].firstName;
            context.document.body.insertText(str, "End")
            i++;

        }
        return await context.sync();
    })
  };

  return (
    <>
      <h1>Dynamic Form Fields in React</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <TextField
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={inputField.firstName}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group">
                <PrimaryButton type="button" onClick={() => handleRemoveFields(index)}>
                  -
                </PrimaryButton>
                <PrimaryButton type="button" onClick={() => handleAddFields()}>
                  +
                </PrimaryButton>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="submit-button">
          <PrimaryButton type="submit" onSubmit={handleSubmit}>
            Save
          </PrimaryButton>
        </div>
      </form>
    </>
  );
};

export default Socials;
