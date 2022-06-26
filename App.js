import React, { useState } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import './App.css';
import uuid from 'uuid';

const App = () => {
  const initialTodos = [
    {
      title: 'Take out the trash',
      id: uuid.v4(),
      completed: false
    },
    {
      title: 'Get grocery',
      id: uuid.v4(),
      completed: false
    },
    {
      title: 'Meeting with my adviser',
      id: uuid.v4(),
      completed: false
    }
  ];

  const [todos, updateTodos] = useState(initialTodos);

  const toggleComplete = (id) => {
    updateTodos([...todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }
    )]);
  };

  const deleteTodo = (id) => {
    updateTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      complete: false
    };
    updateTodos([...todos, newTodo]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Header/>
          <br/>
          <div className="container bg-secondary p-3">
            <Todos todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
            <br/>
            <AddTodo addTodo={addTodo}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
