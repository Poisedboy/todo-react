import './App.css';
import Form from './components/form/Form';
import { TodoList } from './components/todo-list/TodoList';
import SortList from './components/sort-list/SortList';

function App() {
  return (
    <div className="App">
      <h1>To Do</h1>
      <Form />
      <SortList />
      <TodoList />
    </div>
  );
}

export default App;
