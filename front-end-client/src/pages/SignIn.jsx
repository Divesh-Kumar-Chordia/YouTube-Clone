import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    height:calc(100vh - 56px);/** middle of the home page 
    so we remove the height of the navbar from it 
    keep space in between the  numbers in calc(), else it doesnt
    work correctly

    */
    color:${({theme})=>theme.text};
`
const Wrapper = styled.div`
    display:flex;
    align-items:center;
        flex-direction:column;
    background-color:${({theme})=>theme.bgLighter};
    border:1px solid ${({theme})=>theme.soft};
    padding:20px 50px;
    

`
const Title = styled.h1`
padding:0px;
margin:0px;`
const SubTitle = styled.h2``
const Input = styled.input`
background-color:transparent;
color:${({theme})=>theme.text};
outline:none;
border:1px solid ${({theme})=>theme.soft};
padding:5px;

`
const Button  = styled.button`
height:max-content;
background-color:${({theme})=>theme.soft};
border:1px solid ${({theme})=>theme.soft};
color:${({theme})=>theme.text};
padding:5px 10px;
margin:10px;
border-radius:4px;
cursor:pointer;
`
const More = styled.div`
    display:flex;
    font-size:12px;
    margin-top:10px;
    color:${({theme})=>theme.textSoft};
    align-items:left;
    `
const Links = styled.div`
margin-left:20px;
`
const Link = styled.span`
margin-left:20px;
`

const SignIn =()=> {
  return (
 <Container>
 <Wrapper>
    <Title>Welcome !</Title>
    <SubTitle>Sign In</SubTitle>
    <Input placeholder='UserName'/>
    <Input type="password" placeholder='Password'/>
    <Button>Sign In</Button>
    
    
    <SubTitle>Register</SubTitle>
    <Input placeholder='UserName'/>
    <Input type="email" placeholder='Email'/>
    <Input type="password" placeholder='Password'/>
    <Button>SignUp</Button>
    
 </Wrapper>
    <More>
    English (India)
    
        <Links>
            <Link>Privacy</Link>
            <Link>Help</Link>
            <Link>About Us</Link>
        </Links>
    </More>
 </Container>
  )
}

export default SignIn