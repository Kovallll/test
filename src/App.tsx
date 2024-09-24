
import './App.css';
import { Calendar } from 'date-picker-calendar-react'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
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
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <h2>isWithStartSunday</h2>
      <Calendar isWithStartSunday={true}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <h2>isWithHolidays</h2>
      <Calendar isWithHoliday={true}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <h2>isWithInput</h2>
      <Calendar isWithInput={true}/>
      </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <h3>isWithMinMax</h3>
      <Calendar isWithMinMax={true} minDate={'11/09/2024'} maxDate={'11/10/2024'}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <h3>isWithMinMax & isWithInput</h3>
      <Calendar isWithInput={true} isWithMinMax={true} minDate={'11/09/2024'} maxDate={'11/10/2024'}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <h3>isWithMinMax & isWithInput & isWithTodos</h3>
      <Calendar isWithInput={true} isWithTodos={true} isWithMinMax={true} minDate={'11/09/2024'} maxDate={'11/10/2024'}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <h3>isWithMinMax & isWithInput & isWithTodos & isWithHoliday</h3>
      <Calendar isWithInput={true} isWithTodos={true} isWithHoliday={true} isWithMinMax={true} minDate={'11/09/2024'} maxDate={'11/10/2024'}/>
      </div>
      </div>
      </header>
    </div>
  );
}

export default App;
