import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class VeterenProfileList extends Component {
    constructor(props) {
        super(props);


        this.state = { profiles: [] };
    }



    render() {
        return (
            <div>
                <h3>Logged profiles</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Professional Status</th>
                            <th>Tranining</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }

}