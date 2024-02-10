import { Button } from "@nextui-org/react";
import Image from "next/image";
import Intersect_2 from '../static/Images/Intersect_2.png'

const GetStarted = () => {
    return (
        <div className="border flex flex-col items-center p-24 pb-48 lg:pb-80 mb-24 md:mb-64 mx-8 lg:mx-0 gap-10 lg:gap-16 rounded-3xl text-white bg-gradient-to-tr from-[#4AC0F2] to-[#3171DE] relative">
            <div className="text-4xl lg:text-5xl font-semibold text-center lg:px-36 !leading-[3.5rem] lg:!leading-[4rem]">Ready to Transform Your Vision into Reality? Let&apos;s Get Started!</div>
            <div><Button className='text-[#5E5DEF] bg-white w-fit p-8 lg:py-6 lg:px-6 text-lg ' radius="full">Schedule a Call</Button></div>
            <Image className='absolute top-[80%] md:top-[70%] lg:top-[60%]' src={Intersect_2} alt="Intersect" />
        </div>
    );
};

export default GetStarted;
