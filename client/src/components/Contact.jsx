import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  componentDidMount() {
    document.title = 'Eric Lau — Contact';
  }

  recordValue(state, event) {
    this.setState({
      [state]: event.target.value,
    })
  }

  submitForm(event) {
    console.log('submit', this.state);
    const initialState = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    }
    this.setState(initialState);
  }

  render() {
    return (
      <div>
        <div className="component-header">
          <Header />
          <div>
            <div>
              Let's Work Together

                    <div className="form">
                Name
                      <div className="form-name">
                  <input type="text" placeholder="First Name" value={this.state.firstName} onChange={this.recordValue.bind(this, 'firstName')} />

                  <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.recordValue.bind(this, 'lastName')} />

                </div>
                Email
                      <div className="form-email">
                  <input type="text" value={this.state.email} onChange={this.recordValue.bind(this, 'email')} />
                </div>

                Subject
                      <div className="form-subject">
                  <input type="text" value={this.state.subject} onChange={this.recordValue.bind(this, 'subject')} />
                </div>

                Message
                      <div className="form-message">
                  <input type="text" value={this.state.message} onChange={this.recordValue.bind(this, 'message')} />
                </div>

                <div className="submit">
                  <button type="button" className="button" onClick={this.submitForm.bind(this)}>
                    Submit
                        </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {

};

export default Contact;
