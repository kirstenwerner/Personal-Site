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
import Selfie from './img/selfie.jpeg'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const HomepageHeading = ({ mobile }) => (
  <div className="forest" >
  <Container>
    <Header style={{
      width: getWidth,
      height: 320,
      display: 'inline-block',
      opacity: 0.9,
      backgroundImage: `url("./components/img/Forest.jpg")`,
      backgroundSize: 'cover',
    }}>
      <Header
        as='h1'
        content='My Story'
        style={{
          fontFamily: 'Amatic SC',
          fontSize: mobile ? '2em' : '5em',
          fontWeight: 'normal',
          color: 'black',
          // marginBottom: 0,
          marginTop: mobile ? '1.5em' : '1.5em',
        }}
      />
      <Header
        as='p'
        content='Environmental Chemist to Software Engineer'
        style={{
          fontFamily: 'Amatic SC',
          fontSize: mobile ? '1.2em' : '1.5em',
          fontWeight: 'bold',
          color: 'pink',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      />
    </Header>
  </Container>
  </div>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
            style={{ minHeight: 400, padding: '1em 1em' }}
            vertical
          >
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' onClick={this.handleItemClick}>
            <NavLink to='/' exact>ABOUT</NavLink>
          </Menu.Item>
          <Menu.Item as='a' onClick={this.handleItemClick}>
            <NavLink to='/portfolio' exact>PORTFOLIO</NavLink>
          </Menu.Item>
          <Menu.Item as='a' onClick={this.handleItemClick}>
            <NavLink to='/resume' exact>RESUME</NavLink>
          </Menu.Item>
          <Menu.Item as='a' onClick={this.handleItemClick}>
            <NavLink to='/contact' exact>CONTACT</NavLink>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}



const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment
      inverted
      style={{ padding: '6em 0em' }}
      vertical
    >
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Image bordered rounded size='large' src={Selfie} />

          </Grid.Column>
          <Grid.Column floated='right' width={8}>
            <Header
              inverted
              as='h3'
              style={{
                fontFamily: 'Amatic SC',
                fontSize: '2em'
              }}
            >
                Where I came from...
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Raised in the Pacific Northwest, I’ve always been passionate about being outdoors, and by association, the environment.  Growing up hiking and camping, I naturally developed a respect for nature, and a sense of responsibility to do my part in its stewardship that led me from collecting money door-to-door to donate to ‘save the rainforest’ at 5 years old (admittedly a naive attempt), to receiving a Bachelor of Science in Environmental Science from Western Washington University.
              <br />
              <br />
              Degree in hand, I worked for a number of years as an Analytical Chemist for food safety and environmental/agronomy laboratories. This experience allowed me to fine tune my problem solving skills, and to focus my attention to detail.
            </p>
            <Header
              inverted
              as='h3'
              style={{
                fontFamily: 'Amatic SC',
                fontSize: '2em'
              }}
            >
              A-ha!
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            The more I worked in the Hard Sciences, the more I realized that what interested me *more* than what was going on at the molecular level, was what we were doing with the information. How did we track it? How did we convey the data back to clients? Or better yet, to laymen? I realized that the most interesting data in the entire world, is only as useful as it is successfully communicated and utilized.
            <br />
            <br />
            My interest in Software Engineering was born!
            </p>

            <Header
              inverted
              as='h3'
              style={{
                fontFamily: 'Amatic SC',
                fontSize: '2em'
              }}
            >
              Where I'm going...
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            I am excited to bring my analytical mind combined with my skills in developing in languages such as Ruby, Javascript, along with various frameworks and tools, to create apps that add value to the world around me.
            <br />
            <br />
            Most recently, I have been working on the finishing touches of a React with Redux web application that allows users to locate recycle centers near them that accept whichever specific material the user is trying to dispose of.
            <br />
            <br />
            I am looking forward to the opportunity to continue honing my skills as a developer, and to continue to build apps and programs that better this home we call Earth.
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column textAlign='center'>
            <br />
            <br />
            <Button size='huge'>
              <NavLink to='/portfolio' exact>See what I've been working on!</NavLink>
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout
