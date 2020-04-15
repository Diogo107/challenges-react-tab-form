import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      firstEmail: '',
      secondName: '',
      secondEmail: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const inputName = event.target.name;
    console.log(value);
    this.setState({
      [inputName]: value,
    });
  }

  sendMessage(event) {
    event.preventDefault();
    if (event.target.name == 'firstInvite') {
      console.log(`{"Name": "${this.state.firstName}", "Email": "${this.state.firstEmail}"}`);
      document.getElementById('firstName').disabled = true;
      document.getElementById('firstEmail').disabled = true;
      document.getElementById('firstInvite').disabled = true;
    } else if (event.target.name == 'secondInvite') {
      console.log(`{"Name": "${this.state.secondName}", "Email": "${this.state.secondEmail}"}`);
      document.getElementById('secondName').disabled = true;
      document.getElementById('secondEmail').disabled = true;
      document.getElementById('secondInvite').disabled = true;
    } else {
      console.log('No button was choosed');
    }
  }

  render() {
    return (
      <div>
        <header>
          <button onClick={console.log('Closing the page maybe')}>
            <img src="/closeIcon.png" alt="close icon" />
          </button>
        </header>

        <Form onSubmit={this.sendMessage}>
          <h1>1st Friend</h1>
          <FormGroup>
            <Label>Name</Label>
            <Input id="firstName" name="firstName" onChange={this.handleInputChange} />
            <Label>E-mail</Label>
            <Input
              id="firstEmail"
              name="firstEmail"
              type="email"
              onChange={this.handleInputChange}
            />
            <Button id="firstInvite" name="firstInvite" value="Invite" onClick={this.sendMessage}>
              Invite
            </Button>
          </FormGroup>

          <h1>2nd Friend</h1>

          <FormGroup>
            <Label>Name</Label>
            <Input id="secondName" name="secondName" onChange={this.handleInputChange} />
            <Label>E-mail</Label>
            <Input
              id="secondEmail"
              name="secondEmail"
              type="email"
              onChange={this.handleInputChange}
            />

            <Button id="secondInvite" name="secondInvite" value="Invite" onClick={this.sendMessage}>
              Invite
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
