import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { Component } from 'react';
import {
  Container,
  Header,
  Responsive,
  Segment,
  Visibility,
  } from 'semantic-ui-react';
import ContactForm from './ContactForm'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


class Contact extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 300, padding: '1em 1em' }}
            vertical
          >
          <div>
            <Container>
              <Header style={{
                width: getWidth,
                height: 320,
                display: 'inline-block',
                opacity: 0.8,
                // backgroundImage: `url("./components/img/Forest-Sunrise.jpeg")`,
                backgroundSize: 'cover',
              }}>
                <Header
                  as='h1'
                  inverted
                  content='Say Hi!'
                  style={{
                    fontFamily: 'Amatic SC',
                    fontSize: '4em',
                    fontWeight: 'normal',
                    // marginBottom: 0,
                    marginTop: '1.5em',
                  }}
                />
                <Container
                  style={{
                    fontSize: '2em'
                  }}
                >
                  <a href="https://twitter.com/KirstenWerner8" ><i className="twitter icon" /></a>
                  <a href="https://www.linkedin.com/in/kirsten-werner/"><i className="linkedin icon" /></a>
                  <a href="https://github.com/kirstenwerner" ><i className="github icon" /></a>
                  <a href="https://medium.com/kirsten-werner"><i className="medium icon" /></a>
                </Container>
                <Header
                  as="h4"
                  inverted
                  content='Shoot me an email'
                  style={{
                    fontFamily: 'Amatic SC',
                    fontSize: '2em',
                    fontWeight: 'normal',
                    textAlign: 'center',
                    marginTop: '3em',
                    opacity: '0.9',
                  }}
                />
                <Container style={{width: 800, marginBottom: '3em'}}>
                  <ToastContainer />
                  <ContactForm id='contact-form' className='contact-form' name='contact-form' method='post' action='' />
                </Container>

              </Header>
            </Container>
          </div>
          </Segment>
        </Visibility>
      </Responsive>
    )
  }
}

export default Contact;
