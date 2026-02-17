import { Layout } from './components/Layout';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoFilters } from './components/TodoFilters';

function App() {
  return (
    <Layout>
      <div className="space-y-6">
        <TodoInput />
        <TodoList />
        <TodoFilters />
      </div>
    </Layout>
  );
}

export default App;
