import React, { Component } from 'react'
import Hello from './hello'

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello name="Hello, Hola! I'm at a place called Vertigo" color="#696969"/>
        <Hello name="Nickus" color="#969696" />
      </div>
    )
  }
}
