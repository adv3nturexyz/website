'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
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
        Gather <span className="font-extrabold text-white">precious resources</span> to <span className="font-extrabold text-white">trade</span>, <span className="font-extrabold text-white">craft</span> and <span className="font-extrabold text-white">customize</span> your characters, and <span className="font-extrabold text-white">collaborate</span> to battle monsters, conquer quests and <span className="font-extrabold text-white">earn exclusive rewards</span>. Bring your characters, currencies & equipment <span className="font-extrabold text-white">across an interoperable & omnichain</span> ecosystem of Web 3.0 games. Scroll down to explore the <span className="font-extrabold text-white">open & composable</span> omniverse
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
