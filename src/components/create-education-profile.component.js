import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Form from 'react-bootstrap/Form'


export default class CreateEducationProfile extends Component {

  constructor(props) {
    super(props)

  
    this.onChangeeducationName = this.onChangeeducationName.bind(this);

    this.onChangeeducationHeadName = this.onChangeeducationHeadName.bind(this);

    this.onChangeeducationNoDepartment = this.onChangeeducationNoDepartment.bind(this);

    this.onChangeeducationAddress = this.onChangeeducationAddress.bind(this);
    this.onChangeeducationContactNo = this.onChangeeducationContactNo.bind(this);

    this.onChangeeducationViceHeadName = this.onChangeeducationViceHeadName.bind(this);

    this.onChangeeducationNoStudent = this.onChangeeducationNoStudent.bind(this);

    this.onChangeeducationNoFaculty = this.onChangeeducationNoFaculty.bind(this);

    this.onChangeeducationNoCampus = this.onChangeeducationNoCampus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up the state variables
    this.state = {
      name: '',
      headName: '',
      noOfDepartment: '',
      address: '',
      contactno: '',
      
      viceHeadName: '',
      noOfStudent: '',
      noOfFaculty: '',
      noOfCampus: ''
    }
  }


  onChangeeducationName(event) {
    this.setState({ name: event.target.value })
  }

  onChangeeducationHeadName(event) {
    this.setState({ headName: event.target.value })
  }



  onChangeeducationNoDepartment(event) {
    this.setState({ noOfDepartment: event.target.value })
  }



  onChangeeducationAddress(event) {
    this.setState({ address: event.target.value })
  }



  onChangeeducationContactNo(event) {
    this.setState({ contactno: event.target.value })
  }

  onChangeeducationViceHeadName(event) {
    this.setState({ viceHeadName: event.target.value })
  }



  onChangeeducationNoStudent(event) {
    this.setState({ noOfStudent: event.target.value })
  }


  onChangeeducationNoFaculty(event) {
    this.setState({ noOfFaculty: event.target.value })
  }


  onChangeeducationNoCampus(event) {
    this.setState({ noOfCampus: event.target.value })
  }


  onSubmit(event) {
    event.preventDefault()

    const veterenObject = {
      name: this.state.name,
      headName: this.state.headName,
      noOfDepartment: this.state.noOfDepartment,

      address: this.state.address,
      contactno: this.state.contactno,

      viceHeadName: this.state.viceHeadName,

      noOfStudent: this.state.noOfStudent,

      noOfFaculty: this.state.noOfFaculty,

      noOfCampus: this.state.noOfCampus

    };


    axios.post('http://localhost:4000/veterenprofile/create-veteren-profile', veterenObject)
      .then(res => console.log(res.data));

    this.setState({
      name: '', headName: '', noOfDepartment: '', address: '', contactno: '',
      viceHeadName: '', noOfStudent: '', noOfFaculty: '', noOfCampus: ''
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
            <Form.Control type="text" value={this.state.name} onChange={this.onChangeeducationName} />
          </Form.Group>

          <Form.Group controlId="Head Name">
            <Form.Label>Head Name</Form.Label>
            <Form.Control type="type" value={this.state.headName} onChange={this.onChangeeducationHeadName} />
          </Form.Group>

          <Form.Group controlId="No of Department">
            <Form.Label>No of Department</Form.Label>
            <Form.Control type="text" value={this.state.noOfDepartment} onChange={this.onChangeeducationNoDepartment} />
          </Form.Group>


          <Form.Group controlId="Address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" value={this.state.address} onChange={this.onChangeeducationAddress} />
          </Form.Group>

          <Form.Group controlId="ContactNo">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="text" value={this.state.contactno} onChange={this.onChangeeducationContactNo} />
          </Form.Group>


          <Form.Group controlId="Vice Head Name">
            <Form.Label>Vice Head Name</Form.Label>
            <Form.Control type="text" value={this.state.viceHeadName} onChange={this.onChangeeducationViceHeadName} />
          </Form.Group>


          <Form.Group controlId="No of student">
            <Form.Label>No of student</Form.Label>
            <Form.Control type="text" value={this.state.noOfStudent} onChange={this.onChangeeducationNoStudent} />
          </Form.Group>


          <Form.Group controlId="No of Faculty">
            <Form.Label>No of Faculty</Form.Label>
            <Form.Control type="text" value={this.state.noOfFaculty} onChange={this.onChangeeducationNoFaculty} />
          </Form.Group>

          <Form.Group controlId="No of Campuses">
            <Form.Label>No of Campuses</Form.Label>
            <Form.Control type="text" value={this.state.noOfCampus} onChange={this.onChangeeducationNoCampus} />
          </Form.Group>

          <Button variant="primary" size="lg" block="block" type="submit" className="mt-4">
            Create Veteren Profile
          </Button>
        </Form>
      </div>
    );
  }
}