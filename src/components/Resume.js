import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react'
import {
  // Button,
  Container,
  // Divider,
  // Grid,
  // Header,
  // Icon,
  // Image,
  // List,
  // Menu,
  // Responsive,
  // Segment,
  // Sidebar,
  // Visibility,
  } from 'semantic-ui-react'

class Resume extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Container
        style={{
          backgroundColor: "lightgrey"
        }}>
        <div>
            <h1>
              <br />
              <bold>Kirsten Werner</bold>
            </h1>
            <Container
              style={{
                fontSize: '2em'
              }}
            >
            <h1>
              <a href="https://www.linkedin.com/in/kirsten-werner/"><i class="linkedin icon" /></a>
              <a href="https://github.com/kirstenwerner" ><i class="github icon" /></a>
              <br />
            </h1>
            </Container>
              <br />
              <p><b>
                Full stack web developer with a passion for problem solving and organization. With experience in Ruby on Rails, JavaScript, and React and a background in analytical chemistry, I bring strong skills in time and project management, and an acute attention to detail, that lead to high quality production. Leveraging my education and professional experience in the environmental sciences, I would love to combine my skills in software engineering and understanding of the underlying science to address environmental issues in a user friendly way.
              </b></p>
              <br />

              <h3>Technical Projects</h3>
              <br />

              <h5>Recycle It!  <a href="https://github.com/kirstenwerner/recycle-it-frontend"><i class="github icon" /></a><a href="https://www.youtube.com/watch?v=3LWdyHEK30Q&t=12s"><i class="youtube icon" /></a></h5>
              <p>
                <i>React app with a Ruby on Rails backend and PostgreSQL database; users can search for a recycle center near them that accepts a specific material they are trying to dispose of by zip code and material name.</i>
              </p>
              <p>
                + Fetches data about recycle centers and recyclable materials from Earth911<br />
                + Uses Google Maps Javascript API to display recycle centers in the selected area, and<br />
                + Applies Semantic UI React to present data as cards<br />
                + Searches and sorts data using Ruby, JavaScript, and JSX<br />
                + Makes use of react-router and proper RESTful routing<br />
              </p>

              <h5>Skillz Gym  <a href="https://github.com/kirstenwerner/skillz_app/tree/js"><i class="github icon" /></a><a href="https://www.youtube.com/watch?v=mp4OY4_PI7Y&t=11s"><i class="youtube icon" /></a></h5>
              <p>
                <i>Rails web app for creating and tracking daily workouts targeting specific muscle groups, with descriptions and demos of skills.</i>
              </p>
              <p>
                + Built with Rails and PostgreSQL on the back-end, and Rails, JavaScript, JQuery, and CSS on the front-end<br />
                + Uses OAuth and Devise to allow third party login via FaceBook<br />
                + Includes forms built in both JavaScript and Ruby on Rails<br />
              </p>

              <h5>Washington Ski Report  <a href="https://github.com/kirstenwerner/washington_ski_report"><i class="github icon" /></a><a href="https://www.youtube.com/watch?v=vxdcRvjqmQY&t=5s"><i class="youtube icon" /></a></h5>
              <p>
                <i>Command Line Interface app that serves up information about Washington State ski resorts current and forecasted conditions.</i>
              </p>
              <p>
                + Scrapes data from skibum.net and skicentral.com using Nokogiri<br />
                + Uses Ruby to search and sort data<br />
              </p>
              <br />

              <h3>Technical Skills</h3>
              <br />
              <p>
                Ruby, Sinatra, Rails, SQL, JavaScript, React, Redux, CSS, HTML
              </p>
              <br />

              <h3>Employment History</h3>
              <br />

              <h5>Ivar’s Salmon House, Seattle, WA</h5>
              <p><b>Server and Bartender, <i>April 2017 - present</i></b></p>
              <p>
                + Work with both front-of-house and back-of-house staff to prepare and maintain restaurant for daily operation<br />
                + Greet each guest with enthusiasm and friendly demeanor to ensure a positive experience<br />
              </p>

              <h5>IEH Laboratories, Seattle, WA</h5>
              <p><b>Analytical Chemist, <i>January 2016 - April 2017</i></b></p>
              <p>
                + Operation, maintenance, troubleshooting, and programing analytical instrumentation for a variety of chemical testing tasks<br />
                + Managed production schedules, prioritizing client orders to meet strict deadlines<br />
                + Co-authored and published peer reviewed article: Clostridium tepidum sp. nov,. a close relative of Clostridium sporogenes and Clostridium botulinum Group I<br />
              </p>

              <h5>AGQ USA, Oxnard, CA</h5>
              <p><b>Analytical Chemist, <i>September 2012 - December 2015</i></b></p>
              <p>
                + Project lead on FDA import detentions; Organizing traceability, QA/QC, writing and organizing submission packages.<br />
                + Submitted over 500 external lab packages in 12 month period<br />
                + Performed review and validation of analytical data for FDA, CA-DPA, and international compliance<br />
                + Developed cost-effective solutions to adhere to recognized scientific methods, best practices, and government standards<br />
              </p>
              <br />

              <h3>Education</h3>
              <br />

              <h5>Flatiron School - 2019</h5>
              <p>+ Full Stack Web Development, Ruby on Rails and JavaScript online program</p>

              <h5>Western Washington University - Bellingham, Washington - 2012</h5>
              <p>+ Bachelor of Science: Environmental Science</p>
              <br />
              <br />
              <br />
          </div>
      </Container>
    )
  }
}

export default Resume;
