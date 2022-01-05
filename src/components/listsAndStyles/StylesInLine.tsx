import React from 'react'

const StylesInLine = () => {
  return (
    <div className='inLine'>
      <h3 style={{ marginBottom: '5px' }}>Styles inline</h3>
      <button style={
        {
          backgroundColor: '#800000',
          color: '#FFF',

          padding: '10px 20px',
          border: '0',
          borderRadius: '5px'
        }
      }
      >Inline
      </button>
    </div>
  )
}

export default StylesInLine