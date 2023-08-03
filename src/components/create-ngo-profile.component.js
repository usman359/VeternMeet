import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateNGOProfile extends Component {

  constructor(props) {
    super(props)

    // Binding all the functions
    this.onChangeNGOName = this.onChangeNGOName.bind(this);

    this.onChangeNGOHeadName = this.onChangeNGOHeadName.bind(this);

    this.onChangeNGOServiceType = this.onChangeNGOServiceType.bind(this);

    this.onChangeNGOAddress = this.onChangeNGOAddress.bind(this);

    this.onChangeNGOContactNo = this.onChangeNGOContactNo.bind(this);

    this.onChangeNGONoOfSponsored = this.onChangeNGONoOfSponsored.bind(this);

    this.onChangeNGONoOfFranchise = this.onChangeNGONoOfFranchise.bind(this);

    
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up the state variables
    this.state = {
      name: '',
      headname: '',
      serviceType: '',
      address: '',
      contactno: '',
      noOfSponsored: '',
      noOfFranchise: ''

    }
  }

  onChangeNGOName(event) {
    this.setState({ name: event.target.value })
  }

  onChangeNGOHeadName(event) {
    this.setState({ headname: event.target.value })
  }


  onChangeNGOServiceType(event) {
    this.setState({ serviceType: event.target.value })
  }

  onChangeNGOAddress(event) {
    this.setState({ address: event.target.value })
  }

  onChangeNGOContactNo(event) {
    this.setState({ contactno: event.target.value })
  }


  onChangeNGONoOfSponsored(event) {
    this.setState({ noOfSponsored: event.target.value })
  }

  onChangeNGONoOfFranchise(event) {
    this.setState({ noOfFranchise: event.target.value })
  }

  


  onSubmit(event) {
    event.preventDefault()

    const veterenObject = {
      name: this.state.name,
      headname: this.state.headname,
      serviceType: this.state.serviceType,

      address: this.state.address,
      contactno: this.state.contactno,

      noOfSponsored: this.state.noOfSponsored,

      noOfFranchise: this.state.noOfFranchise
      
    };


    axios.post('http://localhost:4000/veterenprofile/create-veteren-profile', veterenObject)
      .then(res => console.log(res.data));

    this.setState({
      name: '', headname: '', serviceType: '', address: '', contactno: '',
      noOfSponsored: '', noOfFranchise: ''

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
            <Form.Control type="text" value={this.state.name} onChange={this.onChangeNGOName} />
          </Form.Group>

          <Form.Group controlId="Head Name">
            <Form.Label>Head Name</Form.Label>
            <Form.Control type="text" value={this.state.headname} onChange={this.onChangeNGOHeadName} />
          </Form.Group>


          <Form.Group controlId="Service Type">
            <Form.Label>Service Type</Form.Label>
            <Form.Control type="text" value={this.state.serviceType} onChange={this.onChangeNGOServiceType} />
          </Form.Group>


          <Form.Group controlId="Address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" value={this.state.address} onChange={this.onChangeNGOAddress} />
          </Form.Group>

          <Form.Group controlId="ContactNo">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="text" value={this.state.contactno} onChange={this.onChangeNGOContactNo} />
          </Form.Group>


          <Form.Group controlId="No of Sponsored">
            <Form.Label>No of Sponsored</Form.Label>
            <Form.Control type="text" value={this.state.noOfSponsored} onChange={this.onChangeNGONoOfSponsored} />
          </Form.Group>


          <Form.Group controlId="No of Franchise">
            <Form.Label>No of Franchise</Form.Label>
            <Form.Control type="text" value={this.state.noOfFranchise} onChange={this.onChangeNGONoOfFranchise} />
          </Form.Group>


          <Button variant="primary" size="lg" block="block" type="submit" className="mt-4">
            Create Veteren Profile
          </Button>
        </Form>
      </div>
    );
  }
}