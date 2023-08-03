import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class CreateVeterenProfile extends Component {

  constructor(props) {
    super(props)

    // Binding all the functions
    this.onChangeVeterenName = this.onChangeVeterenName.bind(this);
    this.onChangeVeterenEmail = this.onChangeVeterenEmail.bind(this);
    this.onChangeVeterenAge = this.onChangeVeterenAge.bind(this);
    this.onChangeVeterenAddress = this.onChangeVeterenAddress.bind(this);
    this.onChangeVeterenProfessionalStatus = this.onChangeVeterenProfessionalStatus.bind(this);
    this.onChangeVeterenTraining = this.onChangeVeterenTraining.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up the state variables
    this.state = {
      name: '',
      email: '',
      age: '',
      address: '',
      professionalstatus: '',
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


  onChangeVeterenProfessionalStatus(event) {
    this.setState({ professionalstatus: event.target.value })
  }


  onChangeVeterenTraining(event) {
    this.setState({ training: event.target.value })
  }


  onSubmit(event) {
    event.preventDefault()

    const veterenHobbyObject = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      address: this.state.address,
      professionalstatus: this.state.professionalstatus,
      training: this.state.training
    };


    axios.post('http://localhost:4000/veterenprofile/create-veteren-profile', veterenHobbyObject)
      .then(res => console.log(res.data));


    this.setState({
      name: '', email: '', age: '', address: '',
      professionalstatus: '', training: ''
    })


  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={this.state.name} onChange={this.onChangeVeterenName} />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={this.state.email} onChange={this.onChangeVeterenEmail} />
          </Form.Group>

          <Form.Group controlId="Age">
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" value={this.state.age} onChange={this.onChangeVeterenAge} />
          </Form.Group>

          <Form.Group controlId="Address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" value={this.state.address} onChange={this.onChangeVeterenAddress} />
          </Form.Group>


          <Form.Group controlId="ProfessionalStatus">
            <Form.Label>Professional Status</Form.Label>
            <Form.Control type="text" value={this.state.professionalstatus} onChange={this.onChangeVeterenProfessionalStatus} />
          </Form.Group>

          <Form.Group controlId="Tranining">
            <Form.Label>Tranining</Form.Label>
            <Form.Control type="text" value={this.state.training} onChange={this.onChangeVeterenTraining} />
          </Form.Group>

          <Button variant="primary" size="lg" block="block" type="submit">
            Create Veteren Profile
          </Button>
        </Form>
      </div>
    );
  }
}