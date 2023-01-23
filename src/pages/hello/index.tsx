import React, { useState, useEffect, Component } from "react";
import { useTransition, animated, useSpringRef } from "@react-spring/web";

import styles from "./styles.module.css";
import Image from "next/image";

const IMAGES = [
  "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/154443660/original/734570cec0de955789ff0acd80caad3d582b85e0/create-a-generative-art-piece-for-you.png",
  "https://images.squarespace-cdn.com/content/v1/5c77350965a707ed1710a1bc/1592330659753-70M66LGEPXFTQ8S716MX/Generative+Art+by+Mark+Stock+-+Gyre+35700.jpg",
  "https://cdn.pixabay.com/photo/2018/09/04/09/12/generative-art-3653275_1280.jpg",
];

const slides = [
  { style: { background: "hotpink" }, content: IMAGES[0] },
  { style: { background: "red" }, content: IMAGES[1] },
  { style: { background: "blue" }, content: IMAGES[2] },
];

export default function Slides() {
  const [index, set] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from:
      direction === "right"
        ? { opacity: 0, transform: "translate3d(0,100%,0)" }
        : { opacity: 0, transform: "translate3d(0,-50%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave:
      direction === "right"
        ? { opacity: 0, transform: "translate3d(0,-50%,0)" }
        : { opacity: 0, transform: "translate3d(0,100%,0)" },
  });
  useEffect(() => {
    transRef.start();
  }, [index]);

  return (
    <div className={`flex fill ${styles.container}`}>
      <button
        onClick={() => {
          setDirection("left");
          set((state) => (state !== 0 ? state - 1 : slides.length - 1));
        }}
      >
        {"<"}
      </button>
      <button
        onClick={() => {
          setDirection("right");
          set((state) => (state !== slides.length - 1 ? state + 1 : 0));
        }}
      >
        {">"}
      </button>
      {transitions((springs, i) => (
        <animated.div style={{ ...springs, ...slides[i].style }}>
          <Image width={600} height={400} alt="" src={slides[i].content} />
        </animated.div>
      ))}
    </div>
  );
}
