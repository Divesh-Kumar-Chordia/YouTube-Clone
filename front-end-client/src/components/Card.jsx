import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import img1 from "../img/img.webp"
import profile from "../img/profile.jpg"
const Container = styled.div`
  width: 360px;
  margin-bottom:45px;
  cursor: pointer;
    color:${({theme})=>theme.text};
 
     
  
  `
  const Image = styled.img`
    width: 100%;
    height:202px;
    background-color: #999;
    border-radius: 9px;
    
  &:hover{
        box-shadow: 0 0 11px rgba(33,33,33,.2); 
    border:3px solid ${({theme})=>theme.text};
    border-radius:9px;
    height:196px;
    width:99%;
    
  }
`
const Details =styled.div`
    display:flex;
 
    gap:12px;
`
const ChannelImage = styled.img`
    width:36px;
    height:36px;
    border-radius:50%;
        margin-right:10px;
margin:15px 0.5px 0.5px 4.5px;
    
`
const Texts =styled.div``
const Title = styled.h1`
font-size:16px;
font-weight:500;
color:${({theme})=>theme.text};
`
const ChannelName = styled.h2`
    font-size:14px;
    color:${({theme})=>theme.textSoft};
    margin:10px 0px;
    `
const Info = styled.div`
font-size:14px;
    color:${({theme})=>theme.textSoft};
    `


function Card() {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>

    <Container>
      <Image src={img1}/>
      <Details>
        <ChannelImage src={profile}/>
        <Texts>
          <Title>
        5 Ways to Look More Confident - When You're Struggling To | Shade Zahrai
          </Title>
          <ChannelName>Shade Zahrai</ChannelName>
          <Info>660,990 views 3 weeks ago</Info>
          </Texts>

    </Details>

    </Container>
    </Link>
  )
}

export default Card