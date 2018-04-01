import React, { Component } from "react";
import axios from "axios";
import {
  Form,
  Button,
  TextArea,
  Icon,
  Card
} from "semantic-ui-react";
import styled from "styled-components";

const FormWrap = styled.div`
  max-width: 40vw;
  height: auto;
  min-height: 430px;
  min-width: 300px;
  margin: 10px auto;
  align-content: center;
  div.card {
    min-height: 430px;
    div.pad {
      margin: 50px 2px;
    }
  }
`;

const ButtonWrap = styled.div`
  text-align: center;
  margin: 50px auto;
`;

class CreatePost extends Component {
  state = {
    title: "",
    content: "",
    img: ""
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
    await axios.post(`/api/cities/${this.props.cityId}/posts`, payload);
    //4. Execute the call to SHOW the post
    this.props.toggleShowAdd();
    //5. Make sure all posts are pulled from the database
    this.props.getSingleCity();
    //6. Clear state so your form is empty once again
    this.setState({ title: "", content: "", img: "" });
  };
  render() {
    return (
      <FormWrap>
        <Card centered raised>
          <div className="pad">
            <Form onSubmit={this.createNewPost}>
              <Form.Input
                className="inputs"
                name="title"
                onChange={this.handleChange}
                type="text"
                placeholder="Subject"
                value={this.state.title}
              />
              <Form.Input
                className="inputs"
                placeholder="Photo Url"
                name="img"
                onChange={this.handleChange}
                value={this.state.img}
              />

              <TextArea
                className="inputs"
                name="content"
                onChange={this.handleChange}
                placeholder="Comment"
                type="text"
                value={this.state.content}
              />

              <ButtonWrap>
                <Button animated color="green" type="submit">
                  <Button.Content visible>Post Comment</Button.Content>
                  <Button.Content hidden>
                    <Icon name="comments" />
                  </Button.Content>
                </Button>
              </ButtonWrap>
            </Form>
          </div>
        </Card>
      </FormWrap>
    );
  }
}

export default CreatePost;
