import React from 'react'

class Task extends React.Component {
  render () {
  const state = Object.keys(this.props.state)

    return (
      <ul>
        {state.map(key => {
          return (
            <li key={key}>
              {this.props.state[key]} 
              <button onClick={() => this.props.removeTaskFromState(key)}>X</button>           
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Task