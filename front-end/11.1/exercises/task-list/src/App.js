import './App.css';

function Task (value) {
  return <li>{value}</li>
}

function App() {
  return (
    <ul>
      {Task('Estudar')}
    </ul>
  );
}

export default App;
