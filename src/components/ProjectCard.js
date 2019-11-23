import React, { Component } from 'react';
import { Card, Image, Button } from 'semantic-ui-react'


class ProjectCard extends Component  {

  render(){
    let project = this.props.project

    let blogPosts = ""
    if (project.blogPosts){
      blogPosts = project.blogPosts.map(post => (
          <div key={post.index}><a href={post.link}>{post.title}</a></div>
        ))
    }

    let videoUrl = ""
    if (project.video){
      videoUrl = 
        <a href={project.video}>
          <Button
            icon="youtube icon big"
            data-tooltip="video walkthrough demo"
            className="youtube-button"
          />
          {/* <i class="youtube icon big"></i> */}
          </a>
    }

    let githubLink = ""
    if (project.github.mono){
        githubLink = <a href={project.github.mono}><i class="github icon big"></i></a>
    } else if (project.github.frontEnd && project.github.backEnd){
        githubLink =
        <>
          <a href={project.github.frontEnd}><i class="github icon big"></i></a>
          <a href={project.github.backEnd}><i class="github icon big"></i></a>
        </>
    }

    let demo = ""
    if (project.demo){
        demo =
        <a href={project.demo}>
          <Button
            icon="large desktop"
            data-tooltip="website"
            className="demo-button"
          />
        </a>
    }

    return (
      <>
        <Card>
          <Image src={project.image} className="card-image"/>

          <Card.Content>
            <Card.Header>
              <br/>
              <div className="large">{project.name}</div>
            </Card.Header>

            <Card.Description className="description">
              <div className = "left">
                <br />
                {project.notes}<br/>
                <br />
              </div>

              <h5>Blog Posts </h5>
              {blogPosts}

            </Card.Description>
          </Card.Content>

          <Card.Content extra className="cardBottom">
          {demo}
          {videoUrl}
          {githubLink}
          </Card.Content>
        </Card>
      </>
    )



  }

}

export default ProjectCard;
