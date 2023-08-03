import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';

export default class ViewUpcomingEvents extends Component {

    constructor(props) {
        super(props)

        this.state = { events: [] };

    }



    onSubmit(event) {
        event.preventDefault()

        const veterenObject = {
            name: this.state.name
        };


        axios.post('http://localhost:4000/veterenprofile/create-veteren-profile', veterenObject)
            .then(res => console.log(res.data));


        this.setState({
            name: '', email: '', age: '', address: '', 
            professionalstatus: '', training: ''
        })

      
    }

    render() {
        return (
            <div className="form-wrapper">

                    <Dropdown className="text-center d-grid mt-4">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            View Upcoming Events According to Veteren Entered Hobbies
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Public Talks</Dropdown.Item>
                            <Dropdown.Item href="#">Motivational Talks</Dropdown.Item>
                            <Dropdown.Item href="#">Professional Talk</Dropdown.Item>
                            <Dropdown.Item href="#">Professional Task</Dropdown.Item>
                            <Dropdown.Item href="#">Plantation Drives</Dropdown.Item>
                            <Dropdown.Item href="#">Orphanage Visit</Dropdown.Item>
                            <Dropdown.Item href="#">Visiting Patients Into Hospitals</Dropdown.Item>
                            <Dropdown.Item href="#">Recreational Visit</Dropdown.Item>
                            <Dropdown.Item href="#">Old Home Visit</Dropdown.Item>
                            <Dropdown.Item href="#">Book Reading/Discussion</Dropdown.Item>

                        </Dropdown.Menu>


                    </Dropdown>
                    <div className="col-md-12 text-center">
                        <Button variant="success" size="lg" block="block" type="submit">
                            Interested
                        </Button>
                    </div>
            </div>

        );


    }
}