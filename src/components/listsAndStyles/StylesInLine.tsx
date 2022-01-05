import React, { useState } from 'react'

const StylesInLine = () => {
  const [clicked, setClicked] = useState(false)
  const [bgColor, setBgColor] = useState('#800000')

  const handleClicked = () => {
    if (!clicked) {
      setClicked(true)
      setBgColor('#B22222')
    } else {
      setClicked(false)
      setBgColor('#800000')
    }
  }

  return (
    <div className='inLine'>
      <h3 style={{ marginBottom: '5px' }}>Styles inline</h3>
      <button
        onClick={handleClicked}
        style={
          {
            backgroundColor: bgColor,
            color: '#FFF',

            padding: '10px 20px',
            border: '0',
            borderRadius: clicked ? '5px 15px 5px 15px' : '0'
          }
        }
      >Inline
      </button>
    </div>
  )
}

export default StylesInLine