import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class VeterenHobbyList extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <h3>Logged hobbies</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Hobby Names List</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }

}