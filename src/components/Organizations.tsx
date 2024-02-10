import Image from "next/image";
import { Button } from "@nextui-org/react";
import GreenVector from '../static/svgs/GreenVector.svg'
import { Companies } from '@/common/contents'

const Organizations = () => {


  return (
    <div className="px-6 lg:px-0">

      <div className="bg-[#F7F7FD] rounded-3xl min-h-[60vh] w-full flex flex-col justify-evenly items-center my-8 relative">
        <div className='lg:absolute top-[5%] left-[5%] w-full px-4'><Image src={GreenVector} alt='Green Vector' className='h-12 w-12 lg:h-28 lg:w-28' /></div>
        <div className="flex flex-col items-center gap-6">
          <div className="text-4xl text-black/70 text-center leading-normal">Trusted by Leading Organizations</div>
          <div className="text-md lg:text-xl text-black/60 text-center max-w-md">Our 4,000+ team has expertise in almost everyprogramming language.</div>
        </div>
        <div className="w-full px-8">
          <div className="flex max-w-full flex-wrap lg:flex-nowrap justify-center lg:justify-normal lg:overflow-x-scroll gap-4 lg:gap-8 lg:gap-36 px-8">
            {Companies.map((company) => (
              <div key={company.id} className="h-fit w-fit">
                <Image src={company.src} alt={company.alt} className="w-20 h-14 lg:min-w-48 lg:min-h-28" />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button className='text-white bg-[#3171DE] w-fit lg:py-6 px-8 text-lg my-4' radius="full">Our full repertorie</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Organizations