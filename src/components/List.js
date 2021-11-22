import React, { Component } from 'react';
import Checkbox from './Checkbox';

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

const createCheckbox = option => (
    <Checkbox
    label={option}
    isSelected={this.state.checkboxes[option]}
    onCheckboxChange={this.handleCheckboxChange}
    key={option}
/>
);

const createCheckboxes = () => OPTIONS.map(createCheckbox);

const handleCheckboxChange = () => {

}

class List extends Component{
    render() {
        // console.log(Checkbox)

        return (
            <div>
                
            </div>
        )
    }
};

export default List;