import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ExpoScaleEase } from "gsap/dist/EasePack";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ExpoScaleEase, ScrollTrigger);

export default function Jumbotorn() {
  const background = useRef(null);
  const text = useRef(null);
  const bintang = useRef(null);

  useEffect(() => {
    gsap.to(bintang.current, {
      transformOrigin: "center",
      rotation: "360",
      duration: 3,
      repeat: -1, // Ulang terus menerus
      ease: "linear",
    });

    gsap.fromTo(
      text.current,
      1,
      {
        scrollTrigger: {
          trigger: text.current,
        },
        opacity: 0,
        y: 40,
      },
      {
        scrollTrigger: {
          trigger: text.current,
        },
        opacity: 1,
        y: 0,
      }
    );
  });
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute z-20 h-full w-1/3 bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute right-0 z-20 h-full w-1/3 bg-gradient-to-l from-black to-transparent"></div>
      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center gap-14">
        <div className="flex items-center gap-3">
          <svg
            width="100"
            height="100"
            viewBox="0 0 610 668"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <mask id="star-mask">
                <rect width="610" height="668" fill="white" />
                <path
                  ref={bintang}
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
              mask="url(#star-mask)"
            />
          </svg>
          <Image src="/logo/textlogo.svg" width={200} height={200} />
        </div>
        <div>
          <h1 className="font-figtree sm:text-[50px] md:text-[80px] lg:text[80px] text-center font-medium text-white leading-none">
            Your Immersive Experience,
            <br />
            <span className="font-bold">Making Headline Soon</span>
          </h1>
        </div>
        <button className="flex justify-between items-center gap-4 px-3 py-2 bg-black rounded-full">
          <div className="bg-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#FF613E]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="icon icon-tabler icons-tabler-filled icon-tabler-bolt"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M13 2l.018 .001l.016 .001l.083 .005l.011 .002h.011l.038 .009l.052 .008l.016 .006l.011 .001l.029 .011l.052 .014l.019 .009l.015 .004l.028 .014l.04 .017l.021 .012l.022 .01l.023 .015l.031 .017l.034 .024l.018 .011l.013 .012l.024 .017l.038 .034l.022 .017l.008 .01l.014 .012l.036 .041l.026 .027l.006 .009c.12 .147 .196 .322 .218 .513l.001 .012l.002 .041l.004 .064v6h5a1 1 0 0 1 .868 1.497l-.06 .091l-8 11c-.568 .783 -1.808 .38 -1.808 -.588v-6h-5a1 1 0 0 1 -.868 -1.497l.06 -.091l8 -11l.01 -.013l.018 -.024l.033 -.038l.018 -.022l.009 -.008l.013 -.014l.04 -.036l.028 -.026l.008 -.006a1 1 0 0 1 .402 -.199l.011 -.001l.027 -.005l.074 -.013l.011 -.001l.041 -.002z" />
            </svg>
          </div>
          <div>
            <p className="font-figtree text-white text-lg font-medium">
              Email us for inquiry and Partnership
            </p>
          </div>
        </button>
      </div>
      <Image
        className="z-10 opacity-25"
        src="/image/textured.png"
        layout="fill"
        objectFit="cover"
      />
      <Image
        ref={background}
        src="/image/bg.png"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
