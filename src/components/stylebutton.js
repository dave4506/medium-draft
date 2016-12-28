import React, { PropTypes } from 'react';
import { HYPERLINK } from '../util/constants.js';

const renderIcon = (icon, component, label) => {
  const Component = component;
  if (icon) {
    return <i className={`fa fa-${icon}`} />;
  }
  if (component) {
    return (<Component />);
  }
  return label;
};

export default class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    if (this.props.style === HYPERLINK) {
      return null;
    }
    let className = 'md-RichEditor-styleButton';
    if (this.props.active) {
      className += ' md-RichEditor-activeButton';
    }
    className += ` md-RichEditor-styleButton-${this.props.style.toLowerCase()}`;
    return (
      <span
        className={`${className} hint--top`}
        onMouseDown={this.onToggle}
        aria-label={this.props.description}
      >
        {renderIcon(this.props.icon, this.props.component, this.props.label)}
      </span>
    );
  }
}


StyleButton.propTypes = {
  component: PropTypes.func,
  onToggle: PropTypes.func,
  style: PropTypes.string,
  active: PropTypes.bool,
  icon: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
};
