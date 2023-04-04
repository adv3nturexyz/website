'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { ItemsGame, TitleText, TypingText } from '../components';
import { featuresGame } from '../constants';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`} id="features">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className={`flex-1 ${styles.flexCenter}`}

      >
        <img src="/isometric-map.png" alt="get-started" className="w-[90%] h-[90%] object-contain" />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Open and composable gaming" />
        <TitleText title={<>Travel across the Omniverse</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {featuresGame.map((feature, index) => (
            <ItemsGame
              key={feature.text}
              imgUrl={feature.imgUrl}
              text={feature.text}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
