import React from "react";
import { string } from "prop-types";

const EmptyState = props => <p className={props.className}>{props.children}</p>;

EmptyState.propTypes = {
  children: string,
  className: string
};

EmptyState.defaultProps = {
  children: "",
  className: ""
};

export default EmptyState;
