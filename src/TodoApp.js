import React from 'react';
import AddTodo from './conponents/AddTodo';
import TodoList from './conponents/TodoList';
import VisibilityFilters from './conponents/VisibilityFilters';
import './styles.css';

function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}

export default TodoApp;
