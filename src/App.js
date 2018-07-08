import React, { Component } from 'react';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import Header from './components/Header'
import Main from './components/Main'
import Menu from './components/Menu'

const url = process.env.PUBLIC_URL + '/img/bg.png'

const HeaderWrapper = styled.header`
  width: 100%;
  height: 49px;
  opacity: 0.8;
  background-color: #242424;
`

const MenuWrapper = styled.div`
  height: 89px;
  padding-top:20px;
`
const MainWrapper = styled.main`
  height: 600px;
  padding-top: 130px; 
  background: url(${url}) no-repeat;
  background-size: cover;
`
export default class App extends Component {
  render() {
    return (
      <div class="App">
        <HeaderWrapper>
          <Grid>
            <Header />
          </Grid>
        </ HeaderWrapper>
        <MenuWrapper>
          <Grid>
            <Menu />
          </Grid>
        </MenuWrapper>
        <MainWrapper>
          <Grid>
            <Main />
          </Grid>
        </MainWrapper>      </div>
    )
  }
}


