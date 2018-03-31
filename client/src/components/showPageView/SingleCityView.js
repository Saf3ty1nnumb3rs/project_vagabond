import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import axios from 'axios';
import Header from './Header'



class SingleCityView extends Component {
    state = {
        city: {},
        posts: []
    }

    componentDidMount() {
        this.getSingleCity()
    }


    getSingleCity = async () => {
        const cityId = this.props.match.params.id
        const res = await axios.get(`/api/cities/${cityId}`)
        this.setState({
            city: res.data.city,
            posts: res.data.posts
        })
        
    };

    render() {
        return (
            <div>
               <Header city={this.state.city}/>
         
            </div>
        );
    }
}

export default SingleCityView;