import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Nav from '../src/components/index'
//mock data
const dates = [
  'Mon Oct 24 2022 00:00:00 GMT-0400 (Eastern Daylight Time)',
  'Tue Oct 25 2022 00:00:00 GMT-0400 (Eastern Daylight Time)'
]




export default function MyApp() {
  const [dateValue, setDate] = useState(new Date());
  const [notes, setNotes] = useState('')
  const [requestedDates, setRequestedDates] = useState([...dates])


  const [showModal, setShowModal] = useState(false);

  const handleDate = (newDate) => {
    setShowModal(true)
    setDate(newDate)
  }


// await fetch that the backend needs to create to pass data to change name to whatever he names it
  const createSubstituteRequest = async () => {
    try {
      console.log("notes", notes)
      const request = await fetch("/your-api-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notes }), //  may need other info, like userId maybe
      });

      const response = await request.json()
      console.log(response)
      setShowModal(false)
      fetchSubstituteRequest()
    } catch (error) {
      throw new Error(error)
    }
  };


//
  const fetchSubstituteRequest = async () => {
    try {
      const request = await fetch("/your-api-endpoint");
      const response = await request.json();
      console.log(response);
      setRequestedDates(response);

      // depending on your response , you'll need
      // to set the bookings into state
      //what is date format

      setShowModal(false);
    } catch (error) {
      throw new Error(error);
    }
  };



  //function and get request that responds to text and set that text into state variable 

  

  return (
    <div>
      <Nav />
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(01,01,01,0.9)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <h3>I'm a modal</h3>
          <input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)} />
          <button onClick={() => setShowModal(false)}>Cancel</button>
          <button onClick={createSubstituteRequest}>Save</button>
        </div>
      )}
      <div className='calendar'>
        <Calendar onChange={handleDate} value={dateValue} tileContent={({ date }) => {

          console.log('og' ,date)


          const dateToShow = String(date)
          console.log("og2" ,dateToShow);

          if (dates.includes(dateToShow)) {
            return <span>HI!</span>
          } else {
            return <span>*</span>
          }
        }}
        />

      </div>
    </div>
  );
}

