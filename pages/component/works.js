import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const containerRef = useRef(null);
  const garissatu = useRef(null);
  const garisdua = useRef(null);
  const garistiga = useRef(null);
  const garisempat = useRef(null);
  const garislima = useRef(null);
  const garisenam = useRef(null);
  const garistujuh = useRef(null);
  const garisdelapan = useRef(null);
  // const garissembilan = useRef(null);

  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");
    const totalPanels = 5; 
    const screenWidth = window.innerWidth;

    gsap.fromTo(
      garissatu.current,
      1,
      {
        scrollTrigger: {
          trigger: garissatu.current,
          start: "top center",
          end: "+=100 +=500",
          scrub: 1,
          // markers: true,
        },
        duration: 3,
        width: 0,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: garissatu.current,
          start: "top center",
          end: "+=100 +=500",
          scrub: 1,
          // markers: true,
        },
        duration: 3,
        width: 900,
        ease: "power1.in",
      }
    );

    gsap.fromTo(
      garisdua.current,
      1,
      {
        scrollTrigger: {
          trigger: garisdua.current,
          start: "top +=300",
          end: "center +=500",
          // markers: true,
          scrub: 1,
        },
        duration: 3,
        width: 0,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: garisdua.current,
          start: "top +=300",
          end: "center +=500",
          // markers: true,
          scrub: 1,
        },
        duration: 3,
        width: 1000,
        ease: "power1.in",
      }
    );

    gsap.fromTo(
      garistiga.current,
      1,
      {
        scrollTrigger: {
          trigger: garistiga.current,
          start: "top +=300",
          end: "bottom +=500",
          // markers: true,
          scrub: 1,
        },
        duration: 3,
        width: 0,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: garistiga.current,
          start: "top +=300",
          end: "bottom +=500",
          // markers: true,
          scrub: 1,
        },
        duration: 3,
        width: 900,
        ease: "power1.in",
      }
    );

    gsap.fromTo(
      garisempat.current,
      1,
      {
        scrollTrigger: {
          trigger: garisempat.current,
          start: "top +=300",
          end: "center +=500",
          // markers: true,
          scrub: 1,
        },
        duration: 3,
        width: 0,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: garisempat.current,
          start: "top +=300",
          end: "center +=500",
          // markers: true,
          scrub: 1,
        },
        duration: 3,
        width: 1000,
        ease: "power1.in",
      }
    );

    gsap.fromTo(
      garislima.current,
      1,
      {
        scrollTrigger: {
          trigger: garislima.current,
          start: "top +=300",
          end: "bottom +=500",
          // markers: true,
          scrub: 1,
        },
        duration: 3,
        width: 0,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: garislima.current,
          start: "top +=300",
          end: "bottom +=500",
          // markers: true,
          scrub: 1,
        },
        duration: 3,
        width: 900,
        ease: "power1.in",
      }
    );

    gsap.fromTo(
      garisenam.current,
      1,
      {
        scrollTrigger: {
          trigger: garisenam.current,
          start: "top +=300",
          end: "center +=500",
          // markers: true,
          scrub: 1,
        },
        duration: 3,
        width: 0,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: garisenam.current,
          start: "top +=300",
          end: "center +=500",
          // markers: true,
          scrub: 1,
        },
        duration: 3,
        width: 1000,
        ease: "power1.in",
      }
    );

    gsap.fromTo(
      garistujuh.current,
      1,
      {
        scrollTrigger: {
          trigger: garistujuh.current,
          start: "top +=300",
          end: "bottom +=500",
          // markers: true,
          scrub: 1,
        },
        duration: 3,
        width: 0,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: garistujuh.current,
          start: "top +=300",
          end: "bottom +=500",
          // markers: true,
          scrub: 1,
        },
        duration: 3,
        width: 900,
        ease: "power1.in",
      }
    );

    gsap.fromTo(
      garisdelapan.current,
      1,
      {
        scrollTrigger: {
          trigger: garisdelapan.current,
          start: "top +=300",
          end: "center +=500",
          // markers: true,
          scrub: 1,
        },
        duration: 3,
        width: 0,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: garisdelapan.current,
          start: "top +=300",
          end: "center +=500",
          // markers: true,
          scrub: 1,
        },
        duration: 3,
        width: 1000,
        ease: "power1.in",
      }
    );

    // gsap.fromTo(
    //   garissembilan.current,
    //   1,
    //   {
    //     scrollTrigger: {
    //       trigger: garissembilan.current,
    //       start: "top +=300",
    //       end: "bottom +=500",
    //       // markers: true,
    //       scrub: 1,
    //     },
    //     duration: 3,
    //     width: 0,
    //     ease: "back.in",
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: garissembilan.current,
    //       start: "top +=300",
    //       end: "bottom +=500",
    //       markers: true,
    //       scrub: 1,
    //     },
    //     duration: 3,
    //     width: 900,
    //     ease: "power1.in",
    //   }
    // );

    // Horizontal scroll animation
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        snap: 1 / (sections.length - 1),
        scrub: 1,
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });

    // Refresh ScrollTrigger on component mount
    //     ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <div
      ref={containerRef}
      className="h-screen w-full relative bg-black overflow-hidden"
    >
      <div className="absolute flex flex-nowrap h-full">
        <div className="panel w-screen h-full bg-black flex items-center justify-center text-white text-3xl">
          <div className="relative h-full w-full flex items-center justify-center p-10">
            <div className="absolute top-20 left-20 p-10">
              <h1 className="font-montserrat font-bold text-[80px] text-[#FF613E]">
                1
              </h1>
            </div>
            <div className="relative">
              <h1 className="relative z-20 font-figtree sm:text-[28px] md:text-[80px] font-medium">
                Social Media Marketing
              </h1>
              <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[300px] md:w-[600px] sm:h-[500px] md:h-[600px] bg-red-500">
                <Image
                  src="/gif/social.webp" // Path ke file WebP Anda
                  alt="Example WebP"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div
                ref={garissatu}
                className="absolute top-1/2 left-1/3 translate-x-1/2 -translate-y-1/2 w-[200px] h-10 bg-[#FF613E]"
              ></div>
            </div>
          </div>
        </div>
        <div className="panel w-screen h-full bg-black flex items-center justify-center text-white text-3xl ">
          <div className="relative h-full w-full flex items-center justify-center p-10">
            <div className="absolute top-20 left-20 p-10 ">
              <h1 className="font-montserrat font-bold text-[80px] text-[#FF613E]">
                2
              </h1>
            </div>
            <div className="relative ">
              <h1 className="relative z-20 font-figtree sm:text-[28px] md:text-[80px] font-medium">
                Branding
              </h1>
              <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[300px] md:w-[600px] sm:h-[500px] md:h-[600px] bg-red-500">
                <Image
                  src="/gif/branding.webp" // Path ke file WebP Anda
                  alt="Example WebP"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div
                ref={garisdua}
                className="absolute top-1/2 -left-1/3 -translate-x-1/2 -translate-y-1/2 w-[0px] h-10 bg-[#FF613E]"
              ></div>
              <div
                ref={garistiga}
                className="absolute top-1/2 left-0 translate-x-1/2 -translate-y-1/2 w-[900px] h-10 bg-[#FF613E]"
              ></div>
            </div>
          </div>
        </div>
        <div className="panel w-screen h-full bg-black flex items-center justify-center text-white text-3xl">
          <div className="relative h-full w-full flex items-center justify-center p-10">
            <div className="absolute top-20 left-20 p-10">
              <h1 className="font-montserrat font-bold text-[80px] text-[#FF613E]">
                3
              </h1>
            </div>
            <div className="relative">
              <h1 className="relative  z-20 font-figtree sm:text-[28px] md:text-[80px] font-medium">
                Production
              </h1>
              <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  sm:w-[300px] md:w-[600px] sm:h-[500px] md:h-[600px] bg-red-500">
                <Image
                  src="/gif/production.webp" // Path ke file WebP Anda
                  alt="Example WebP"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div
                ref={garisempat}
                className="absolute top-1/2 -left-1/3 -translate-x-1/2 -translate-y-1/2 w-[0px] h-10 bg-[#FF613E]"
              ></div>
              <div
                ref={garislima}
                className="absolute top-1/2 left-0 translate-x-1/2 -translate-y-1/2 w-[900px] h-10 bg-[#FF613E]"
              ></div>
            </div>
          </div>
        </div>
        <div className="panel w-screen h-full bg-black flex items-center justify-center text-white text-3xl">
          <div className="relative h-full w-full flex items-center justify-center p-10">
            <div className="absolute top-20 left-20 p-10">
              <h1 className="font-montserrat font-bold text-[80px] text-[#FF613E]">
                4
              </h1>
            </div>
            <div className="relative">
              <h1 className="relative z-20 font-figtree sm:text-[28px] md:text-[80px] font-medium">
                Software House
              </h1>
              <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  sm:w-[300px] md:w-[600px] sm:h-[500px] md:h-[600px] bg-red-500">
                <Image
                  src="/gif/coding.webp" // Path ke file WebP Anda
                  alt="Example WebP"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div
                ref={garisenam}
                className="absolute top-1/2 -left-1/3 -translate-x-1/2 -translate-y-1/2 w-[0px] h-10 bg-[#FF613E]"
              ></div>
              <div
                ref={garistujuh}
                className="absolute top-1/2 left-0 translate-x-1/2 -translate-y-1/2 w-[900px] h-10 bg-[#FF613E]"
              ></div>
            </div>
          </div>
        </div>
        <div className="panel w-screen h-full bg-black flex items-center justify-center text-white text-3xl">
          <div className="relative h-full w-full flex items-center justify-center p-10">
            <div className="absolute top-20 left-20 p-10">
              <h1 className="font-montserrat font-bold text-[80px] text-[#FF613E]">
                5
              </h1>
            </div>
            <div className="relative">
              <h1 className="relative z-20 font-figtree sm:text-[28px] md:text-[80px] font-medium">
                Photography
              </h1>
              <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  sm:w-[300px] md:w-[600px] sm:h-[500px] md:h-[600px] bg-red-500">
                <Image
                  src="/gif/photo.webp" // Path ke file WebP Anda
                  alt="Example WebP"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div
                ref={garisdelapan}
                className="absolute top-1/2 -left-1/3 -translate-x-1/2 -translate-y-1/2 w-[0px] h-10 bg-[#FF613E]"
              ></div>
              {/* <div
                ref={garissembilan}
                className="absolute top-1/2 left-0 translate-x-1/2 -translate-y-1/2 w-[900px] h-10 bg-[#FF613E]"
              ></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
