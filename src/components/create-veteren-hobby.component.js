import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateVeterenHobby extends Component {

    constructor(props) {
        super(props)

        // Binding all the functions
        this.onChangeVeterenHobbyNames = this.onChangeVeterenHobbyNames.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up the state variables
        this.state = {
            hobbyNames: ''
        }
    }

    onChangeVeterenHobbyNames(event) {
        this.setState({ hobbyNames: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault()


        const veterenHobbiesObject = {
            hobbyNames: this.state.hobbyNames
        };


        axios.post('http://localhost:4000/veterenhobby/create-veteren-hobby', veterenHobbiesObject)
            .then(res => console.log(res.data));

        this.setState({
            hobbyNames: ''
        })


    }

    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Hobbies">
                        <Form.Label>Write your hobbies here</Form.Label>
                        <Form.Control type="text" value={this.state.hobbyNames} onChange={this.onChangeVeterenHobbyNames} />
                    </Form.Group>

                    <Button variant="primary" size="lg" block="block" type="submit">
                        Create Veteren Hobbies
                    </Button>
                </Form>
            </div>
        );
    }
}