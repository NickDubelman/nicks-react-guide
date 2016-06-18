import React from 'react'

export default function Hello({name, color}) {
  let background = {backgroundColor: color}
  return(
    <h1 style={background}>Hello {name}</h1>
  )
}
