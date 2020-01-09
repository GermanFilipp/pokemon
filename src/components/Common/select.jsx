import React from "react";
import Select from "react-select";
import { string, func, shape, arrayOf } from "prop-types";

class CustomSelect extends React.Component {
  handleChange = value => {
    this.props.onChange(this.props.name, value);
  };

  handleBlur = () => {
    this.props.onBlur(this.props.name, true);
  };

  render() {
    return (
      <div style={{ margin: "1rem 0" }}>
        <label htmlFor="color">{this.props.title}:</label>
        <Select
          id="color"
          isMulti
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          options={this.props.options}
          value={this.props.value}
        />
      </div>
    );
  }
}

CustomSelect.propTypes = {
  name: string.isRequired,
  onBlur: func.isRequired,
  onChange: func.isRequired,
  options: arrayOf(
    shape({
      title: string,
      value: string
    })
  ),
  title: string,
  value: arrayOf(
    shape({
      title: string,
      value: string
    })
  ).isRequired
};
CustomSelect.defaultProps = {
  options: [],
  title: ""
};

export default CustomSelect;
