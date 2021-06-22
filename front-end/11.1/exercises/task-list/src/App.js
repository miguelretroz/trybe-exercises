import './App.css';

function Task (value) {
  return <li>{value}</li>
}

const taskList = ['Estudar', 'Organizar agenda', 'Limpar mesa'];

const elementsList = [<li>Element 01</li>, <li>Element 02</li>, <li>Element 03</li>];

function App() {
  return (
    <ul>
      { taskList.map( task => Task(task))}
      { elementsList }
    </ul>
  );
}

export default App;
