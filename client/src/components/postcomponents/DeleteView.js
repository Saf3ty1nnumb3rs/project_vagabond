import React, { Component } from "react";
import { Button, Card, Icon } from "semantic-ui-react";
import styled from "styled-components";

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
      margin: 50px 2px;
    }
  }
`;
const ButtonWrap = styled.div`
  text-align: center;
  margin: 20px auto;
`;

class DeleteView extends Component {
  handleClick = () => {
    this.props.removePost();
  };

  render() {
    return (
      <PostWrap>
        <Card centered raised>
          <div className="pad">
            <p>
              Are you sure you want to delete {this.props.posts[this.props.index].title} ?
            </p>
          </div>
          <ButtonWrap>
            <Button.Group>
              <Button animated color="red" onClick={this.handleClick}>
                <Button.Content visible>Delete</Button.Content>
                <Button.Content hidden>
                  <Icon name="ban" />
                </Button.Content>
              </Button>
              <Button
                animated
                color="green"
                onClick={this.props.toggleShowDelete}
              >
                <Button.Content visible>Return</Button.Content>
                <Button.Content hidden>
                  <Icon name="pin" />
                </Button.Content>
              </Button>
            </Button.Group>
          </ButtonWrap>
        </Card>
      </PostWrap>
    );
  }
}

export default DeleteView;
