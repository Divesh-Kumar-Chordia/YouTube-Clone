import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'

const Container = styled.div`

  display: flex;
  flex-direction:row;
    padding-right: 10px;
    padding-left: 5px;
  flex-wrap: wrap;
  justify-content: space-between;
`
function Home() {
  return (
    <Container>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </Container>
    )
}

export default Home