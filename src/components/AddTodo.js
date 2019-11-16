import React, { Component } from 'react'

export class AddTodo extends Component {
  render() {
    return (
      <div>
        <form style={{display:'flex', marginBottom: '16px'}}>
          <input 
            type="text" 
            name="title" 
            placeholder="Add Todo" 
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
