import React from "react";
import { string } from "prop-types";

const Image = ({ val }) => (
  <div className="main-image-wrap">
    <img alt="logo" src={val} />
  </div>
);

Image.propTypes = {
  val: string.isRequired
};

export default Image;
