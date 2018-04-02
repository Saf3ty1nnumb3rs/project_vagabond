import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Button, Icon } from "semantic-ui-react";
import axios from "axios";
import Header from "./Header";
import PostList from "../postcomponents/PostList";
import CreatePost from "../postcomponents/CreatePost";

const ButtonWrap = styled.div`
  text-align: center;
  margin: 28px auto;
`;
const HeaderWrapper = styled.div

class SingleCityView extends Component {
  state = {
    city: {},
    posts: [],
    showCreatePost: false
  };

  componentDidMount() {
    this.getSingleCity();
  }
  // this changes the value of the showCreatePost from true to false
  toggleShowAdd = () => {
    this.setState({ showCreatePost: !this.state.showCreatePost });
  };

  getSingleCity = async () => {
    const cityId = this.props.match.params.id;
    const res = await axios.get(`/api/cities/${cityId}`);
    this.setState({
      city: res.data.city,
      posts: res.data.posts
    });
  };

  handlePostChange = (event, id) => {
    console.log(id);
    const newPosts = [...this.state.posts];
    console.log(newPosts);
    const postToChange = newPosts.find(post => post.id === id);
    console.log(postToChange);
    postToChange[event.target.name] = event.target.value;
    console.log(postToChange[event.target.value]);

    this.setState({ posts: newPosts });
  };

  render() {
    return (
      <div>
        <Header city={this.state.city} />
        <ButtonWrap>
          <Button animated color="green" onClick={this.toggleShowAdd}>
            <Button.Content visible>Add New Post</Button.Content>
            <Button.Content hidden>
              <Icon name="comments" />
            </Button.Content>
          </Button>
        </ButtonWrap>
        {this.state.showCreatePost ? (
          <Grid.Column computer={6} tablet={8} mobile={16}>
            <CreatePost
              cityId={this.props.match.params.id}
              getSingleCity={this.getSingleCity}
              toggleShowAdd={this.toggleShowAdd}
              posts={this.state.posts}
              {...this.props}
            />
          </Grid.Column>
        ) : (
            <Grid.Column computer={6} tablet={8} mobile={16}>
              <PostList
                handlePostChange={this.handlePostChange}
                posts={this.state.posts}
                cityId={this.props.match.params.id}
                getSingleCity={this.getSingleCity}
              />

            </Grid.Column>
          )}
      </div>
    );
  }
}

export default SingleCityView;
