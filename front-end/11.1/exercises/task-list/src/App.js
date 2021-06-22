import './App.css';

function Task (value) {
  return <li>{value}</li>
}

const taskList = ['Estudar', 'Organizar agenda', 'Limpar mesa'];

function App() {
  return (
    <ul>
      { taskList.map( task => Task(task))}
    </ul>
  );
}

export default App;
