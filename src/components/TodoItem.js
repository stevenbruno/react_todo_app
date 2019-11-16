import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

export class TodoItem extends Component {
  getStyle = () => {
    return {
      display: 'flex',
      alignItems: 'center',
      background: '#f3f3f3',
      borderRadius: '8px',
      padding: '16px',
      borderBottom: '1px #ccc dotted',
      marginBottom: '16px',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={ this.getStyle() }>
          <input 
            type="checkbox" 
            name="" 
            id=""
            style={{marginRight: '8px'}}
            onChange={this.props.markComplete.bind(this, id)}
          />
          {' '}
          { title }
          <button 
            style={delBtnStyle} 
            onClick = {this.props.delTodo.bind(this, id)}>
              X
          </button>
      </div>
    )
  }
}

// proptypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
}

const delBtnStyle = {
  marginLeft: 'auto',
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '10px 12px',
  borderRadius: '10%',
  cursor: 'pointer',
  float: 'right',
}

export default TodoItem
