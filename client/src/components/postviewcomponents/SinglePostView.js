import React, { Component } from "react";
import axios from "axios";
import { Image, Card, Button, Grid, Segment } from "semantic-ui-react";
import styled from "styled-components";

const PostWrap = styled.div`
  width: 80vw;

  margin: 30px auto;
  div.card {
    min-height: 50vh;
  }
  div.header {
    height: 45px;
  }
  #post-head {
    font-size: 40px;
    margin: 10px auto;
  }

  div.description {
    float: right;
  }
`;

class SinglePostView extends Component {
  state = {
    post: {},
    city_name: ""
  };

  componentDidMount() {
    this.getSinglePost();
  }

  getSinglePost = async () => {
    const cityId = this.props.match.params.citiesId;
    console.log(cityId);
    const postId = this.props.match.params.id;
    console.log(postId);
    const res = await axios.get(`/api/cities/${cityId}/posts/${postId}`);
    console.log(res.data);
    this.setState({
      post: res.data.post,
      city_name: res.data.city_name
    });
  };

  goHome = () => {
    this.props.history.push("/");
  };

  goBackToCity = () => {
    this.props.history.push(`/cities/${this.props.match.params.citiesId}`);
  };

  render() {
    return (
     

        <PostWrap>
          <Grid stackable columns={2}>
            <Grid.Column>
              <Segment>
                <Image fluid src={this.state.post.img} />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Card raised centered fluid>
                <Card.Content>
                  <Card.Header>
                    <span id="post-head">{this.state.post.title}</span>
                  </Card.Header>
                  <Card.Description>{this.state.post.content}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button onClick={this.goHome} primary>
                      Home
                    </Button>
                    <Button onClick={this.goBackToCity} color="green">
                      City
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </PostWrap>
     
    );
  }
}

export default SinglePostView;
