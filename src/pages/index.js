// pages/index.js

import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';


import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Apurba Patra</title>
        <meta name="description" content="Apurba Patra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        
      </div>
    </>
  );
};

export default Home;