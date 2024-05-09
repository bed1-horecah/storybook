import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, fontWeight, backgroundColor, borderRadius, size, color, width, height, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor, borderRadius, color, width, height, fontWeight }} // Include borderRadius in the style object
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Border radius of the button
   */
  borderRadius: PropTypes.string, // Add PropType for borderRadius

  color: PropTypes.string,

  width: PropTypes.string,

  height: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  fontWeight: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'large',
  color: null,
  borderRadius: '4px', // Default border radius
  onClick: undefined,
  width: '100px',
  height: '44px',
  fontWeight: '600'
};
