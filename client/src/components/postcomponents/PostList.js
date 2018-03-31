import React, { Component } from "react";
import PostComponent from "./PostComponent";
import styled from "styled-components";
import { Card, Grid } from "semantic-ui-react";

const FlexPosts = styled.div`
  display: flex;
  flex-flow: row-reverse wrap-reverse;
  justify-content: space-around;
  align-items: flex-start;
  align-content: flex-start;
`;
class PostList extends Component {
  render() {
    return (
      <FlexPosts>
        <Segment>
          <Grid.Row columns={3}>
            {this.props.posts.map((song, i) => {
              return (
                <Grid.Column>
                  <PostComponent
                    key={post.id}
                    index={i}
                    songs={this.props.posts}
                  />
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Segment>
      </FlexPosts>
    );
  }
}

export default PostList;
