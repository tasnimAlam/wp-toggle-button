import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './styles.module.css'

const ToggleButton = ({ defaultSelected, options, focusColor, onChange }) => {
  const [selected, setSelected] = useState(defaultSelected || options[0])

  useEffect(() => {
    onChange(selected.value)
  }, [selected])

  return (
    <div id='switch' className='eb-switch-control'>
      {options.map((option, index) => (
        <label>
          <input
            className={index ? 'eb-switch-first' : 'eb-switch-second'}
            type='radio'
            name='gh'
            placeholder='name'
            onChange={() => setSelected(option)}
          />
          <span
            style={{
              color: selected.value === option.value ? 'white' : 'black'
            }}
          >
            {option.label}
          </span>
        </label>
      ))}
      <span
        className='eb-slide-bg'
        style={{
          backgroundColor: '#551ef7',
          transform:
            selected == options[0] ? 'translateX(0)' : 'translateX(100%)'
        }}
      />
    </div>
  )
}

ToggleButton.propTypes = {
  defaultSelected: PropTypes.exact({
    label: PropTypes.string,
    value: PropTypes.string
  }),
  options: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string,
      value: PropTypes.string
    }).isRequired
  ),
  focusColor: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default ToggleButton
