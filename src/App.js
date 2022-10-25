import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Nav from '../src/components/index'

export default function MyApp() {
  const [value, onChange] = useState(new Date());


  return (
    <div>
      <Nav/>
      <div className='calendar'>
        <Calendar onChange={onChange} value={value} />
        
      </div>
    </div>
  );
}