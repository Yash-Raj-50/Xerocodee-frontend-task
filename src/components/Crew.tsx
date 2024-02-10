import { Button } from "@nextui-org/react";
import Image from "next/image";
import GreenVector from '../static/svgs/GreenVector.svg'
import BlueVector from '../static/svgs/BlueVector.svg'
import { CrewMembers } from '@/common/contents'

const Crew = () => {
    return (
        <div className="flex flex-col items-center gap-12 lg:gap-16 my-8 lg:my-16 p-12 relative">
            <div className="grid grid-cols-2 lg:grid-cols-5">
                {CrewMembers.map((member) => (
                    <div key={member.id} className={`relative h-72 min-w-44 lg:h-72 lg:w-48 flex justify-center lg:col-span-1 ${(member.id===CrewMembers.length && CrewMembers.length/2)?"col-span-2":""} `}>
                        <Image src={member.src} alt={member.alt} className="max-w-fit absolute h-72 w-72 lg:h-80 lg:w-64" />
                    </div>
                ))}
            </div>
            <div className="text-3xl lg:text-5xl lg:mt-8 text-center">Let&apos;s Form Your Crew.</div>
            <div><Button className='text-white bg-[#3171DE] w-fit lg:py-6 px-6 text-lg ' radius="full">Schedule a Call</Button></div>
            <div className='hidden lg:block lg:absolute top-[20%] left-[10%] px-4 -z-10'><Image src={GreenVector} alt='Green Vector' className='lg:h-36 lg:w-36' /></div>
            <div className='hidden lg:block lg:absolute top-[15%] right-[10%] px-4 -z-10'><Image src={BlueVector} alt='Blue Vector' className='lg:h-36 lg:w-36' /></div>
        </div>
    );
};

export default Crew;
