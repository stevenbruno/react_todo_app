import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        this.setState({
          todos: res.data,
        })
      })
  }

  // toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
          if (todo.id === id) {
          todo.completed = !todo.completed;
          }
          return todo;
        })
      })
  }

  // Delete todo
  delTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }))

  }

  //Add Todo
  addTodo = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos', 
      {title, completed: false})
    .then(res => this.setState({
      todos: [...this.state.todos, res.data]
    }))
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos 
                  todos={this.state.todos} 
                  markComplete={this.markComplete} 
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
