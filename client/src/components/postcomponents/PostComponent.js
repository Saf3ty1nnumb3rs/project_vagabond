import React, { Component } from "react";
import axios from "axios";
import PostEditView from "./PostEditView";
import PostView from "./PostView"
import DeleteView from "./DeleteView"





class PostComponent extends Component {
  state = {
    showEdit: false,
    showDelete: false,
    showPost: true
  };
  //DELETE post
  

  removePost = async post => {
    await axios.delete(
      `/api/cities/${this.props.cityId}/posts/${
        this.props.posts[this.props.index].id
      }`
    );
    await this.props.getSingleCity(this.props.cityId);
  };

  toggleShowPost = () => {
    this.setState({
      showEdit: false,
      showDelete: false,
      showPost: true
    });
  };

  toggleShowEdit = async () => {
    await this.setState({ showEdit: !this.state.showEdit });
    this.state.showEdit
      ? await this.setState({
          showDelete: false,
          showPost: false
        })
      : await this.setState({
          showDeleteView: false,
          showPost: true
        });
  };

  toggleShowDelete = async () => {
    await this.setState({
      showDelete: !this.state.showDelete
    });

    this.state.showDelete
      ? await this.setState({
          showEdit: false,
          showPost: false
        })
      : await this.setState({
          showEdit: false,
          showPost: true
        });
  };

  render() {
    return (
      <div>
        {this.state.showEdit ? (
          <PostEditView
            toggleShowEdit={this.toggleShowEdit}
            toggleShowDelete={this.toggleShowDelete}
            toggleShowPost={this.toggleShowPost}
            handlePostChange={this.props.handlePostChange}
            index={this.props.index}
            cityId={this.props.cityId}
            posts={this.props.posts}
            getSingleCity={this.props.getSingleCity}
            removePost={this.removePost}
          />
        ) : (
          null
        )}
        {this.state.showPost ? (
          <PostView
            toggleShowEdit={this.toggleShowEdit}
            toggleShowDelete={this.toggleShowDelete}
            toggleShowPost={this.toggleShowPost}
            index={this.props.index}
            cityId={this.props.cityId}
            posts={this.props.posts}
            removePost={this.removePost}
          /> ) : (
            null
          )}
          {this.state.showDelete ? (
          <DeleteView
            toggleShowDelete={this.toggleShowDelete}
            toggleShowPost={this.toggleShowPost}
            index={this.props.index}
            cityId={this.props.cityId}
            posts={this.props.posts}
            removePost={this.removePost}
          /> ) : (
            null
          )}
          </div>
        )}
     
    
  }


export default PostComponent;
