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
    display: flex;
	position: fixed;
	top: 20vh;
	color: white;
	margin: 0 10vw 20vw 50vw;
	background-color: #88888875;
	border-bottom: 1px solid purple;
	border-top: 1px solid purple;
	padding: 1em 2em;
    span {
        font-family: 'Permanent Marker', cursive;
    }
}


`

class LandingView extends Component {
    render() {
        return (
            <LandingWrap>
                <div className="letter-box">
                <h1>Welcome to <span>Vagabond</span></h1>
                </div>
                

            </LandingWrap>
        );
    }
}

export default LandingView;