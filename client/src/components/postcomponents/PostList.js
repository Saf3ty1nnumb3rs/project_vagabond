import React, { Component } from "react";
import PostComponent from "./PostComponent";
import styled from "styled-components";
import { Card, Grid, Segment } from "semantic-ui-react";

const FlexPosts = styled.div`
  display: flex;
  flex-flow: row-reverse wrap-reverse;
  justify-content: space-around;
  align-items: flex-start;
  align-content: flex-start;
  margin: 25px auto;
`;



class PostList extends Component {
  render() {
    return (
      <FlexPosts>
        <Segment>
          <Grid stackable>
            {this.props.posts.map((post, i) => {
              return (
               
                 
                  <PostComponent
                    handlePostChange={this.props.handlePostChange}
                    key={post.id}
                    index={i}
                    cityId = {this.props.cityId}
                    posts={this.props.posts}
                    getSingleCity = {this.props.getSingleCity}
                  />
                  
                
              );
            })}
          </Grid>
        </Segment>
      </FlexPosts>
    );
  }
}

export default PostList;
