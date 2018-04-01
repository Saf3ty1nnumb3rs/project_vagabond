import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Form, Input, Image, TextArea, Button, Card } from "semantic-ui-react";

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

  toggleShowEdit = () => {
    this.setState({ showEdit: !this.state.showEdit });
  };
  render() {
    return (
      <div>
        {this.state.showEdit ? (
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
                  <Image centered fluid>
                    <img src={this.props.posts[this.props.index].img} alt="" />
                  </Image>
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
                    <Button primary size="mini" onClick={this.toggleShowEdit}>
                      Edit
                    </Button>
                  </ButtonWrap>
                </Form>
              </div>
            </Card>
          </PostWrap>
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
