import React from 'react'
import Head from 'next/head'

import Logo from '../assets/images/logocontrast.svg'
import { Container } from '../styles/pages/Home'
import restConnection from '../services/connection'

const Home: React.FC = () => {
  let test = () => {
    console.log(process.env);
    
    restConnection.item().then((res) => {
      console.log(res.data)
    })
  }

  test()


  return (
    <Container>
      <Head>
        <title>Malbizer</title>
      </Head>

      <img src={Logo} className="logo"></img>
      <h1>Servidor para Teste</h1>
      <p> Conheça a Malbizer Soluções, empresa de software e tecnologia.</p>
    </Container>
  )
}

export default Home
