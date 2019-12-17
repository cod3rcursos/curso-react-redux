import React, { Component } from "react";

export default class Grid extends Component {

  toCssClasses(numbers) {
    const classes = ["col-xs", "col-sm", "col-md", "col-lg"];
    const sizes = numbers ? numbers.split(" ") : [];
    const toCssClass = (size, index) => `${classes[index]}-${size}`;
    
    return sizes.map(toCssClass).join(" ");
  }

  render() {
    const gridClasses = this.toCssClasses(this.props.cols || "12");
    return (
      <div className={gridClasses}> 
        {this.props.children}
      </div> 
    );
  }
}