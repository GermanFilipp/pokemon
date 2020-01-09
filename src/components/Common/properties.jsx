import React from "react";
import isEmpty from "lodash.isempty";
import { string, arrayOf, shape } from "prop-types";

const Properties = ({ title, dataset }) => (
  <div className="d-flex mb-2">
    <p className="mr-2">{title}:</p>
    {isEmpty(dataset) && <p>None</p>}
    <div>
      {dataset.map(property => (
        <p key={property.value}> {property.label}</p>
      ))}
    </div>
  </div>
);

Properties.propTypes = {
  dataset: arrayOf(
    shape({
      label: string,
      value: string
    })
  ),
  title: string.isRequired
};

Properties.defaultProps = {
  dataset: []
};

export default Properties;
