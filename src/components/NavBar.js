import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from "semantic-ui-react";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class NavBar extends Component {
  state = { activeItem: "about" };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    const { activeItem } = this.state;

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
            style={{ minHeight: 50, padding: "0em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item
                  as='p'
                  style={{
                    fontSize: "20px"
                  }}
                >
                  KIRSTEN WERNER
                </Menu.Item>

                <Menu.Item
                  position='right'
                  name='about'
                  as='a'
                  active={activeItem === "about"}
                  onClick={this.handleItemClick}
                >
                  <NavLink to='/' exact>
                    ABOUT
                  </NavLink>
                </Menu.Item>

                <Menu.Item
                  name='portfolio'
                  as='a'
                  active={activeItem === "portfolio"}
                  onClick={this.handleItemClick}
                >
                  <NavLink to='/portfolio' exact>
                    PORTFOLIO
                  </NavLink>
                </Menu.Item>

                <Menu.Item
                  name='resume'
                  as='a'
                  active={activeItem === "resume"}
                  onClick={this.handleItemClick}
                >
                  <NavLink to='/resume' exact>
                    RESUME
                  </NavLink>
                </Menu.Item>

                <Menu.Item
                  name='contact'
                  as='a'
                  active={activeItem === "contact"}
                  onClick={this.handleItemClick}
                >
                  <NavLink to='/contact' exact>
                    CONTACT
                  </NavLink>
                </Menu.Item>

                <a href='https://medium.com/kirsten-werner'>
                  <Menu.Item
                    // href='https://kirstenwerner.github.io'
                    name='blog'
                    as='a'
                    active={activeItem === "blog"}
                    onClick={this.handleItemClick}
                  >
                    BLOG
                  </Menu.Item>
                </a>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

NavBar.propTypes = {
  children: PropTypes.node
};

export default NavBar;
