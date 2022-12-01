import React from 'react';
import styled from "styled-components";

const Container = styled.div`
display:flex;
gap:24px;
`

const Content = styled.div`
flex:5;`

const Recommendation = styled.div`
flex:2;`



function Video() {
  return (
  <Container>
    <Content>Content</Content>
    <Recommendation>
    Recommendation
    </Recommendation>

  </Container>
    )
}
export default Video