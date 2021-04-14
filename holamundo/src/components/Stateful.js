import React, { Component } from 'react'

//*Este componente maneja ciclo de vida, eventos y estado
export class Stateful extends Component {
  constructor(props){ //*Inicializamos la clase de React
    super(props)
    this.state = {
      hello: "Hola mundo"
    }
  }
  render() {
    return (
      <h1>
        {this.state.hello}
      </h1>
    )
  }
}

export default Stateful
