import React from "react";

const aCheckbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      {label}
    </label>
  </div>
);

createCheckbox = option => (
    <Checkbox
    label={option}
    isSelected={this.state.checkboxes[option]}
    onCheckboxChange={this.handleCheckboxChange}
    key={option}
/>
);

createCheckboxes = () => OPTIONS.map(this.createCheckbox);

handleCheckboxChange = () => {

}

class Checkbox extends aCheckbox{

}

export default Checkbox;