/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function AmbientBackdrop() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate a set of warm glowing particles simulating embers
    const generated: Particle[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage x
      y: Math.random() * 100, // percentage y
      size: Math.random() * 5 + 3, // size in px
      duration: Math.random() * 12 + 8, // duration in seconds
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Soft overlay gradients */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-[#0a0e14] via-transparent to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#10141a]/90 via-transparent to-transparent opacity-90" />

      {/* Floating ember stars */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary-container opacity-20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            filter: 'blur(2px) drop-shadow(0 0 4px #ffbf00)',
          }}
          animate={{
            y: [-150, -500],
            x: [0, Math.sin(p.id) * 40],
            opacity: [0, 0.4, 0.2, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeIn',
          }}
        />
      ))}
    </div>
  );
}
