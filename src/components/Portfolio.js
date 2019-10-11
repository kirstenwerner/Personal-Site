import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import ProjectCard from './ProjectCard.js';
import RecycleIt from './img/RecycleIt.jpg';
import Skillz from './img/Skillz.jpg';
import Rememberall from './img/Rememberall.jpg';
import WaSki from './img/WaSki.jpg'
import {
  Card,
  Container,
  Header,
  Responsive,
  Segment,
  Visibility,
  } from 'semantic-ui-react'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


class Portfolio extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    let recycleIt = {
      id: 1,
      name: "Recycle It!",
      image: RecycleIt,
      tools: [
        "Rails API",
        "PostgreSQL",
        "React",
        "Redux",
        "JavaScript",
        "Semantic React UI"
      ],
      github: {
          frontEnd: "https://github.com/kirstenwerner/recycle-it-frontend",
          backEnd: "https://github.com/kirstenwerner/recycle-it-backend/tree/master",
          mono: ""
        },
      video: "https://www.youtube.com/watch?v=3LWdyHEK30Q&t=140s",
      notes: "Enter your zip code and select a material from a searchable dropdown list to find a recycle center near you that accepts that material. Recycle center locations show as pins on a dynamic google map, and more information about the individual centers is shown when a pin is clicked on. Built with a Rails and PostgreSQL back-end, and a React with Redux front-end with Semantic UI styling.",
      blogPosts: [
        {
          title: "Using Semantic-ui-react to style your app",
          link: "https://medium.com/kirsten-werner/using-semantic-ui-react-to-style-your-app-765ace1d3b8"
        }
      ]
    }


    let skillzApp = {
      id: 2,
      name: "Skillz Gym",
      image: Skillz,
      tools: [
        "Ruby on Rails",
        "PostgreSQL",
        "Javascript",
      ],
      github: {
          mono: "https://github.com/kirstenwerner/skillz_app"
        },
      video: "https://www.youtube.com/watch?v=mp4OY4_PI7Y&t=48s",
      notes: "Skillz Gym is designed to allow the user to create and track daily workouts. 'Skillz' are stored in a database with a wealth of information, and then may be selected for a daily workout with a user-designed prescription. This app is built with Rails and PostgreSQL on the back-end, and Rails, JavaScript, JQuery, and CSS on the front-end. OAuth and Devise are used to allow third party login via FaceBook. Skillz Gym includes forms built in both JavaScript and Ruby on Rails.",
      blogPosts: [
        {
          title: "Updating my Rails app with JavaScript and using Prototype methods",
          link: "https://medium.com/kirsten-werner/updating-my-rails-app-with-javascript-and-using-prototype-methods-ed49c80c4aa9"
        },
        {
          title: "What I learned while writing an MVC web application with Ruby on Rails",
          link: "https://medium.com/kirsten-werner/what-i-learned-while-writing-an-mvc-web-application-with-ruby-on-rails-3a0585e94884"
        }
      ]
    }

    let rememberall = {
      id: 3,
      name: "Seattle Restaurant Rememberall",
      image: Rememberall,
      tools: [
        "Ruby",
        "Sinatra"
      ],
      github: {
          mono: "https://github.com/kirstenwerner/seattle_restaurant_rememberall"
        },
      video: "https://www.youtube.com/watch?v=2frjDOVQb14&t=14s",
      // demo: "",
      notes: "Made as the portfolio project for the Sinatra section of the Flatiron School online program. The app allows users to create an account to keep track of restaurants that they want to remember. Users can save restaurants that they want to remember to try, search, edit, and delete their own lists, view all restaurants entered by all other users, and search the entire database of entered restaurants by cuisine or neighborhood.",
      blogPosts: [
        {
          title: "Writing my first Sinatra web app - Seattle Restaurant Rememberall",
          link: "https://medium.com/kirsten-werner/writing-my-first-sinatra-web-app-seattlerestaurantrememberall-a7fb4e03ce91"
        }
      ]
    }

    let skiReport = {
      id: 4,
      name: "Washington Ski Report",
      image: WaSki,
      github: {
          mono: "https://github.com/kirstenwerner/washington_ski_report"
        },
      tools: [
        "Ruby",
        "CLI"
      ],
      video: "https://www.youtube.com/watch?v=vxdcRvjqmQY&t=6s",
      // demo: "https://hog-iron.herokuapp.com/",
      notes: "WashingtonSkiReport is a Ruby CLI Gem that allows the user to view a list of all of the ski resorts in Washington State, and to select to view more information about each resort, such as a bio, details about the resort, and weather/snow conditions where available.",
      blogPosts: [
        {
          title: "Creating my first Ruby CLI gem",
          link: "https://medium.com/kirsten-werner/creating-my-first-ruby-cli-gem-48e3f5f89222"
        }
      ]

    }

    let projects = [recycleIt, skillzApp, rememberall, skiReport]

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
                opacity: 0.5,
                backgroundImage: `url("./components/img/Forest-Sunrise.jpeg")`,
                backgroundSize: 'cover',
              }}>
                <Header
                  as='h1'
                  inverted
                  content='My Projects'
                  style={{
                    fontFamily: 'Amatic SC',
                    fontSize: '4em',
                    fontWeight: 'normal',
                    // marginBottom: 0,
                    marginTop: '1.5em',
                  }}
                />
              </Header>
            </Container>
            </div>
            <Container>
              <Card.Group itemsPerRow={2}>
                {projects.map(project =>
                  <ProjectCard
                    key={project.id} project={project} padding="20px"/>
                  )}
              </Card.Group>
            </Container>

          </Segment>
        </Visibility>
      </Responsive>
    )
  }
}

export default Portfolio;
