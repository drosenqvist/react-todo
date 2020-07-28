import React from 'react'

class NewTask extends React.Component {
  input = React.createRef()

  handleSubmit = event => {
    event.preventDefault()
    let input = this.input.current

    // Prevent posting of an empty input
    if (!input.value) {
      return false
    }

    this.props.addTaskToState(input.value)

    // Reset the input field after submit
    input.value = ''
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.input} placeholder={'Input Task...'} />
        <button>Add Task</button>
      </form>
    )
  }
}

export default NewTask