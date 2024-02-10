'use client'

import React, { useRef, useState } from "react";
import Left_Arrow from '../static/svgs/arrow-left.svg'
import Right_Arrow from '../static/svgs/arrow-right.svg'
import Image from 'next/image'
import GreenVector from '../static/svgs/GreenVector.svg'
import BlueVector from '../static/svgs/BlueVector.svg'
import { SuccessObejcts } from '@/common/contents'

const Success = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = (scrollAmount: number) => {

        const newScrollPosition = scrollPosition + scrollAmount;
        setScrollPosition(newScrollPosition);

        if (containerRef.current) {
            containerRef.current.scrollLeft = newScrollPosition;
        }
    };

    return (
        <div className="bg-[#F7F7FD] flex flex-col items-center py-20 lg:py-12 rounded-3xl relative mx-6 lg:mx-0">
            <div className="text-3xl lg:text-5xl text-black/70 px-20 lg:px-0 max-w-5xl text-center leading-loose lg:leading-snug">Choose Us: Your Path to Innovation and <span className="bg-gradient-to-b from-[#3171DE] to-[#4AC0F2] text-transparent bg-clip-text">Success</span></div>
            <div className="flex max-w-full overflow-x-scroll gap-8 lg:gap-12 px-4 my-12 mb-8" ref={containerRef}>
                {SuccessObejcts.map((content) => (
                    <div key={content.id} className={`bg-white min-w-[350px] lg:min-w-[425px] lg:h-[250px] border flex flex-col items-center justify-around gap-4 p-6 lg:p-10 rounded-[36px] ${content.ExtraCSS}`}>
                        <div className={`text-xl lg:text-2xl font-normal lg:font-medium ${content.ExtraCSS2} `} style={{ lineHeight: "2rem" }}>{content.Heading}</div>
                        <div className={`text-sm lg:text-lg font-light text-center lg:text-start ${content.ExtraCSS2}`}>{content.Text}</div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center gap-4 lg:mb-8">
                <button className="bg-white p-2 lg:p-4 rounded-full cursor-pointer" onClick={() => handleScroll(-200)}>
                    <Image src={Left_Arrow} alt="Left Arrow" />
                </button>
                <button className="bg-white p-2 lg:p-4 rounded-full cursor-pointer" onClick={() => handleScroll(200)}>
                    <Image src={Right_Arrow} alt="Right Arrow" />
                </button>
            </div>
            <div className='hidden lg:block lg:absolute top-[5%] left-[85%] px-4'><Image src={GreenVector} alt='Green Vector' className='h-12 w-12 lg:h-28 lg:w-28' /></div>
            <div className='hidden lg:block lg:absolute bottom-[5%] left-[10%] px-4'><Image src={BlueVector} alt='Blue Vector' className='h-12 w-12 lg:h-28 lg:w-28' /></div>
        </div>
    )
};

export default Success;
