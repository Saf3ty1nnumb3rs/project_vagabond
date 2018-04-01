import React, { Component } from 'react';
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
                    <Button primary size="mini" onClick={this.props.toggleShowEdit}>
                      Edit
                    </Button>
                  </ButtonWrap>
                </Form>
              </div>
            </Card>
          </PostWrap>
        );
    }
}

export default PostEditView;