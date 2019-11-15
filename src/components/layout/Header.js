import React from 'react'

export default function header() {
  return (
    <div>
      <header style={headerStyle}>
        <h1>TodoList</h1>
      </header>
    </div>
  )
}

const headerStyle = {
  fontFamily: 'Georgia, serif',
  color: '#333',
  textAlign: 'center',
  padding: '10px',
}