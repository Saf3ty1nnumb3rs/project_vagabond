import React, { Component } from "react";
import axios from "axios";
import { Form, Button, TextArea, Container, Icon } from "semantic-ui-react";
import styled from "styled-components";



const ButtonWrap = styled.div`
  text-align: center;
  margin-top: 10px;
`;

class CreatePost extends Component {
  state = {
    newPost: {
      title: "",
      content: "",
      img: ""
    }
  };

  handleChange = event => {
    //1. Set variable to event target
    const name = event.target.name;
    //2. Spread props for new state
    const newPost = { ...this.state };
    //3. Set the state value equal to the entered value
    newPost[name] = event.target.value;
    //4. Set the state equal to the entered value
    this.setState(newPost);
  };

  createNewPost = async event => {
    //1. Stop form from submitting
    event.preventDefault();
    //2. Create a variable that contains state - titled payload
    const payload = {
      title: this.state.title,
      img: this.state.img,
      content: this.state.content
    };
    //3. Make axios call to CREATE a post, passing payload as argument
    await axios.post(`/api/cities/${this.state.cityId}/posts`, payload);
    //4. Execute the call to SHOW the post
    await this.props.toggleShowPost();
    //5. Make sure all posts are pulled from the database
    await this.props.getAllPosts();
    //6. Clear state so your form is empty once again
    this.setState({ title: "", content: "", img:"" });
  };
  render() {
    return (
      <FormWrap>
        <Form onSubmit={this.props.createNewPost}>
          <Form.Input
            transparent
            name="title"
            onChange={this.props.handleChange}
            type="text"
            placeholder="Subject"
            value={this.props.newPost.title}
          />
          <Form.Input
            transparent
            placeholder="Photo Url"
            name="img"
            onChange={this.props.handleChange}
            value={this.props.newPost.img}
          />

          <TextArea
            transparent
            name="content"
            onChange={this.props.handleChange}
            placeholder="Comment"
            type="text"
            value={this.props.newPost.content}
          />

          <ButtonWrap>
            <Button animated color="green" onClick={this.toggleShowShout}>
              <Button.Content visible>Post Comment</Button.Content>
              <Button.Content hidden>
                <Icon name="comments" />
              </Button.Content>
            </Button>
          </ButtonWrap>
        </Form>
      </FormWrap>
    );
  }
}

export default CreatePost;
