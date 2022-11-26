import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;/** 1:7 is the ratio  */
    background-color: #202020;/**menu color */
    height:100vh;/** 100% vertical height*/
    color: #ffff;
`

const Wrapper = styled.div`
    padding:18px 26px ;

`
const Logo = styled.div`
    padding:18px 26px ;

`

function Menu() {
  return (
    <Container>
        <Wrapper>
            <Logo/>
        Menu
        </Wrapper>
    </Container>
  )
}

export default Menu