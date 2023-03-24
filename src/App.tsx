import { useState } from 'react';
import './App.css';
import Calendar from './components/calendar/Calendar';

function App() {
  const [currDate, setCurrDate] = useState(new Date("2023-03-24"))
  
  return (
    <div className='mt-16 flex flex-col items-center'>
      <Calendar date={currDate} />
    </div>
  );
}

export default App;