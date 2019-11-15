import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f3f3f3',
      borderRadius: '2px',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={ this.getStyle() }>
        <p>
          <input 
            type="checkbox" 
            name="" 
            id=""
            onChange={this.props.markComplete.bind(this, id)}
          />
          {' '}
          { title }
          <button 
            style={btnStyle} 
            onClick = {this.props.delTodo.bind(this, id)}>
              X
          </button>
        </p>
      </div>
    )
  }
}

// proptypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '10px 12px',
  borderRadius: '10%',
  cursor: 'pointer',
  float: 'right',
}

export default TodoItem
