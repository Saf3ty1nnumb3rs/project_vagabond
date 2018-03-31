import React, { Component } from "react";
import styled from "styled-components";


const PostWrap = styled.div`
img{
    max-width:400px;
    height: auto;
}


`
class PostComponent extends Component {
  removePost = async user => {
    await axios.delete(
      `/api/cities/${this.props.cityId}/posts/${this.props.posts._id}`
    );
    await this.props.getAllposts();
  };
  handleChange = event => {
    this.props.handlePostChange(event, this.props.posts._id);
  };
  updatePost = async Post => {
    await axios.patch(
      `/api/cities/${this.props.cityId}/posts/${this.props.posts._id}`,
      post
    );
    await (res => {
      this.props.getAllposts();
    });
  };

  render() {
    return (
      <PostWrap>
        <Form>
          <Input
            focus
            size="small"
            type="text"
            name="title"
            value={this.props.posts.title}
            onChange={this.handleChange}
            onBlur={() => this.updatePost(this.props.posts)}
          />
          <Input
            focus
            size="small"
            type="text"
            name="img"
            value={this.props.posts.img}
            onChange={this.handleChange}
            onBlur={() => this.updatePost(this.props.posts)}
          />
          <Image centered fluid>
              <img src={this.props.post.img} alt="" />
            </Image>
          <br />
          <TextArea
            size="massive"
            name="content"
            value={this.props.posts.content}
            onChange={this.handleChange}
            onBlur={() => this.updatePost(this.props.posts)}
          />
          {/* <h4>Date:{this.props.posts.date}</h4> */}
          <Button color="red" size="mini" onClick={this.removePost}>
            Remove
          </Button>
        </Form>
      </PostWrap>
    );
  }
}

export default PostComponent;
