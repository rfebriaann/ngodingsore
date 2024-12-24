import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function Headline() {
  const text = useRef(null);
  const bunga = useRef(null);
  const run = useRef(null);
  useEffect(() => {
    gsap.set(run.current, {xPercent: -120, yPercent: -50});

    let xTo = gsap.quickTo(run.current, "x", {duration: 0.4, ease: "power1"}),
        yTo = gsap.quickTo(run.current, "y", {duration: 0.6, ease: "power1"});

    window.addEventListener("mousemove", e => {
      xTo(e.clientX);
      yTo(e.clientY);
    });

    gsap.to(bunga.current, {
      transformOrigin: "center",
      rotation: "360",
      duration: 3,
      repeat: -1, // Ulang terus menerus
      ease: "linear",
    });
  });

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      <Image
        className="z-10 opacity-50"
        src="/image/textured.png"
        layout="fill"
        objectFit="cover"
      />
      <Image
          ref={run}
          className="absolute z-20 text-orange-500"
          src="/logo/bintang.svg"
          width={50}
          height={50}
        />
      <div className="absolute h-full w-full left-[300px] top-[100px]">
        <Image
          ref={bunga}
          className="text-orange-500"
          src="/logo/Subtract2.svg"
          width={100}
          height={100}
        />
      </div>
      <div className="absolute h-full w-full left-[260px] top-[340px]">
        <Image
          className="text-orange-500"
          src="/logo/line3.svg"
          width={250}
          height={200}
        />
      </div>
      <div className="relative flex z-10 w-full h-full justify-between items-center gap-20 text-white">
        <div className="w-2/3">
          <div className="z-20 px-20">
            <h1 className="font-figtree text-[#F5EDD8] text-[55px] leading-none">
              Jakarta & Bali based boutique creative studio who helps brands
              stand out through stunning visual design and compelling
              copywriting, leaving a lasting impression.
            </h1>
          </div>
        </div>
        <div className="relative h-full w-1/3">
          <Image
            className="z-10"
            src="/image/bg3.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
