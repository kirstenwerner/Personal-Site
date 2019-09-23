import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  } from 'semantic-ui-react'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class Footer extends Component {
  state = { activeItem: 'about' }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { children } = this.props
    const { fixed } = this.state
    const { activeItem } = this.state

    return (
      <Responsive>
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Sitemap' />
                <List link inverted>
                  <List.Item as='a'>
                    <NavLink to='/' exact>About</NavLink>
                  </List.Item>
                  <List.Item as='a'>
                    <NavLink to='/portfolio' exact>Portfolio</NavLink>
                  </List.Item>
                  <List.Item as='a'>
                    <NavLink to='/resume' exact>Resume</NavLink>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Where you can find me' />
                <List link inverted>
                  <List.Item as='a'>
                    <a href='https://www.linkedin.com/in/kirsten-werner/'>LinkedIn</a>
                  </List.Item>
                  <List.Item as='a'>
                    <a href='https://github.com/kirstenwerner' exact>Github</a>
                  </List.Item>
                  <List.Item as='a'>
                    <a href='https://kirstenwerner.github.io' exact>Blog</a>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  Let's create something awesome together!
                </Header>
                <p>
                  <Button>
                    <NavLink to='/contact' exact>Contact Me</NavLink>
                  </Button>
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </Responsive>
  )
  }
}

export default Footer
