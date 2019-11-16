import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' })
  }
  
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{display:'flex', marginBottom: '16px'}}>
          <input 
            type="text" 
            name="title" 
            placeholder="Add Todo" 
            value={this.state.title}
            onChange={this.onChange}
            style={{flex: '10', padding: '16px', borderRadius: '8px', marginRight: '8px'}}
          />
          <input 
            type="submit" 
            value="Submit" 
            className="btn"
            style={{flex: '1'}} />
        </form>
      </div>
    )
  }
}

export default AddTodo
