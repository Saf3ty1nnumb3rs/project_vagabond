import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Form, Input, Image, TextArea, Button, Card } from "semantic-ui-react";
import PostEditView from "./PostEditView";

const PostWrap = styled.div`
  max-width: 40vw;
  height: auto;
  min-height: 430px;
  min-width: 300px;
  margin: 10px auto;
  align-content: center;
  div.card {
    min-height: 430px;
    div.pad {
      margin: 20px 15px;
    }
  }
`;

const ButtonWrap = styled.div`
  text-align: center;
  margin: 20px auto;
`;

class PostComponent extends Component {
  state = {
    showEdit: false
  };
  //DELETE post
  removePost = async post => {
    await axios.delete(
      `/api/cities/${this.props.cityId}/posts/${
        this.props.posts[this.props.index].id
      }`
    );
    await this.props.getSingleCity();
  };

  toggleShowEdit = () => {
    this.setState({ showEdit: !this.state.showEdit });
  };
  
  render() {
    return (
      <div>
        {this.state.showEdit ? (
          <PostEditView
            toggleShowEdit={this.toggleShowEdit}
            handlePostChange={this.props.handlePostChange}
            key={this.props.key}
            index={this.props.index}
            cityId={this.props.cityId}
            posts={this.props.posts}
            getSingleCity={this.props.getSingleCity}
          />
        ) : (
          <PostWrap>
            <Card centered raised>
              <Card.Content>
                <Card.Header>
                  {this.props.posts[this.props.index].title}
                </Card.Header>
                <Image>
                  <img
                    src={this.props.posts[this.props.index].img}
                    alt={this.props.posts[this.props.index].title}
                  />
                </Image>
                <Card.Description>
                  {this.props.posts[this.props.index].content}
                </Card.Description>
                <Button.Group>
                  <ButtonWrap>
                    <Button primary size="mini" onClick={this.toggleShowEdit}>
                      Edit Post
                    </Button>
                  </ButtonWrap>
                  <ButtonWrap>
                    <Button color="red" size="mini" onClick={this.removePost}>
                      Remove
                    </Button>
                  </ButtonWrap>
                </Button.Group>
              </Card.Content>
            </Card>
          </PostWrap>
        )}
      </div>
    );
  }
}

export default PostComponent;
