import React, { Component } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import {  Image, Button, Card, Icon } from "semantic-ui-react";


const PostWrap = styled.div`
  max-width: 40vw;
  max-height: 500px;
  min-width: 300px;
  margin: 10px auto;
  align-content: center;
  div.card {
    min-height: 540px;
    max-height: 540px;
    img {
      max-height: 197px;
    }
  }
`;

const ButtonWrap = styled.div`
  text-align: center;
  margin: 20px auto;
`;

class PostView extends Component {
  render() {
    return (
      <PostWrap>
        <Card centered raised>
          <Card.Content>
            <Card.Header>
              {this.props.posts[this.props.index].title}
            </Card.Header>
            <Link to={`/cities/${this.props.posts[this.props.index].city_id}/posts/${this.props.posts[this.props.index].id}`}>
            <Image src={this.props.posts[this.props.index].img}
                alt={this.props.posts[this.props.index].title}/>
             
            </Link>
            <Card.Description>
              {this.props.posts[this.props.index].content}
            </Card.Description>
            <ButtonWrap>
              <Button.Group>
                <Button animated primary onClick={this.props.toggleShowEdit}>
                  <Button.Content visible>Edit Post</Button.Content>
                  <Button.Content hidden>
                    <Icon name="edit" />
                  </Button.Content>
                </Button>
                <Button animated color="red" onClick={this.props.toggleShowDelete}>
                  <Button.Content visible>Delete</Button.Content>
                  <Button.Content hidden>
                    <Icon name="ban" />
                  </Button.Content>
                </Button>
              </Button.Group>
            </ButtonWrap>
          </Card.Content>
        </Card>
      </PostWrap>
    );
  }
}

export default PostView;
