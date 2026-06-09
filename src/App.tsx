/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Calendar,
  Users,
  CreditCard,
  Heart,
  Baby,
  Smile,
  EyeOff,
  Flame,
  MessageSquare,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import HeroDoor from './components/HeroDoor';
import AmbientBackdrop from './components/AmbientBackdrop';
import lanternGlowImg from './assets/images/lantern_glow_image_1780877831034.png';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Trigger scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
    // Scroll to top on transition
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 100);
  };

  return (
    <div className="relative min-h-screen bg-[#0a0e14] selection:bg-primary-container selection:text-on-primary">
      {/* Background Ambience */}
      <AmbientBackdrop />

      {/* Atmospheric Entry Flow */}
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <motion.div
            key="hero-door-wrapper"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            <HeroDoor onEnter={handleEnter} />
          </motion.div>
        ) : (
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative"
          >
            {/* Header: TopNavBar */}
            <header
              className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 w-full ${
                isScrolled
                  ? 'glass-surface py-4 border-b border-white/5 shadow-lg'
                  : 'bg-transparent py-6'
              }`}
            >
              <div className="max-w-[1120px] mx-auto px-6 md:px-16 flex justify-between items-center">
                <div
                  className="font-brand text-xl sm:text-2xl text-primary font-bold tracking-widest cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Daddy's 秘密基地
                </div>

                <nav className="flex items-center space-x-8">
                  <button
                    onClick={() => {
                      document.getElementById('top-hero')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-sans text-xs tracking-widest text-primary font-bold border-b border-primary-container pb-1"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => {
                      document.getElementById('details-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-sans text-xs tracking-widest text-on-surface-variant/70 hover:text-primary transition-colors"
                  >
                    居場所について
                  </button>
                </nav>

                <div className="flex items-center gap-3">
                  <a
                    href="https://lin.ee/Y40v2F9"
                    target="_top"
                    className="bg-primary-container text-on-primary px-5 py-2 rounded-full font-serif text-xs font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,191,0,0.2)]"
                  >
                    LINEで最新情報を知る
                  </a>
                </div>
              </div>
            </header>

            {/* Main space */}
            <main className="relative z-10 pt-20">
              {/* Hero Presentation Section */}
              <section id="top-hero" className="min-h-screen flex flex-col items-center justify-center pt-20 pb-20 px-6 text-center relative">
                <div className="max-w-3xl w-full space-y-10">
                  
                  {/* Central Lantern with beautiful pulsing glow */}
                  <div className="flex justify-center max-w-full">
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 30px rgba(255, 191, 0, 0.15)',
                          '0 0 55px rgba(255, 191, 0, 0.35)',
                          '0 0 30px rgba(255, 191, 0, 0.15)',
                        ],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="relative w-56 h-56 sm:w-72 sm:h-72 overflow-hidden rounded-xl border border-white/5 shadow-2xl"
                    >
                      <img
                        alt="Cinematic Lantern"
                        className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-1000"
                        src={lanternGlowImg}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14]/50 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                  </div>

                  {/* Headlines and Titles */}
                  <div className="space-y-6">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="font-brand text-4xl sm:text-6xl text-primary font-bold tracking-widest leading-tight"
                    >
                      Daddy's 秘密基地
                    </motion.h1>

                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="font-serif text-xl sm:text-2xl text-on-surface leading-snug tracking-wide"
                    >
                      父親にも、安心して本音を出せる場所が必要だ。
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.9 }}
                      transition={{ delay: 0.6 }}
                      className="font-sans text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed"
                    >
                      妻にも言えない。子どもにも言えない。職場でも言えない。
                      <br />
                      そんな話をするための、宮古島の静かなサードプレイス。
                    </motion.p>
                  </div>

                  {/* Mini statistics banner */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex justify-center flex-wrap gap-4 sm:gap-8 pt-4"
                  >
                    <div className="px-5 py-3 rounded bg-surface-container-low/40 border border-outline-variant/10 text-left">
                      <span className="block text-[10px] text-primary/80 font-serif tracking-wider">GUIDELINE</span>
                      <span className="text-xs sm:text-sm font-sans text-on-surface">お酒なしの安心対話</span>
                    </div>
                    <div className="px-5 py-3 rounded bg-surface-container-low/40 border border-outline-variant/10 text-left">
                      <span className="block text-[10px] text-primary/80 font-serif tracking-wider">ENTRY FEE</span>
                      <span className="text-xs sm:text-sm font-sans text-on-surface">ワンドリンクサービス / 300円</span>
                    </div>
                  </motion.div>
                </div>

                {/* Ambient Downward Arrow Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40 animate-bounce cursor-pointer"
                     onClick={() => document.getElementById('details-section')?.scrollIntoView({ behavior: 'smooth' })}>
                  <div className="w-5 h-5 border-b-2 border-r-2 border-primary rotate-45" />
                </div>
              </section>

              {/* Detail Section */}
              <section id="details-section" className="py-24 px-6 glass-surface wabi-sabi-border relative">
                <div className="max-w-xl mx-auto space-y-12">
                  
                  {/* Quick features list */}
                  <div className="space-y-8 text-center md:text-left">
                    <span className="font-serif text-sm text-primary tracking-[0.3em] block text-center">SACRED SPACE OUTLINE</span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-on-surface font-semibold mb-6 text-center">
                      宮古島の穏やかな朝に、灯る場所
                    </h3>

                    {/* Details Rows */}
                    <div className="space-y-6">
                      <div className="flex items-start gap-4 justify-start text-left">
                        <div className="p-2.5 rounded bg-primary-container/10 border border-primary/20 text-primary shrink-0">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] text-primary tracking-widest font-serif">LOCATION</p>
                          <p className="font-serif text-lg text-on-surface">場所：宮古島内某所</p>
                          <p className="text-xs text-on-surface-variant/70 mt-1">※周囲の目を配慮し、詳細な位置は予約確定後にそっとお伝えします。</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 justify-start text-left">
                        <div className="p-2.5 rounded bg-primary-container/10 border border-primary/20 text-primary shrink-0">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] text-primary tracking-widest font-serif">FREQUENCY</p>
                          <p className="font-serif text-lg text-on-surface">月1〜2回程度開催 (主に土日の午前中)</p>
                          <p className="text-xs text-on-surface-variant/70 mt-1">※開催日程や参加募集は公式LINEおよびメールで受け付けております。</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 justify-start text-left">
                        <div className="p-2.5 rounded bg-primary-container/10 border border-primary/20 text-primary shrink-0">
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] text-primary tracking-widest font-serif">STYLE &amp; CAPACITY</p>
                          <p className="font-serif text-lg text-on-surface">定員少人数 / お酒なし / ドリンク付き</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 justify-start text-left">
                        <div className="p-2.5 rounded bg-primary-container/10 border border-primary/20 text-primary shrink-0">
                          <CreditCard className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] text-primary tracking-widest font-serif">FEE</p>
                          <p className="font-serif text-lg text-on-surface">参加費 300円</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* Target Audience Section */}
              <section className="py-32 px-6">
                <div className="max-w-3xl mx-auto space-y-16">
                  <div className="text-center space-y-3">
                    <span className="font-serif text-sm text-primary tracking-[0.3em] block">EMPATHIC RESONANCE</span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-on-surface italic">
                      こんな想いを抱えていませんか？
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {[
                      { icon: Heart, text: '妻との会話が、なぜかすれ違う' },
                      { icon: Baby, text: '子どものことを話したいのに、話せる相手がいない' },
                      { icon: EyeOff, text: '頑張っているのに、誰にも弱音を吐けない' },
                      { icon: Smile, text: '家族は大切なのに、どこか孤独を感じる' },
                      { icon: MessageSquare, text: '父親として、このままでいいのか考えることがある' },
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        className="flex items-center p-5 sm:p-6 bg-surface-container-low/20 backdrop-blur-sm border border-outline-variant/10 hover:bg-surface-container-high/40 transition-all duration-500 rounded-lg group"
                      >
                        <div className="p-2 rounded bg-tertiary-container/10 border border-tertiary-fixed-dim/20 text-tertiary-fixed-dim mr-5 transition-transform group-hover:scale-110">
                          <item.icon className="w-4.5 h-4.5" />
                        </div>
                        <span className="font-sans text-sm sm:text-base text-on-surface group-hover:text-primary transition-colors">
                          {item.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Minimal Line CTA Section */}
              <section id="line-cta-section" className="py-24 bg-transparent text-center px-6 relative">
                <div className="max-w-2xl mx-auto space-y-8">
                  <p className="font-serif text-lg sm:text-xl text-on-surface leading-loose italic">
                    答えが見つかる場所ではありません。<br />
                    でも、一人で抱えなくていい場所です。
                  </p>

                  <div className="pt-6 border-t border-outline-variant/20 flex flex-col items-center gap-6">
                    <p className="font-sans text-xs sm:text-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed">
                      日程のご案内、開催お知らせを受け取るには公式LINEをご利用ください。
                    </p>
                    <a
                      href="https://lin.ee/Y40v2F9"
                      target="_top"
                      className="bg-[#06C755] hover:bg-[#05b04b] text-white px-8 py-3.5 rounded-full hover:scale-105 transition-all duration-300 font-sans text-xs tracking-wider inline-flex items-center gap-2 font-bold shadow-[0_4px_20px_rgba(6,199,85,0.2)]"
                    >
                      <span>次回の案内情報を公式LINEでのぞいてみる</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </section>
            </main>

            {/* Footer */}
            <footer className="bg-surface-bright/5 backdrop-blur-xl relative overflow-hidden flex flex-col items-center justify-center w-full py-16 px-6 text-center rounded-t-[4rem] sm:rounded-t-[5rem] shadow-[0_-20px_60px_rgba(10,14,20,0.8)] border-t border-outline-variant/20">
              <div
                className="font-brand text-2xl sm:text-3xl text-primary mb-6 scale-105 transition-transform duration-500 font-bold tracking-widest cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Daddy's 秘密基地
              </div>
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8">
                <button
                  onClick={() => {
                    document.getElementById('top-hero')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-on-surface-variant text-xs hover:text-primary transition-colors font-sans"
                >
                  トップ
                </button>
                <button
                  onClick={() => {
                    document.getElementById('details-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-on-surface-variant text-xs hover:text-primary transition-colors font-sans"
                >
                  居場所について
                </button>
              </div>

              <p className="font-sans text-xs text-on-surface-variant/40">
                © Daddy's秘密基地 / The Journey Home. All rights reserved.
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
