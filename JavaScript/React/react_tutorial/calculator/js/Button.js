import React from "react";
import PropTypes from "prop-types";


class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };
