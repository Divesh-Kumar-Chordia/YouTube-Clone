import React from 'react'
import styled from 'styled-components'
import img from '../img/logo.png'
import { AiFillHome } from "react-icons/ai";
import { MdOutlineLightMode,MdSettings,MdReport,MdHelpOutline,MdOutlineMovieFilter,MdOutlineLibraryMusic, MdOutlineExplore,MdOutlineSubscriptions,MdOutlineLibraryAdd,MdOutlineHistory,MdOutlineSportsBasketball} from "react-icons/md";
import { BsNewspaper} from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import { FaRegDotCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Container = styled.div`
    flex: 1;/** 1:7 is the ratio  */
    background-color: ${({theme})=>theme.bgLighter};/**menu color */
    height:110vh;/** 100% vertical height*/
    color: ${({theme})=>theme.text};
    font-size: 14px;
    position:sticky;
    top:0;
`

const Wrapper = styled.div`
    padding:18px 26px ;

`
const Img = styled.img`
    width:39px;
`
const Logo = styled.div`
    display:flex;
    align-items:center;
    gap:0px;
    font-size:15px;
    font-weight:bold;
    font-weight:1900;
    color: ${({theme})=>theme.text};
    margin-bottom: 15px;
  

`
const Item =styled.div`
    display:flex;
        align-items:center;
        gap:5px;
        cursor:pointer;
        padding:5.5px 0px 5.5px 8px;
        &:hover {
    background-color:${({theme})=>theme.soft};
    font-weight: 500;
    border-radius: 15px;
  }
`
const Hr =styled.hr`
    margin:15px 0px;
    border: 0.5px solid ${({theme})=>theme.soft};
`
const Login = styled.div``
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
const Title = styled.h2`
    font-size:14px;
    font-weight:500;
    color:#9f9f9f;
    margin-bottom:20px;
`
function Menu({darkMode,setDarkMode}) {
  return (
    <Container>
        <Wrapper>
            <Link to="/" style={{textDecoration:"none"}}>

            <Logo>
                <Img src={img} />
                YouTube
            </Logo>
            </Link>
            <Item><AiFillHome/> Home</Item>
            <Item> <MdOutlineExplore/>Explore</Item>
            <Item><MdOutlineSubscriptions/> Subscription</Item>
            <Hr/>
            <Item> <MdOutlineLibraryAdd/>Library</Item>
            <Item><MdOutlineHistory/> History</Item>
            <Hr/>
            <Login>
            Sign in to like videos, comments, and subscribe.
            </Login>
                <Button>SIGN IN</Button>
            <Hr/>
            <Title>BEST OF YouTube</Title>
            <Item> <MdOutlineLibraryMusic/> Music</Item>
            <Item><MdOutlineSportsBasketball/> Sports</Item>
            <Item> <IoGameController/> Gaming</Item>
            <Item><MdOutlineMovieFilter/> Movies</Item>
            <Item><BsNewspaper/> News</Item>
            <Item> <FaRegDotCircle/>Live</Item>
            <Hr/>
            <Item> <MdSettings/>Settings</Item>
            <Item> <MdReport/>Report</Item>
            <Item><MdHelpOutline/> Help</Item>
            <Item onClick={()=>setDarkMode(!darkMode)}> <MdOutlineLightMode/>Light Mode</Item>
        </Wrapper>
    </Container>
  )
}

export default Menu