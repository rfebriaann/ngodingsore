import { Geist, Geist_Mono } from "next/font/google";
import Jumbotorn from "./component/jumbotorn";
import Headline from "./component/headline";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import Features from "./component/features";
import Works from "./component/works";
import Cta from "./component/cta";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const jumbo = useRef(null);
  useEffect(() => {
    ScrollTrigger.create({
      trigger: jumbo.current,
      start: "top top",
      end: "+=800vh",
      pinSpacing: false,
      pin: true,
    });
  });
  return (
    <div>
      <div ref={jumbo}>
        <Jumbotorn />
      </div>
      <Headline />
      <Features />
      <Works />
      <Cta />
    </div>
  );
}
