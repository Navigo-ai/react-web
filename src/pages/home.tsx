import React from 'react';
import Hero from '../components/hero/hero';

const Home: React.FC = () => {
  return (
    <section>
      <Hero
        title='Navigo'
        subtitle='Create. Print. Ship.'
        btnTxt='Create'
        btnUrl='/create'
      />
    </section>
  );
};

export default Home;
