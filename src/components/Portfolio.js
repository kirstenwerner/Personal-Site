import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import ProjectCard from './ProjectCard.js';
import RecycleIt from './img/RecycleIt.jpg'
import {
  // Button,
  Card,
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
          frontEnd: "https://github.com/joanrig/congress_front_end",
          backEnd: "https://github.com/joanrig/congress_api",
          mono: ""
        },
      video: "https://www.loom.com/share/7f2536bd3ee84514a88d96a6d242d46e",
      notes: "A guessing game. Search and sort Congress members by party, gender and fun traits like most missed votes! Then guess who's who and click to reveal the answer. You can also search for bills. Built with React, Redux and Semantic React UI on the front end; and a Rails API, ActiveModel and Postgres on the back end.",
      blogPosts: [
        {
          title: "Hey, Mr. Postman",
          link: "https://medium.com/@joanrigdon/hey-mr-postman-f30b9662a786"
        },
        {
          title: "Seeding your database from an external API",
          link: "https://medium.com/@joanrigdon/rails-api-project-part-2-the-art-of-seeding-256a21747ab7"
        },
        {
          title: "Adding a React-Redux front-end",
          link: "https://medium.com/@joanrigdon/rails-api-project-part-3-adding-a-front-end-with-react-redux-be6ad25865d6"
        },
        {
          title: "How I Deployed my React-on-Rails app to Heroku",
          link: "https://medium.com/@joanrigdon/how-i-deployed-my-react-on-rails-app-to-heroku-9a07cee054e6"
        },

      ]
    }


    let skillzApp = {
      id: 2,
      name: "Mars Rover Photo Finder",
      // image: ,
      type: "solo",
      tools: [
        "React",
        "Javascript",
        "Semantic React UI",
      ],
      github: {
          mono: "https://github.com/joanrig/mars_rover_pics"
        },
      video: "",
      demo: "https://mars-rover-staging.herokuapp.com/",
      notes: "Designed for curious kids of all ages, this app  includes basic information about the rovers, route maps, short videos and best of all, an easy way to filter more than 360,000 photos taken by NASA Rovers! Choose a Rover, a date and a camera and then click Get Photos to see amazing photography. Built with React.js. I experimented with using Event Emitters instead of Redux and had a lot of fun playing with timers and Semantic React UI's Transition element.",
      blogPosts: [
        {
          title: "Managing State with Event Emitters",
          link: "https://medium.com/@joanrigdon/managing-state-with-event-emitters-f4125210b7d?sk=0a89f646ede6ef1c82d9fd961b0fe973"
        }
      ]
    }

    let rememberall = {
      id: 3,
      name: "Vacation Bidder",
      // image: ,
      type: "solo",
      tools: [
        "Ruby on Rails",
        "PostgreSQL",
        "Javascript",
        "Bootstrap",
        "OmniAuth",
        "Devise"
      ],
      github: {
          mono: "https://github.com/joanrig/vacation_bidder"
        },
      video: "https://www.loom.com/share/b46f1f2896d64e1d9f90be2968037326",
      demo: "",
      notes: "Add to your bucket list and then turn bucket list items into vacations. Add attractions and schedules to vacations. This is where I learned to secure logins, third-party login and conditional logic to render background pictures based on object attributes. Built with Rails, Javascript and Bootstrap on the front end; and Rails, ActiveModel and Postgres on the back end.",
      blogPosts: [
        {
          title: "Nested Routes and Nested Forms",
          link: "https://medium.com/@joanrigdon/rails-portfolio-project-vacation-bidder-part-1-db9cf4590141"
        }
      ]
    }

    let skiReport = {
      id: 4,
      name: "Hog Iron",
      // image: ,
      type: "group",
      contributors: ["Lizzie Chan", "Vinh Do", "Bryn Bennet"],
      github: {
          mono: "https://github.com/joanrig/Hog-Iron"
        },
      tools: [
        "Ruby on Rails",
        "PostgreSQL",
        "Bootstrap"
      ],
      video: "",
      demo: "https://hog-iron.herokuapp.com/",
      notes: "A mock Harry Potter site where you can be sorted into a house and sign up for and drop classes. I contributed logic for the sorting hat and Boostrap styling for most pages. Built with Rails and Bootstrap on the front end and Rails, ActiveModel and Postgres on the back end.",
      blogPosts: ""
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
