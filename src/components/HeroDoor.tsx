/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import heroDoorImg from '../assets/images/hero_door_image_1780877816767.png';

interface HeroDoorProps {
  onEnter: () => void;
}

export default function HeroDoor({ onEnter }: HeroDoorProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate smooth parallax offset
      const x = (window.innerWidth / 2 - e.clientX) / 60;
      const y = (window.innerHeight / 2 - e.clientY) / 60;
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-surface-container-lowest z-55"
    >
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,191,0,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Bottom shadow fade */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a0e14] to-transparent opacity-60 pointer-events-none" />

      {/* Main interactive core */}
      <div
        className="relative z-10 flex flex-col items-center gap-12 group cursor-pointer"
        onClick={onEnter}
      >
        <div className="text-center space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-serif text-3xl md:text-4xl text-on-surface-variant block tracking-[0.4em] translate-x-2"
          >
            おかえり。
          </motion.span>
        </div>

        {/* Parallax door container */}
        <motion.div
          style={{ x: coords.x, y: coords.y }}
          transition={{ type: 'spring', stiffness: 50, damping: 15 }}
          className="relative flex flex-col items-center"
        >
          {/* Circular border highlight */}
          <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/5 transition-all duration-700 group-hover:scale-[1.03] group-hover:shadow-[0_0_40px_rgba(255,191,0,0.22)] relative">
            <img
              alt="Cinematic Lantern Door"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 ease-out"
              src={heroDoorImg}
              referrerPolicy="no-referrer"
            />
            {/* Ambient image overlay to simulate candle flicker */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent mix-blend-overlay group-hover:opacity-20 transition-opacity" />
          </div>
        </motion.div>

        {/* Subtext call to prompt click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-center mt-3"
        >
          <span className="font-sans text-xs md:text-sm text-primary tracking-[0.25em] inline-block animate-pulse">
            そっと、扉をひらいてみる
          </span>
          <p className="text-[10px] text-on-surface-variant/40 mt-2 tracking-[0.1em] font-sans">
            (画面をクリックして中に入ります)
          </p>
        </motion.div>
      </div>

      {/* Decorative elegant bottom line */}
      <div className="absolute bottom-12 left-0 w-full flex justify-center opacity-20 pointer-events-none">
        <div className="w-64 h-[1px] bg-gradient-to-r from-transparent via-outline to-transparent" />
      </div>
    </motion.section>
  );
}
