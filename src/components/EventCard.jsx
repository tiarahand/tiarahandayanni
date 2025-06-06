import React from "react";
import "./EventCard.css";

function EventCard() {
  return (
    <div className="event-card">
      <img src="/Event Poster.jpg" alt="Event Poster" className="event-image" />

      <div className="event-details">
        <h2>Earn Money Easily With Digital</h2>

        <div className="event-info">
          <div className="event-column">
            <h3>Speaker</h3>
            <p>Ahmad Fatoni - Lead QA Engineer of DOT Indonesia.</p>
            <p>Fahmi Idris - Frontend Engineer Kata.ai</p>
          </div>

          <div className="event-column">
            <h3>Topics</h3>
            <p>Tips to keep productive for digiTalent</p>
            <p>Earn money at home</p>
            <p>Maximizing your digital Skills</p>
          </div>

          <div className="event-column">
            <h3>Date and Time</h3>
            <p>Wednesday, 24th July 2020</p>
            <p>13:00 WIB</p>

            <h3>Registration Fee</h3>
            <p>Rp. 0</p>
          </div>
        </div>
      </div>
      <div className="event-status">OPEN</div>
    </div>
  );
}

export default EventCard;
