import backgroundImage from '../static/Images/pexels-canva-studio.png'
import {Button} from "@nextui-org/react";

const Banner = () => {
    return (
        <div className='rounded-3xl h-[55vh] w-full lg:h-[700px] my-4 lg:my-12 bg-right bg-no-repeat bg-cover lg:bg-contain' style={{ backgroundImage: `url(${backgroundImage.src})` }}>
            <div className='flex items-center backdrop-blur-[1px] bg-black/50 lg:backdrop-blur-none lg:bg-gradient-to-r lg:from-white/100 lg:from-30% lg:via-white/50 lg:via-60% lg:to-white/0 lg:to-70% h-full rounded-3xl'>
                <div className='h-[95%] lg:h-fit w-5/6 max-w-screen-sm p-4 px-6 lg:p-12 lg:py-4 flex flex-col justify-between gap-4 lg:gap-8'>
                    <span className='lg:text-xl font-medium text-[#F3BC4C]'>TECH SERVICES</span>
                    <span className='text-5xl lg:text-6xl text-white lg:text-black/70 font-bold lg:font-medium leading-[3.25rem] lg:leading-snug'>TechSynergy: Innovate, Create, Elevate</span>
                    <span className=' text-white lg:text-black/60'>Unlocking Possibilities, One Code at a Time</span>
                    <Button className='text-white bg-[#66B066] w-fit lg:py-6 px-10 text-md my-4' radius="full">See projects</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner