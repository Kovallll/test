
import './App.css';
import { Calendar } from 'date-picker-calendar-react'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Calendar isWithInput={true} isWithRange={true} isWithTodos={true}/>
      </header>
    </div>
  );
}

export default App;
