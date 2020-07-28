import React from 'react';
import Header from './Header'
import Main from './Main'
import '../App.css';

class App extends React.Component {
  state = {
    tasks: {}
  }

  addTaskToState = task => {
    const tasks = { ...this.state.tasks }
    tasks[`task${Date.now()}`] = task
    this.setState({ tasks })
  }

  removeTaskFromState = task => {
    const tasks = { ...this.state.tasks }
    delete tasks[task]
    this.setState({ tasks })
  }

  addPlaceholders = () => {    
    const tasks = {
      task1: 'Walk the dog',
      task2: 'Get groceries',
      task3: 'Water the plants',
      task4: 'Vacuum the bathroom'
    }

    this.setState({ tasks })
  }

  render () {
    return (
      <>
        <Header />
        <Main 
          addTaskToState={this.addTaskToState} 
          removeTaskFromState={this.removeTaskFromState}
          addPlaceholders={this.addPlaceholders}
          state={this.state.tasks}
        />
      </>
    )
  }
}

export default App;
