import React, { Component } from 'react';
import styled from "styled-components";
import { Segment } from "semantic-ui-react";

const HeadWrap = styled.div`
margin-top: 65px;
div.segment {
    background-color: pink;
}
`
const CityImgWrapper = styled.div`
img {
    width: 80vw;
    border-radius: 3%;
}

`


class Header extends Component {

    render() {
        return (
            <HeadWrap>
                <Segment raised padded>
                    <CityImgWrapper>
                        <img src={this.props.city.img} alt="" />
                    </CityImgWrapper>
                    <h1>{this.props.city.name}</h1>

                </Segment>
            </HeadWrap>
        );
    }
}

export default Header;