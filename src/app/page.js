'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useScroll, useTransform, motion } from "framer-motion";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "c2.jpg",
  },
  {
    color: "#d6d7dc",
    src: "decimal.jpg",
  },
  {
    color: "#e3e3e3",
    src: "funny.jpg",
  },
  {
    color: "#21242b",
    src: "google.jpg",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "maven.jpg",
  },
  {
    color: "#e5e0e1",
    src: "panda.jpg",
  },
  {
    color: "#d7d4cf",
    src: "powell.jpg",
  },
  {
    color: "#e1dad6",
    src: "wix.jpg",
  },
];

const slider3 = [
  {
    color: "#e3e5e7",
    src: "c2.jpg",
  },
  {
    color: "#d6d7dc",
    src: "decimal.jpg",
  },
  {
    color: "#e3e3e3",
    src: "funny.jpg",
  },
  {
    color: "#21242b",
    src: "google.jpg",
  },
];

const slider4 = [
  {
    color: "#d4e3ec",
    src: "maven.jpg",
  },
  {
    color: "#e5e0e1",
    src: "panda.jpg",
  },
  {
    color: "#d7d4cf",
    src: "powell.jpg",
  },
  {
    color: "#e1dad6",
    src: "wix.jpg",
  },
];

export default function SlidingImages() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  const sliderFirst = useRef(null);
  const sliderSecond = useRef(null);
  let xPercent = 0;
  let xPercent2 = 0;

  let direction = -1;

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(sliderFirst.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
    gsap.to(sliderSecond.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "500px",
    })
    requestAnimationFrame(animate2);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(slider1.current, {xPercent: xPercent})
    gsap.set(slider2.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  const animate2 = () => {
    if(xPercent2 < -100){
      xPercent2 = 0;
    }
    else if(xPercent2 > 0){
      xPercent2 = -100;
    }
    gsap.set(slider3.current, {xPercent: xPercent2})
    gsap.set(slider4.current, {xPercent: xPercent2})
    requestAnimationFrame(animate2);
    xPercent2 += -0.1 * direction;
  }

  return (
    <div ref={container} className={styles.slidingImages}>
      <div ref={sliderFirst} className={styles.slider}>
      <div ref={slider1}>
      <motion.div className={styles.slider}>
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      </div>
      <div ref={slider2}>
        <motion.div className={styles.slider}>
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      </div>
      </div>
      <div ref={sliderSecond} className={styles.slider}>
      <div ref={slider3}>
      <motion.div className={styles.slider}>
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      </div>
      <div ref={slider4}>
        <motion.div className={styles.slider}>
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      </div>
      </div>
      <motion.div style={{height}} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}