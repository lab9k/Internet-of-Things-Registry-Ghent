import React from "react"
import PropTypes from "prop-types"

import "./style.scss"
import { ReactComponent as TickIcon } from "../../icons/icon-tick.svg"

class Checkbox extends React.Component {
  static evaluateChecked(checked) {
    if (typeof checked === "function") {
      return !!checked()
    }
    return !!checked
  }

  constructor(props) {
    super(props)
    const { checked } = this.props
    this.state = {
      checked: Checkbox.evaluateChecked(checked),
    }

    this.handleChange = this.handleChange.bind(this)
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      checked: Checkbox.evaluateChecked(nextProps.checked),
    }
  }

  handleChange(event) {
    this.setState((prevState) => {
      return { checked: !prevState.checked }
    })
    this.props.onChange(event)
  }

  render() {
    return (
      <span className="checkbox">
        <input
          checked={this.state.checked}
          name={this.props.name}
          aria-label={this.props.name}
          onChange={this.handleChange}
          type="checkbox"
        />
        <TickIcon />
      </span>
    )
  }
}

Checkbox.defaultProps = {
  checked: false,
  onChange: () => {},
}

Checkbox.propTypes = {
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

export default Checkbox
