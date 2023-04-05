'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="about">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| An endless world of possibilities" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Welcome to <span className="font-extrabold text-white">Omniv3rse</span>, where you can explore a <span className="font-extrabold text-white">limitless</span> world of interconnected games and experiences. Gather <span className="font-extrabold text-white">precious resources</span> to trade, craft and <span className="font-extrabold text-white">customize</span> your characters, and <span className="font-extrabold text-white">collaborate</span> with others to battle monsters, conquer quests and <span className="font-extrabold text-white">earn exclusive rewards</span>. Bring your characters, currencies, and equipment <span className="font-extrabold text-white">across an interoperable ecosystem</span> of Web 3.0 games. Immerse yourself in a <span className="font-extrabold text-white">truly open and composable omniverse</span> by scrolling down and discovering all that we have to offer.
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
