import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import axios from 'axios';

export default class CreateMultimediaPost extends Component {

    constructor(props) {
        super(props)

        // Binding all the functions
        this.onChangeVeterenTextMessage = this.onChangeVeterenTextMessage.bind(this);
        this.onChangeVeterenImage = this.onChangeVeterenImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up the state variables
        this.state = {
            textmessage: '',
            image: ''
        }
    }

    onChangeVeterenTextMessage(event) {
        this.setState({ textmessage: event.target.value })
    }

    onChangeVeterenImage(event) {
        
    }


    onSubmit(event) {
        event.preventDefault()

        const veterenMultimediaObject = {
            textmessage: this.state.textmessage,
            image: this.state.image
        };


        axios.post('http://localhost:4000/veterenmultimedia/create-veteren-multimedia', veterenMultimediaObject)
            .then(res => console.log(res.data));


        this.setState({
            textmessage: '',
            image: '',
        })
    }

    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group className="mb-3" controlId="Text Message">
                        <Form.Label>Text Message</Form.Label>
                        <Form.Control type="text" placeholder="Enter text message" value={this.state.textmessage} onChange={this.onChangeVeterenTextMessage} />
                    </Form.Group>



                    <Form.Group className="mb-3" controlId="Image">
                        <Form.Label>Select Image To Upload</Form.Label>
                        <Form.Control type="file" multiple name="file" placeholder="Upload image file"  onChange={this.onChangeVeterenImage} />
                        <Button type="button" >Upload</Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}