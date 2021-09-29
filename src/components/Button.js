/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.sizes = {
      default: `py-3 px-8`,
      lg: `py-4 px-12`,
      xl: `py-5 px-16 text-lg`
    };
    this.className = props.className;
    this.size = props.size;
    this.disabled = props.disabled;
  }

  render() {
    return (
      <>
        <button
          type="button"
          onClick={this.props.onClick}
          disabled={this.disabled}
          className={`
        ${this.sizes[this.size] || this.sizes.default}
        ${this.className}
    `}
        >
          {this.props.children}
        </button>
      </>
    );
  }
}

Button.defaultProps = {
  className: 'primary-text-bg font-body font-bold text-sm',
  children: 'Button',
  disabled: false,
  onClick() {}
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;
