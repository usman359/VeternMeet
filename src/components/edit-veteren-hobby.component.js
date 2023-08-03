import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class EditVeterenHobby extends Component {
    constructor(props) {
        super(props);

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
        event.preventDefault();

        const veterenHobbyObject = {
            hobbyNames: this.state.hobbyNames

        };

    
    }

    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Hobby">
                        <Form.Label>Hobby</Form.Label>
                        <Form.Control type="text" value={this.state.hobbyNames} onChange={this.onChangeVeterenHobbyNames} />
                    </Form.Group>


                    <Button variant="primary" size="lg" block="block" type="submit">
                        Create Veteren Hobby
                    </Button>
                </Form>
            </div>
        )
    }
}