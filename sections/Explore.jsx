'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import { exploreGames } from '../constants';

const Explore = () => {
  const [active, setActive] = useState('game-2');
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Explore games in the omniverse" textStyles="text-center" />
        <TitleText title={<>Explore our community and <br className="md:block hidden" /> partner games</>} textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreGames.map((game, index) => (
            <ExploreCard
              key={game.id}
              {...game}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
