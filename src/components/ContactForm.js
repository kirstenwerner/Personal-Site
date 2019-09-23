import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  // Button,
  Container,
  // Divider,
  // Grid,
  Header,
  // Icon,
  // Image,
  // List,
  // Menu,
  Responsive,
  Segment,
  // Sidebar,
  // Visibility,
  } from 'semantic-ui-react';

export default class FeedbackForm extends Component {
  state = {
    feedback: '',
    formSubmitted: false
  };

  handleCancel = this.handleCancel.bind(this);
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  static sender = 'sender@example.com';

  handleCancel() {
    this.setState({
      feedback: ''
    });
  }

  handleChange(event) {
    this.setState({
      feedback: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template
    } = this.props.env;

    this.sendFeedback(
      template,
      this.sender,
      receiverEmail,
      this.state.feedback
    );

    this.setState({
      formSubmitted: true
    });
  }

  sendFeedback(templateId, senderEmail, receiverEmail, feedback) {
    window.emailjs
      .send('mailgun', templateId, {
        senderEmail,
        receiverEmail,
        feedback
      })
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      // Handle errors here however you like
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  render() {
    return (
      <form class="ui form" onSubmit={this.handleSubmit}>
        <textarea
          className="text-input"
          id="contact-entry"
          name="contact-entry"
          onChange={this.handleChange}
          placeholder="What would you like to chat about?"
          required
          value={this.state.feedback}
        />
        <br />
        <br />
        <div className="btn-group">
          <button class="ui button" color='blue' onClick={this.handleCancel}>
            Cancel
          </button>
          <button class="ui button" color="blue" type="submit" value="Send">
            Send
          </button>
        </div>
        <br />
        <br />
      </form>
    );
  }
}

FeedbackForm.propTypes = {
  env: PropTypes.object.isRequired
};
