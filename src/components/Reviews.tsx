'use client'

import React, { useRef, useState } from "react";
import GreenVector from '../static/svgs/GreenVector.svg'
import BlueVector from '../static/svgs/BlueVector.svg'
import Image from 'next/image'
import Intersect from '../static/Images/Intersect.png'
import {Divider} from "@nextui-org/react";
import Left_Arrow from '../static/svgs/arrow-left.svg'
import Right_Arrow from '../static/svgs/arrow-right.svg'
import { MyReviews } from '@/common/contents'

const Reviews = () => {

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
		<div className="my-24 mb-12 flex flex-col h-fit">
			<div className="lg:grid lg:grid-cols-2 lg:grid-rows-none gap-4">
				<div className='relative flex justify-center items-center lg:items-baseline'>
					<Image className='lg:absolute lg:left-[15%] w-fit h-fit lg:w-3/4 lg:h-auto' src={Intersect} alt="Intersect" />
					<Image src={GreenVector} alt='Green Vector' className='absolute top-1/4 right-[15%] lg:right-0 w-64 lg:h-[30rem] lg:w-[30rem] -z-10 -rotate-3' />
					<Image src={BlueVector} alt='Blue Vector' className='absolute top-[20%] lg:top-[30%] left-[20%] lg:left-[15%] w-20 h-16 lg:h-32 lg:w-32' />
				</div>
				<div className="flex flex-col h-fit items-center p-2 lg:p-8 lg:pt-12 lg:pb-20 lg:gap-10 h-96 text-center lg:text-start">
					<div className="text-2xl lg:text-4xl p-4 px-12 text-black/700">We've stopped counting. Over 500 brands count on us.</div>
					<div className="lg:text-lg p-4 px-8 text-black/600">Our 4,000+ team has expertise in almost every programming language.</div>
				</div>
			</div>
			<div className='flex flex-col gap-16 lg:my-12 mb-0 relative'>
				<div className='flex max-w-full overflow-x-scroll gap-8 lg:gap-12 pb-4 px-4 lg:px-0' ref={containerRef}>
					{MyReviews.map((review) => (
						<div key={review.id} className='min-w-[340px] lg:min-w-[420px] lg:h-[550px] flex flex-col justify-between gap-4 p-8 border rounded-3xl shadow-lg bg-white z-10'>
							<div className='flex flex-col items-center gap-8'>
								<div className='w-full' ><Image src={review.Stars} alt='Stars'/></div>
								<div className='text-lg lg:text-2xl font-semibold text-black/70' style={{lineHeight:1.5}}>{review.Heading}</div>
							</div>
							<div className='text-black/60 text-sm lg:text-lg font-light' style={{lineHeight:1.75}}>{review.Text}</div>
							<Divider/>
							<div className='flex items-center gap-4'>
								<div><Image src={review.ImgSrc} alt={review.alt}/></div>
								<div className='flex flex-col'>
									<div className='text-md lg:text-2xl font-medium'>{review.Name}</div>
									<div className='text-black/60 text-xs lg:text-lg'>{review.Position}</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="flex justify-center gap-4">
					<button className="bg-[#F7F7FD] p-2 lg:p-4 rounded-full cursor-pointer" onClick={() => handleScroll(-200)}>
						<Image src={Left_Arrow} alt="Left Arrow" />
					</button>
					<button className="bg-[#F7F7FD] p-2 lg:p-4 rounded-full cursor-pointer" onClick={() => handleScroll(200)}>
						<Image src={Right_Arrow} alt="Right Arrow" />
					</button>
				</div>
				<Image src={BlueVector} alt='Blue Vector' className='hidden lg:block absolute top-[20%] right-[0%] h-56 w-56' />	
			</div>
		</div>
	)
}

export default Reviews