import React from 'react'
import styled from 'styled-components'
import img from '../img/logo.png'



const Container = styled.div`
    flex: 1;/** 1:7 is the ratio  */
    background-color: #202020;/**menu color */
    height:100vh;/** 100% vertical height*/
    color: #ffff;
    font-size: 14px;
`

const Wrapper = styled.div`
    padding:18px 26px ;

`
const Img = styled.img`
    height:25px;
`
const Logo = styled.div`
    display:flex;
    align-items:center;
    gap:5px;
    font-weight:bold;
    margin-bottom: 25px;

`
const Item =styled.div`
    display:flex;
        align-items:center;
        gap:20px;
        cursor:pointer;
        padding:7.5px 0px;
`

function Menu() {
  return (
    <Container>
        <Wrapper>
            <Logo>
                <Img src={img} />
                YouTube
            </Logo>
            <Item> Home</Item>
            <Item> Explore</Item>
            <Item> Subscription</Item>
            <Item> Library</Item>
            <Item> History</Item>
            <Item> Music</Item>
            <Item> Sports</Item>
            <Item> Gaming</Item>
            <Item> Movies</Item>
            <Item> News</Item>
            <Item> Live</Item>
            <Item> Settings</Item>
            <Item> Report</Item>
            <Item> Help</Item>
            <Item> Light Mode</Item>
        </Wrapper>
    </Container>
  )
}

export default Menu