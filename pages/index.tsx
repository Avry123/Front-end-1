import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'


const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-300">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Arimo:ital@1&family=Fredoka:wght@300&family=League+Gothic&family=League+Spartan&family=Outfit:wght@400;700&family=Rowdies:wght@300&family=Source+Sans+Pro&display=swap" rel="stylesheet"></link>
      </Head>
      <Card />  
    </div>
  )
}

export default Home
