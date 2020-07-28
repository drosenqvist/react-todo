import React from 'react'
import Task from './Task'
import NewTask from './NewTask'

class Main extends React.Component {
  render () {
    return (
      <main>
        <Task state={this.props.state} removeTaskFromState={this.props.removeTaskFromState} />

        <NewTask addTaskToState={this.props.addTaskToState} />

        <button onClick={() => this.props.addPlaceholders()}>Add Placeholders</button>
      </main>
    )
  }
}

export default Main