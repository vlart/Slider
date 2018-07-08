import React, { Component } from 'react'
import styled from 'styled-components'


const StyledLink = styled.a`
    height: 14px;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.71;
    color: ${props => props.active ? 'pink' : 'lightgray'};
    padding-right: 33px;
    border-right: 1px dotted #fff;

      &:hover{
        color: #8d8d8d;
        text-decoration: none;
      }

      &:last-child {
        border-right: 0;
      }
`

export default class Link extends Component {
  render() {
    return (
      <div>
        <StyledLink href={this.props.link}> {this.props.text}</StyledLink>
      </div>
    )
  }
}
