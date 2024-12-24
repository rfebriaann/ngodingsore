import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Features(){
    const bintang = useRef(null);
    const textkiri = useRef(null);
    const textkanan = useRef(null);

    useEffect(()=> {
        gsap.fromTo(textkiri.current, 1,
            {
                scrollTrigger:{
                    trigger: textkiri.current,
                    top: "top 50px",
                    end: "bottom bottom",
                },
                x: 0
            },
            {
                scrollTrigger:{
                    trigger: textkiri.current,
                    top: "top 50px",
                    end: "bottom bottom",
                    scrub: 1,
                },
                x: -80
            }
        )

        gsap.fromTo(textkanan.current, 1,
            {
                scrollTrigger:{
                    trigger: textkanan.current,
                    top: "top 50px",
                    end: "bottom bottom",
                },
                x: 0
            },
            {
                scrollTrigger:{
                    trigger: textkanan.current,
                    top: "top 50px",
                    end: "bottom bottom",
                    scrub: 1,
                },
                x: 80
            }
        )

        gsap.fromTo(bintang.current, 1,
        {
            scrollTrigger: {
                trigger: bintang.current,
                top: "top 50px",
                end: "bottom bottom"
            },
            scale: 0
        },
        {
            scrollTrigger: {
                trigger: bintang.current,
                // markers: true,
                top: "top 50px",
                end: "top bottom",
                scrub: 1,
            },
            scale: 3
        }
        )
    });
    return <div className="relative h-screen w-full bg-black">
        <div className="relative h-full flex gap-10 justify-center items-center">
            <div ref={textkiri}>
                <h1 className="font-figtree text-[90px] text-white">NgodingSore</h1>
            </div>
            <div>
                <Image
                    ref={bintang}
                    className=" z-20 text-orange-500"
                    src="/logo/bintang.svg"
                    width={50}
                    height={50}
                />
            </div>
            <div ref={textkanan}>
                <h1 className="font-figtree text-[90px] text-white">NgodingSore</h1>
            </div>
        </div>
    </div>
}