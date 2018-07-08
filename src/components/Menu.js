import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';


const MenuReg = styled.div`
    width: 248px;
    height: 41px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.22;
    letter-spacing: normal;
    text-align: left;
    color: #464646;
`

const MenuLight = styled.div`
width: 185px;
height: 38px;
font-size: 12px;
font-weight: 300;
line-height: 2;
color: #2a2a2a;

span{
    font-size: 21px;
    font-weight: 700;
    line-height: 1.14;
    color: #464646;
}
`

const CallBtn = styled.button` 
    width: 173px;
    height: 45px;
    border-radius: 25px;
    background-color: #3fc7db;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: #ffffff;
`

class MenuStrong extends Component {
  render() {
    return (
        <div>
      <span>{this.props.addr}</span>
      </div>
    )
  }
}


export default class Menu extends Component {
    render() {
      return (
        <Row>
          <Col lg={3}>
            <MenuReg>Ремонт айфонов в сервисном
центре и на выезде
            </MenuReg>
          </Col>
          <Col lg={3} lgOffset={1}>
            <MenuLight>
            Пн-пт с 10 до 20, сб,вс с 11 до 18
            <MenuStrong addr=" Ленинская, 301 "/>
            </MenuLight>
          </Col>
          <Col lg={3}>
          <MenuLight>
          Звонки принимаются 24 часа
             <MenuStrong addr="8 (846) 922 55 44 "/>
            </MenuLight>
          </Col>
          <Col lg={2}>
            <CallBtn> Заказать звонок </CallBtn>
          </Col>
        </Row>
      )
    }
  }
  