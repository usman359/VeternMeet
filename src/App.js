import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateVeterenHobby from './components/create-veteren-hobby.component'
import CreateVeterenProfile from './components/create-veteren-profile.component'
import VeterenProfileList from './components/veteren-profile-list.component'
import EditVeterenProfile from './components/edit-veteren-profile.component'
import EditVeterenHobby from './components/edit-veteren-hobby.component'
import Navbar from "./components/navbar.component"
import CreateCommunityServiceEvent from './components/create-community-service-event.component'
import VeterenHobbyList from './components/veteren-hobby-list.component'
import CreateMultimediaPost from './components/create-multimedia-post.component'
import ViewUpcomingEvents from './components/view-upcoming-events.component'


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={VeterenProfileList} />
        <Route path="/create-veteren-profile" component={CreateVeterenProfile} />
        <Route path="/veteren-hobby-list" component={VeterenHobbyList} />
        <Route path="/veteren-profile-list" component={VeterenProfileList} />
        <Route path="/edit/:id" component={EditVeterenProfile} />
        <Route path="/create-community-service-event" component={CreateCommunityServiceEvent} />
        <Route path="/edithobbies/:id" component={EditVeterenHobby} />
        <Route path="/create-veteren-hobby" component={CreateVeterenHobby} />
        <Route path="/create-multimedia-post" component={CreateMultimediaPost} />
        <Route path="/view-upcoming-events" component={ViewUpcomingEvents} />

      </div>
    </Router>
  )
}

export default App
