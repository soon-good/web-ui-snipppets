import React from 'react'
import { Container } from '../components/styles/container/Container.style';
import { Header, MainHeader } from '../components/styles/header/Header.style';

const Home = () => {
  return (
    <Container>
      <Header>
        <MainHeader>
          <h1>Home</h1>
        </MainHeader>
      </Header>
    </Container>
  )
}

export default Home;