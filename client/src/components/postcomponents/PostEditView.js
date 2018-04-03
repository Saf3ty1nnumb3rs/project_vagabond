import React, { Component } from 'react';
import styled from "styled-components";
import axios from "axios";
import { Form, Image, TextArea, Button, Card, Icon } from "semantic-ui-react";

const PostWrap = styled.div`
  max-width: 40vw;
  height: auto;
  min-height: 430px;
  min-width: 300px;
  margin: 10px auto;
  align-content: center;
  div.card {
    min-height: 540px;
    max-height: 540px;
    div.pad {
      margin: 20px 15px;
      img.image {
          max-height: 197px;
          border-radius: 3px;
  }
    }
  }
  
`;

const ButtonWrap = styled.div`
  text-align: center;
  margin: 20px auto;
`;
class PostEditView extends Component {

    handleChange = event => {
        this.props.handlePostChange(event, this.props.posts[this.props.index].id);
      };

    updatePost = async post => {
        await axios.patch(
          `/api/cities/${this.props.cityId}/posts/${
            this.props.posts[this.props.index].id
          }`,
          post
        );
        await (res => {
          this.props.getSingleCity();
        });
      };
    
    render() {
        return (
            <PostWrap>
            <Card centered raised>
              <div className="pad">
                <Form>
                  <Form.Input
                    focus
                    size="small"
                    type="text"
                    name="title"
                    value={this.props.posts[this.props.index].title}
                    onChange={this.handleChange}
                    onBlur={() =>
                      this.updatePost(this.props.posts[this.props.index])
                    }
                  />
                  <Form.Input
                    focus
                    size="small"
                    type="text"
                    name="img"
                    value={this.props.posts[this.props.index].img}
                    onChange={this.handleChange}
                    onBlur={() => this.updatePost(this.props.posts)}
                  />
                  <Image centered fluidclassName='image' src={this.props.posts[this.props.index].img} alt={this.props.posts[this.props.index].title} />
                    
                  <br />
                  <TextArea
                    size="massive"
                    name="content"
                    value={this.props.posts[this.props.index].content}
                    onChange={this.handleChange}
                    onBlur={() =>
                      this.updatePost(this.props.posts[this.props.index])
                    }
                  />
                  {/* <h4>Date:{this.props.posts.date}</h4> */}
                  <ButtonWrap>
              <Button.Group>
                <Button animated primary onClick={this.props.toggleShowEdit}>
                  <Button.Content visible>Edit</Button.Content>
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
                <Button animated color="green" onClick={this.props.toggleShowPost}>
                  <Button.Content visible>Post</Button.Content>
                  <Button.Content hidden>
                    <Icon name="pin" />
                  </Button.Content>
                </Button>
              </Button.Group>
            </ButtonWrap>
                </Form>
              </div>
            </Card>
          </PostWrap>
        );
    }
}

export default PostEditView;