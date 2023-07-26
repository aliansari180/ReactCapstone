import burger from './assets/burger.jpg'
import salad from './assets/OIP.jpg'
import vegetable from './assets/vegetables.jpg'
import './imp.css'
import React, { useState, useReducer } from 'react';

import BookingForm from './BookingForm';

function initializeTimes() {
  // Return the initial state for availableTimes (for example, same times regardless of date)
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
}

function updateTimes(state, action) {
  // Update the state based on the selected date (action.payload)
  // For now, the function returns the same available times regardless of the date
  return state;
}
const bookingsData = [
    { id: 1, name: 'John Doe', date: '2023-07-30', time: '19:00', guests: 4 },
    { id: 2, name: 'Jane Smith', date: '2023-08-01', time: '20:00', guests: 2 },
    // Add more booking data here
  ];

function Main() {
  // Change availableTimes to a reducer using useReducer
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <h1>This Week Specials</h1>
      <button type="button">Online Menu</button>
      <div className="grid">
        <div className="card">
          <img src={burger} width={300} height={400} alt="" />
          <h4>Mediteranian Burger</h4>
          <p>This Mediterranean-inspired burger offers a delightful combination of savory and tangy flavors, with a touch of Mediterranean herbs and ingredients that make it stand out from traditional burgers.</p>
          <li><a href="http://">Order a delivery</a></li>
        </div>
        <div className="card">
          <img src={salad} width={300} height={400} alt="" />
          <h4>Special salad</h4>
          <p>Mediterranean salad is a versatile dish that can be served as a refreshing appetizer, a light lunch, or a side dish for grilled meats and seafood. It's not only delicious but also packed with nutrients,</p>
          <li><a href="http://">Order a delivery</a></li>
        </div>
        <div className="card">
          <img src={vegetable} width={300} height={400} alt="" />
          <h4>Crispy vegetables</h4>
          <p>Ratatouille is a delightful Mediterranean vegetable dish that celebrates the natural flavors of seasonal produce. It's a comforting and wholesome meal that will satisfy both vegetarians and non-vegetarians alike.</p>
          <li><a href="http://">Order a delivery</a></li>
        </div>
      </div>
      {/* Pass availableTimes state and dispatch function as props */}
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <h2>Booking Data</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
          </tr>
        </thead>
        <tbody>
          {bookingsData.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.name}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.guests}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Main;
