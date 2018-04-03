import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from "axios";
import { Form, Button, TextArea, Icon, Card } from "semantic-ui-react";
import styled from "styled-components";

const FormWrap = styled.div`
  max-width: 40vw;
  height: auto;
  min-height: 530px;
  min-width: 300px;
  margin: 10px auto;
  align-content: center;
  div.card {
    min-height: 540px;
    max-height: 540px;
    background-color: lightgray;
   
    div.pad {
      margin: 50px 2px;
      input {
        margin: 20px auto;
        height: 60px;
      }
    }
    
  }
`;

const ButtonWrap = styled.div`
  text-align: center;
  margin: 45px auto;
`;

class CreatePost extends Component {
  state = {
    new: {
      title: "",
      content: "",
      img: ""
    },
    redirect: false
  };

  
  handleChange = event => {
    //1. Set variable to event target
    const name = event.target.name;
    //2. Spread props for new state
    const newPost = { ...this.state.new };
    //3. Set the state value equal to the entered value
    newPost[name] = event.target.value;
    //4. Set the state equal to the entered value
    this.setState( { new: newPost });
  };


  createNewPost = async event => {
    //1. Stop form from submitting
    event.preventDefault();
    //2. Create a variable that contains state - titled payload
    const payload = {
      title: this.state.new.title,
      img: this.state.new.img,
      content: this.state.new.content
    };
    //3. Make axios call to CREATE a post, passing payload as argument
    await axios.post(`/api/cities/${this.props.cityId}/posts`, payload);
    //4. Execute the call to SHOW the post

    //5. Make sure all posts are pulled from the database
    await this.props.getSingleCity(this.props.cityId);
    //6. Clear state so your form is empty once again
    await this.setState({
      new: { title: "", content: "", img: "" },
      redirect: true
    });

    this.props.toggleShowAdd();
  };


  
  render() {
    if (this.state.redirect) {
      console.log(`/cities/${this.props.cityId}/posts/${this.props.posts[0].id}`)
      return (<Redirect to={`/cities/${this.props.cityId}/posts/${this.props.posts[0].id}`}/>)
    }
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
                required
              />
              <Form.Input
                className="inputs"
                placeholder="Photo Url"
                name="img"
                onChange={this.handleChange}
                value={this.state.img}
              />

              <TextArea
                large
                className="inputs"
                name="content"
                onChange={this.handleChange}
                placeholder="Comment"
                type="text"
                value={this.state.content}
                maxLength='200'
                required
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
