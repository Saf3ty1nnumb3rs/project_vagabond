import React, { Component } from 'react';
import styled from "styled-components";

const LandingWrap = styled.div`
background-image: url('https://media.bizj.us/view/img/3972271/skyline-of-atlanta*1024xx1600-900-0-1384.jpg');
background-size: cover;
z-index: -10;
position: fixed;
height: 100vh;
width: 100vw;
.letter-box {
    margin-top: 50px;
    color: white;
}


`

class LandingView extends Component {
    render() {
        return (
            <LandingWrap>
                <div className="letter-box">
                <h1>Welcome to Vagabond, James Vagabond</h1>
                </div>
                

            </LandingWrap>
        );
    }
}

export default LandingView;