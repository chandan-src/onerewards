"use client"
import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Lenis from 'lenis'
import Image from 'next/image'
const page = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 7]);
  return (
    <div>
      <div className="h-[200vh] relative">

        <div className="sticky top-0 h-screen flex items-center justify-center">
          <Image
            src="/images/cards/earning.jpeg"
            alt="Rewards Background"
            width={100}
            height={100}
            className="w-full h-full object-cover brightness-75"
          />
        </div>
        <div ref={ref} className="absolute top-0 left-0 w-full h-full z-10">
          <div className="bg-black w-screen h-screen z-10 flex items-center justify-center">
            <motion.h1
              className="text-[20vw] font-black uppercase leading-none text-center"
              style={{

                background: `url('/images/cards/earning.jpeg') center center / cover no-repeat fixed`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.1)'
              }}
            >
              REWARDS
            </motion.h1>
          </div>
        </div>
      </div>
      <div className="h-[200vh] bg-red-500">
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default page
