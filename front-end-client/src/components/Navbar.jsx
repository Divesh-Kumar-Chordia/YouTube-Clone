import React from 'react'
import styled from 'styled-components'
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { MdOutlineAccountCircle } from 'react-icons/md';
const Container = styled.div`
position:sticky;
top: 0;
background-color: ${({theme})=>theme.bgLighter};
height:56px;
color:${({theme})=>theme.text};
`
const Hr =styled.hr`
   margin:0px;
    border: 0.5px solid ${({theme})=>theme.soft};
`
const Wrapper = styled.div`
display:flex;
align-items:center;
height:100%;
justify-content:flex-end;
padding:0px 20px;
position:relative;
`

const Search = styled.div`
  width:50%;
  position:absolute;
  /** below is code needed to get search bar to center */  
  right: 0px;
  left: 0px;
  margin: auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:5px 10px;
  background-color:${({theme})=>theme.soft};
  border:1px solid ${({theme})=>theme.bgLighter};
  border-radius: 30px;
  gap:3px;
`
const Input = styled.input`
/**input is made transparent to make it a indistigushable from search bar */
border:none;
outline: none;
width:100%;
background-color:transparent;
color:${({theme})=>theme.text};
`
const Button = styled.button`
padding:5px;
background-color:transparent;
border: 1px solid #3ea6ff;
color:#3ea6ff;
border-radius:2px;
font-weight: 500;
margin-top:10px;
cursor:pointer;
display:flex;
align-items:center;
gap:5px;
`


function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input/>
          <BiSearchAlt2/>
          </Search>
          <Link to="signin" style={{textDecoration:"none"}}>
          <Button><MdOutlineAccountCircle />SIGN IN</Button>
         </Link>
          </Wrapper>
        <Hr/>
          </Container>
  )
}

export default Navbar