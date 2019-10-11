import React from 'react';
import * as emailjs from 'emailjs-com';
import 'jquery'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let container;

export default class extends React.Component {
  constructor(props) {
  	super(props)

    this.state = {
      name: '',
      email: '',
      feedback: '',
      errors: {
        name: '',
        email_1: '',
        email_2: '',
        feedback: '',
      }
    }
  }

  handleInputChange (event) {
    event.preventDefault()
    const target = event.target
    const name = target.name
    const value = target.value

    this.setState({[name]: value})
  }

  validateMail () {
    let errors = {}
    let formIsValid = true

    if (!this.state.name || this.state.name.length < 3) {
      errors.name = "I'd love it if your name was at least 3 characters long..."
      toast.error(`${errors.name}`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      formIsValid = false
    }

    if (!this.state.feedback || this.state.feedback.length < 10) {
      errors.feedback = `C'mon, the body of your message should say SOMEthing!`
      toast.error(`${errors.feedback}`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      formIsValid = false
    }

    if (!this.state.email || this.state.email.length < 3) {
      errors.email_1 = 'Your email address has got to have at least 3 characters.'
      toast.error(`${errors.email_1}`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      formIsValid = false
    }

    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    if (!pattern.test(this.state.email)) {
      errors.email_2 = 'Email addresses need an @ and a .com'
      toast.error(`${errors.email_2}`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      formIsValid = false
    }

    this.setState({
      errors: errors
    })

    console.log(errors)
    return formIsValid
  }

  sendMessage (event) {
    event.preventDefault()

    if (!this.validateMail()) {
      return
    }

    const templateParams = {
      from_name: this.state.name + '(' + this.state.email + ')',
      to_name: 'kirstenmwerner@gmail.com',
      feedback: this.state.feedback
    }

    emailjs.send('gmail', 'portfoliositecontact', templateParams, 'user_ZQYRt26t8ataC1aDEHvXx')
      .then(function (response) {
        toast.success("Your message has successfully sent!", {
          position: toast.POSITION.BOTTOM_CENTER
        });
        console.log('SUCCESS!', response.status, response.text)
      }, function (err) {
        toast.error('Your message was not able to be sent')
      })

    this.setState({
      name: '',
      email: '',
      feedback: ''
    })
  }

  render() {
	return (
    <div>
    <ToastContainer />
  	<form
      className="ui form"
      id={this.props.id}
      name={this.props.name}
      method={this.props.method}
      action={this.props.action}
    >
        <textarea
          id="name"
          name="name"
          onChange={this.handleInputChange.bind(this)}
          placeholder="your name"
          required
          value={this.state.name}
          error={this.state.errors.name}
          style={{width: '100%'}}
          rows={1}
        />
      <br />
      <br />
        <textarea
        	id="email"
        	name="email"
        	onChange={this.handleInputChange.bind(this)}
        	placeholder="your email address"
        	required
        	value={this.state.email}
          error={this.state.errors.email}
        	style={{width: '100%'}}
          rows={1}
      	/>
        <br />
        <br />
      	<textarea
        	id="feedback"
        	name="feedback"
        	onChange={this.handleInputChange.bind(this)}
        	placeholder="what would you like to chat about?"
        	required
        	value={this.state.feedback}
          error={this.state.errors.feedback}
        	style={{width: '100%', height: '250px'}}
      	/>
      <br />
      <br />
    	<input
        type="button"
        value="Send"
        className="ui button"
        style={{
          fontFamily: 'Amatic SC',
          fontSize: '20px',
          color: 'blue'
        }}
        onClick={this.sendMessage.bind(this)} />
  	</form>
    </div>
	)}
}
