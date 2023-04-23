import React from 'react';
import { Sort } from '../types/Sort';
import { TodosContextType } from '../types/TodoContext';

const loop = () => {};

const TodosContext = React.createContext<TodosContextType>({
  isLoading: false,
  todos: [],
  addTodo: loop,
  deleteTodo: loop,
  editTodo: loop,
  isInputDisabled: false,
  handleRemoveCompletedTodos: loop,
  setSort: loop,
  sort: Sort.all,
  errorType: '',
  setErrorType: loop,
  isError: false,
  handleToggleAll: loop,
  loadingTodo: [],
  tempTodo: null,
  activeTodos: [],
  completedTodos: [],
});

export const useTodosContext = () => {
  const context = React.useContext(TodosContext);

  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }

  return context;
};

export default TodosContext;
