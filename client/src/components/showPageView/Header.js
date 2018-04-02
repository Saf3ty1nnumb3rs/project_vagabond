import React, { Component } from 'react';
import styled from "styled-components";
import { Segment } from "semantic-ui-react";

const HeadWrap = styled.div`
margin-top: 65px;
div.segment {
    background-color: silver;
    h1 {
        font-family: 'Permanent Marker', cursive;
    }
}
`
const CityImgWrapper = styled.div`
img {
    width: 80vw;
    box-shadow: 1px 4px 8px 1px rgba(0, 0, 0, 0.8);
    margin-bottom: 50px;
}

`


class Header extends Component {

    render() {
        return (
            <HeadWrap>
                <Segment raised padded>
                <h1>{this.props.city.name}</h1>
                    <CityImgWrapper>
                        <img src={this.props.city.img} alt="" />
                    </CityImgWrapper>
                   

                </Segment>
            </HeadWrap>
        );
    }
}

export default Header;