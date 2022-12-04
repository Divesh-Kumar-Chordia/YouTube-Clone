import React from 'react'
import styled from 'styled-components'
import profile from "../img/profile.jpg"


const Container =styled.div`
color:${({theme})=>theme.text};
display:flex;
gap:10px;
margin:30px 0px;

`

const Details = styled.div`
display:flex;
color:${({theme})=>theme.text};
flex-direction:column;
gap:10px;

`
const Avatar = styled.img`
width:36px;
height:36px;
border-radius:50%;
margin:5px 0.5px 0.5px 0px;
padding:0px;
`
const Name = styled.span`
font-weight:500;
`
const Date = styled.span`
  font-size:10px;
  margin:0px 5px 0px 0px;
  color:${({theme})=>theme.textSoft};
`
const Text = styled.span`
 display:flex;
  gap:20px;
  color:${({theme})=>theme.text};
font-size:12px;
`


function Comment() {
  return (
    <Container>
<Avatar src={profile}/>
<Details>
    <Name>Shade Zahrai 
    <Date>  4 days ago</Date>
    </Name>
    <Text>I am so happy to find this. I am a massage 
    therpist and corrective exercise specialist with 
    focus in posture for musculoskeletal health. But I
    also teach clients to create  energy by standing
    open and tall, keep eyes ahead and looking a bit
    foward, and activate toes while walking.  It's
    an instant energy  booster.  This intrisincly 
    increases confidence  internally and your
    confidence will be recognized  quickly by
    others. I advocate the use of body management 
    in order to support the mind. Stand tall and
    activated and the mind will follow.
    </Text>
</Details>


    </Container>

  )
}

export default Comment