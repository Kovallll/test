
import './App.css';
import { Calendar } from 'date-picker-calendar-react'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <h2>isWithTodos</h2>
      <Calendar isWithTodos={true}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <h2>isWithRange</h2>
      <Calendar isWithRange={true}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <h2>isWithRange & isWithInput</h2>
      <Calendar isWithRange={true} isWithInput={true}/>
      </div>
      
      </div>
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <h2>isWithStartSunday</h2>
      <Calendar isWithStartSunday={true}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <h2>isWithHolidays</h2>
      <Calendar isWithHolidays={true}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <h2>isWithInput</h2>
      <Calendar isWithInput={true}/>
      </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <h2>isWithMinMax</h2>
      <Calendar isWithMinMax={true} minDate={'11/09/2024'} maxDate={'11/10/2024'}/>
      </div>
      </div>
      </header>
    </div>
  );
}

export default App;
