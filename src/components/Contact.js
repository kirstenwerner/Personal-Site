import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
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
                  <a href="mailto: kirstenmwerner@gmail.com" ><i class="mail icon" /></a>
                  <a href="https://www.linkedin.com/in/kirsten-werner/"><i class="linkedin icon" /></a>
                  <a href="https://github.com/kirstenwerner" ><i class="github icon" /></a>
                </Container>

                <Header
                  as="h4"
                  inverted
                  content='Shoot me an email'
                  style={{
                    fontSize: '2em',
                    fontWeight: 'normal',
                    textAlign: 'center',
                    marginTop: '3em',
                    opacity: '0.9',
                  }}
                />

                <Container
                  style={{
                    width: 800,
                    marginBottom: '3em'
                  }}
                >
                  <form class="ui form">
                    <div class="field">
                      <input type="text" name="email-address" placeholder="Email address" />
                    </div>
                  </form>
                  <br / >
                  <ContactForm />
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
