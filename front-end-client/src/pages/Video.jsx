import React, { useState } from 'react';
import styled from "styled-components";
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { MdPlaylistAdd } from 'react-icons/md';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { IoMdShareAlt } from 'react-icons/io';
import profile from "../img/profile.jpg";
import Comments from '../components/Comments';
import Card from '../components/Card';
const Container = styled.div`
display:flex;
gap:24px;
color:${({theme})=>theme.text};
`

const Content = styled.div`
flex:5;
padding:10px 0px;
`

const VideoWrapper = styled.div`
width: 790px;
height: 575px;
left: 0px;
top: 0px;
outline: 0px;
object-fit: cover;
display: block;
`

const Title = styled.div`
font-size:18px;
font-weight:400;
margin-top:20px;
margin-bottom:10px;
color:${({theme})=>theme.text};
`



const Details = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;`

const Info = styled.span`
/** group of like dislike button */
color:${({theme})=>theme.textSoft};
`
const Buttons = styled.div`
  display:flex;
  gap:20px;
  justify-content:space-between;
  cursor:pointer;`
const Button = styled.div`
color:${({theme})=>theme.text};
`
const Hr =styled.hr`
   margin:15px 0px;
    border: 0.5px solid ${({theme})=>theme.soft};
`

const Recommendation = styled.div`
flex:2;`

const Channel = styled.div`
display:flex;
  justify-content:space-between;`

const ChannelImage = styled.img`
width:50px;
height:50px;
border-radius:50%;
  
margin:5px 0.5px 0.5px 0px;
padding:0px;
`
const ChannelInfo = styled.div`
  display:flex;
  gap:20px;`
const Subscribe = styled.button`
outline:none;
border:none;
font-weight:bold;
color:white;
cursor:pointer;
border-radius:4px;
height:max-content;
padding:10px 20px;
font-size:12px;
`

const ChannelDetail = styled.div`
display:flex;
flex-direction:column;`
const ChannelName = styled.span`
font-weight:500;`
const ChannelCounter = styled.span`
  font-size:10px;
  margin:5px 0px 20px 0px;`
const Description = styled.div`
color:${({theme})=>theme.text};
font-size:12px;
`
function Video() {
  const [color,setChange]=useState(true);
  const colorHandler = ()=>{
   setChange(!color);
  }
  
  return (
  <Container>
    <Content>
    <VideoWrapper>
    <iframe 
    width="790"
    height="510"
      src="https://www.youtube.com/embed/YgZMbTm3oxs" 
      title="YouTube video player"
       frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        >
    
        </iframe>

    </VideoWrapper>
    <Title>5 Ways to Look More Confident 
    When You're Struggling To | Shade Zahrai
    </Title>

    <Details>

    <Info>
      414,023 views . 9 May,2021
    </Info>
    <Buttons>
      <Button><AiOutlineLike/>6.6k</Button>
      <Button><AiOutlineDislike/>323</Button>
      <Button><IoMdShareAlt/>Share</Button>
      <Button><MdPlaylistAdd/>Save</Button>
      <Button><BiDotsVerticalRounded/></Button>
    </Buttons>
  </Details>
    <Hr/>
    <Channel>
    <ChannelInfo>

    <ChannelImage src={profile}/>
    <ChannelDetail>
      <ChannelName>
      Shade Zahrai</ChannelName>
    <ChannelCounter>629k subscribers</ChannelCounter>

    <Description>
    Free training for professional women:
To find out more about Shadé, visit the website:
Follow her on:
Join her private FB group for professional women

    </Description>
    </ChannelDetail>
    </ChannelInfo>
      <Subscribe onClick={colorHandler}
      style={{backgroundColor: color ? "#cc1a00" : "lightgrey" }}    >
  { color ? "SUBSCRIBE" : "SUBSCRIBED"}
      </Subscribe>
    </Channel>

    <Hr/>
    <Comments/>
    </Content>
    <Recommendation>
    Recommendation
    <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
           </Recommendation>

  </Container>
    )
}
export default Video