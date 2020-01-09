import React from "react";
import { string, number, oneOfType } from "prop-types";

const Property = ({ title, value }) => (
  <div className="d-flex mb-2">
    <p className="mr-2">{title}:</p>
    <p className="font-italic">{value}</p>
  </div>
);

Property.propTypes = {
  title: string.isRequired,
  value: oneOfType([string, number]).isRequired
};

export default Property;
