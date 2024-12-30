import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const logobintang = useRef(null);
  const bintang = useRef(null);
  const bintanghitam = useRef(null);
  const bintangorange = useRef(null);
  const textkiri = useRef(null);
  const textkanan = useRef(null);

  useEffect(() => {
    // const variable = gsap.to(logobintang.current, {
    //   transformOrigin: "center",
    //   rotation: "360",
    //   duration: 3,
    //   repeat: -1,
    //   ease: "linear",
    //   scale: 2,
    // });
    // const variableafter = gsap.to(logobintang.current, {
    //   repeat: 0,
    //   duration: 3,
    //   scale: 1,
    // });

    gsap.fromTo(
      logobintang.current,
      1,
      {
        scrollTrigger: {
          trigger: logobintang.current,
          top: "top -420px",
          end: "bottom bottom",
        },
        transformOrigin: "center",
        rotation: "360",
        ease: "linear",
        duration: 3,
        scale: 2,
      },
      {
        scrollTrigger: {
          trigger: logobintang.current,
          top: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
        transformOrigin: "center",
        rotation: "0",
        scale: 1,
        duration: 3,
      }
    );

    gsap.fromTo(
      textkiri.current,
      1,
      {
        scrollTrigger: {
          trigger: textkiri.current,
          top: "top 50px",
          end: "bottom bottom",
        },
        x: 0,
      },
      {
        scrollTrigger: {
          trigger: textkiri.current,
          top: "top 50px",
          end: "bottom bottom",
          scrub: 1,
        },
        x: -80,
      }
    );

    gsap.fromTo(
      textkanan.current,
      1,
      {
        scrollTrigger: {
          trigger: textkanan.current,
          top: "top 50px",
          end: "bottom bottom",
        },
        x: 0,
      },
      {
        scrollTrigger: {
          trigger: textkanan.current,
          top: "top 50px",
          end: "bottom bottom",
          scrub: 1,
        },
        x: 80,
      }
    );

    gsap.fromTo(
      bintang.current,
      1,
      {
        scrollTrigger: {
          trigger: bintang.current,
          top: "top 50px",
          end: "bottom bottom",
        },
        scale: 0,
      },
      {
        scrollTrigger: {
          trigger: bintang.current,
          // markers: true,
          top: "top 50px",
          end: "top bottom",
          scrub: 1,
        },
        scale: 4,
      }
    );
    gsap.fromTo(
      bintanghitam.current,
      1,
      {
        scrollTrigger: {
          trigger: bintanghitam.current,
          top: "top 50px",
          end: "bottom bottom",
        },
        scale: 0,
      },
      {
        scrollTrigger: {
          trigger: bintanghitam.current,
          // markers: true,
          top: "top 50px",
          end: "top bottom",
          scrub: 1,
        },
        scale: 3,
      }
    );
    gsap.fromTo(
      bintangorange.current,
      1,
      {
        scrollTrigger: {
          trigger: bintangorange.current,
          top: "top 50px",
          end: "bottom bottom",
        },
        scale: 0,
        delay: 1,
      },
      {
        scrollTrigger: {
          trigger: bintangorange.current,
          // markers: true,
          top: "top 50px",
          end: "top bottom",
          scrub: 1,
        },
        scale: 1,
        delay: 3,
      }
    );
  });
  return (
    <div className="relative h-[500px] w-full bg-black overflow-hidden">
      <Image
        ref={bintang}
        className="z-10 text-orange-500"
        src="/logo/bintang.svg"
        layout="fill"
      />
      <Image
        ref={bintangorange}
        className="z-30 text-orange-500"
        src="/logo/bintang.svg"
        layout="fill"
      />
      <Image
        ref={bintanghitam}
        className="z-20 text-orange-500"
        src="/logo/bintanghitam.svg"
        layout="fill"
      />
      <div className="relative z-40 h-full flex sm:flex-col md:flex-row gap-10 justify-center items-center">
        <div className="relative z-40">
          <svg
            className="sm:h-[100px] sm:w-[100px] md:h-[200px] md:w-[200px]"
            viewBox="0 0 610 668"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <mask id="star-bintang">
                <rect width="668" height="668" fill="white" />
                <path
                  ref={logobintang}
                  d="M313.479 320.988V416.612L387.479 416.612L387.479 320.988L462.884 379.901L508.443 321.588L410.577 245.127L508.443 168.665L462.884 110.352L387.479 169.266L387.479 73.643L313.479 73.643L313.479 169.265L238.074 110.352L192.515 168.665L290.381 245.127L192.515 321.588L238.074 379.901L313.479 320.988Z"
                  fill="black"
                />
              </mask>
            </defs>

            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M610 667.788V238.978C594.021 159.389 516.485 0.209229 334.18 0.209229C151.875 0.209229 55.3493 181.2 29.8747 271.696L0 376.114H95.877V538.31H334.18V667.788H610Z"
              fill="black"
              mask="url(#star-bintang)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
