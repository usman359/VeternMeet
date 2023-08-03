import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown';

export default class CreateCommunityserviceEvent extends Component {

    constructor(props) {
        super(props)

        this.onChangeVeterenName = this.onChangeVeterenName.bind(this);
        this.onChangeVeterenEmail = this.onChangeVeterenEmail.bind(this);
        this.onChangeVeterenAge = this.onChangeVeterenAge.bind(this);
        this.onChangeVeterenAddress = this.onChangeVeterenAddress.bind(this);
        this.onChangeVeterenTraining = this.onChangeVeterenTraining.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            name: '',
            email: '',
            age: '',
            address: '',
            training: ''
        }
    }

    onChangeVeterenName(event) {
        this.setState({ name: event.target.value })
    }

    onChangeVeterenEmail(event) {
        this.setState({ email: event.target.value })
    }

    onChangeVeterenAge(event) {
        this.setState({ age: event.target.value })
    }

    onChangeVeterenAddress(event) {
        this.setState({ address: event.target.value })
    }


    onChangeVeterenTraining(event) {
        this.setState({ training: event.target.value })
    }


    onSubmit(event) {
        event.preventDefault()

        const veterenEventObject = {
            name: this.state.name,
            email: this.state.email,
            age: this.state.age,
            address: this.state.address,
            training: this.state.training
        };


        axios.post('http://localhost:4000/veterenprofile/create-veteren-profile', veterenEventObject)
            .then(res => console.log(res.data));


        this.setState({
            name: '', email: '', age: '', address: '', training: ''
        })

    }

    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group className="mb-3" controlId="CommunityEvent">
                        <Form.Label>Create a New Community Service Event</Form.Label>
                        <Form.Control type="text" q value={this.state.serviceEvent} onChange={this.onChangeCommunityEvent} />
                    </Form.Group>

                    <Dropdown className="text-center d-grid mt-4">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Please Select Community Service Event to Create From the DropDown Menu
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
                        <Button variant="success" size="lg" block="block" type="submit" className="mt-5">
                            Interested
                        </Button>


                    </div>
                </Form>
            </div>

        );


    }
}