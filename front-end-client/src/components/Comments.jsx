import React from 'react'
import styled from 'styled-components'
import profile from "../img/profile.jpg"
import Comment from './Comment'
const Container = styled.div`
`
const NewComment = styled.div`
display:flex;
  flex-direction:row;
  justify-content:center;
  gap:10px;
`
const Avatar = styled.img`
width:50px;
height:50px;
border-radius:50%;
margin:5px 0.5px 0.5px 0px;
padding:0px;
`
const Input = styled.input`
outline:none;
  border:none;
  border-radius:0;
color:${({theme})=>theme.text};
border-bottom:0.5px  ${({theme})=>theme.soft} groove;
background-color:${({theme})=>theme.bgLighter};
padding:5px;
width:90%;

border-radius:5px;
`

function Comments() {
  return (
   <Container>
    <NewComment>
        <Avatar src={profile}/>
        <Input placeholder='Your Comment..'/>
    </NewComment>
    <Comment />
    <Comment />
    <Comment />
    <Comment />
    <Comment />
    <Comment />
    <Comment />
    <Comment />
   </Container>
  )
}

export default Comments