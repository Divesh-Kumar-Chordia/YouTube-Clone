import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import img1 from "../img/img.webp"
import profile from "../img/profile.jpg"
const Container = styled.div`
  width: ${(props)=>props.type !=="sm" &&"360px"};
  margin-bottom:${(props)=>props.type ==="sm"? "10px":"45px"};
  cursor: pointer;
    color:${({theme})=>theme.text};
 display:${(props)=>props.type ==="sm" && "flex"};
     
  gap:10px;
  `
  const Image = styled.img`
    width: 100%;
    height:${(props)=>props.type ==="sm"?"100px":"202px"};
    background-color: #999;
    border-radius: 9px;
    flex:1;
  &:hover{
        box-shadow: 0 0 11px rgba(33,33,33,.2); 
    border:3px solid ${({theme})=>theme.text};
    border-radius:9px;
    height:${(props)=>props.type ==="sm"?"95px":"196px"};
    width:${(props)=>props.type ==="sm"?"98%":"99%"};
    
  }
`
const Details =styled.div`
    display:flex;
    margin-top:${(props)=>props.type !=="sm"&& "16px"};
    gap:12px;
    flex:1;
`
const ChannelImage = styled.img`
    width:36px;
    height:36px;
    border-radius:50%;
        margin-right:10px;
margin:15px 0.5px 0.5px 4.5px;
    display:${(props)=>props.type ==="sm" && "none"};
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


function Card({type}) {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>

    <Container 
    type={type}
    >
      <Image 
    type={type}
      src={img1}/>
      <Details
    type={type}
      >
        <ChannelImage
    type={type}
         src={profile}/>
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