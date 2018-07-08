import React, { Component } from 'react';
import '../App.css';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
    font-size: 40px;
    font-weight: 700;
    line-height: 1.25;
    text-align: left;
    color: #ffffff;

    span {
        font-size: 25px;
        line-height: 0.75;
        display:block;
    }
`
const LightText = styled.div`
    font-size: 18px;
    font-weight: 300;
    line-height: 1.56;
    text-align: left;
    color: #ffffff;
    margin-top: 54px;
`

const CallBtn = styled.button` 
    width: 245px;
    height: 64px;
    border-radius: 32px;
    background-color: #ffa14b;
    font-size: 18px;
    line-height: 1.33;
    text-align: center;
    color: #ffffff;
    margin-top: 32px;

`
export default class Main extends Component {
  render() {
    return (
      <Row>
          <Col lg={5}>
            <Repair>
            Качественный ремонт
            <span>iphone за 35 минут и гарантия 1 год </span>
            </Repair>
            <LightText>
            Оставьте заявку на бесплатную диагностику без очереди,
и получите защитное стекло, стоимостью 1000 рублей,
с установкой в подарок!
            </LightText>
            <CallBtn>
            Отправить заявку!
            </CallBtn>
          </Col>
          <Col lg={6} lgOffset={1}>
          </Col>
      </Row>
    )
  }
}
