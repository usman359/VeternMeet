import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateOrganizationProfile extends Component {

  constructor(props) {
    super(props)

   
    this.onChangeOrganizationName = this.onChangeOrganizationName.bind(this);

    this.onChangeCofounderName = this.onChangeCofounderName.bind(this);

   
    this.onChangeOragnizationAddress = this.onChangeOragnizationAddress.bind(this);

    this.onChangeOragnizationNoEmployee = this.onChangeOragnizationNoEmployee.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up the state variables
    this.state = {
      name: '',
      cofounder: '',
      address: '',
      noOfEmployee: ''

    }
  }

  onChangeOrganizationName(event) {
    this.setState({ name: event.target.value })
  }

  onChangeCofounderName(event) {
    this.setState({ cofounder: event.target.value })
  }

  onChangeOragnizationAddress(event) {
    this.setState({ address: event.target.value })
  }

  onChangeOragnizationNoEmployee(event) {
    this.setState({ noOfEmployee: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault()

    const oragnizationObject = {
      name: this.state.name,

      cofounder: this.state.cofounder,
      address: this.state.address,

      noOfEmployee: this.state.noOfEmployee

    };


    axios.post('http://localhost:4000/organizationprofile/create-organization-profile', oragnizationObject)
      .then(res => console.log(res.data));

    this.setState({
      name: '', cofounder: '', address: '', noOfEmployee: ''
      
    })

    // Redirect to Create veteren hobbies 
    this.props.history.push('/create-veteren-hobbies')

    
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={this.state.name} onChange={this.onChangeOrganizationName} />
          </Form.Group>

          <Form.Group controlId="Cofounder">
            <Form.Label>Cofounder</Form.Label>
            <Form.Control type="text" value={this.state.cofounder} onChange={this.onChangeCofounderName} />
          </Form.Group>

          <Form.Group controlId="Address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" value={this.state.address} onChange={this.onChangeOragnizationAddress} />
          </Form.Group>

          <Form.Group controlId="NumberOfEmployee">
            <Form.Label>Number of Employees</Form.Label>
            <Form.Control type="text" value={this.state.noOfEmployee} onChange={this.onChangeOragnizationNoEmployee} />
          </Form.Group>

          <Button variant="primary" size="lg" block="block" type="submit" className="mt-4">
            Create organization Profile
          </Button>
        </Form>
      </div>
    );
  }
}