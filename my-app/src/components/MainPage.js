import React, { Component } from "react";
import API from "../utils/API";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";
import TableRow from "./TableRow";


class MainPage extends Component {
  state = {
    result: [],
    search: "",
  };

  componentDidMount() {
    this.searchResults();
  }

  searchResults = () => {
    API.search()
      .then((res) => this.setState({ result: res.data.results }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1>Employee Directory</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>img</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>Date of Birth</th>
            </tr>
          </thead>
          <tbody>
          {this.state.result.map(user => (
          <TableRow
            dateofbirth={user.dob.date}
            key={user.id.value}
            name={user.name.first} 
            first={user.name.first}
            last={user.name.last}
            image={user.picture.thumbnail}
            phonenumber={user.phone}
            email={user.email}
          />
        ))} 
          </tbody>
        </Table>
      </div>
    );
  }
}

export default MainPage;
