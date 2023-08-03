import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="#" className="navbar-brand">VeterenMeet Platform</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/create-veteren-profile" className="nav-link">Create Profile</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create-veteren-hobby" className="nav-link">Add Hobby</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create-multimedia-post" className="nav-link">Multimedia</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create-community-service-event" className="nav-link">Create Service Event</Link>
            </li>
            <li className="navbar-item">
              <Link to="/veteren-profile-list" className="nav-link">Veteren Profile List</Link>
            </li>
            <li className="navbar-item">
              <Link to="/invite-followers" className="nav-link">Invite other Followers</Link>
            </li>
            <li className="navbar-item">
              <Link to="/veteren-hobby-list" className="nav-link">Veteren Hobby List</Link>
            </li>
            <li className="navbar-item">
              <Link to="/view-upcoming-events" className="nav-link">View Upcoming Events</Link>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}