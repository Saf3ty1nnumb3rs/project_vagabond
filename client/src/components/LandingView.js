import React, { Component } from 'react';
import styled from "styled-components";

const LandingWrap = styled.div`
background-image: url('https://media.bizj.us/view/img/3972271/skyline-of-atlanta*1024xx1600-900-0-1384.jpg');
background-size: cover;
height: 100vh;
width: 100vw;


`

class LandingView extends Component {
    render() {
        return (
            <LandingWrap>
                <h1>Welcome to Vagabond, James Vagabond</h1>
                

            </LandingWrap>
        );
    }
}

export default LandingView;