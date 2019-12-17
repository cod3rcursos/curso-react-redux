// eslint-disable-next-line no-unused-vars
import React from "react";

export default props => {
  if(props.test) {
    return props.children;
  } else {
    return false;
  }
};