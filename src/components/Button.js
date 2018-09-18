import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children }) => <button>{children}</button>

Button.propTypes = {
    // Break this check to test cypress!
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}

export default Button