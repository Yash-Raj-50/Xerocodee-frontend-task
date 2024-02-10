import BlueVector from '../static/svgs/BlueVector.svg'
import GreenVector from '../static/svgs/GreenVector.svg'
import Image from 'next/image'
import {TechServiceObjects} from '@/common/contents'

const TechServices = () => {

    return (
        <div className='flex flex-col items-center pt-12 pb-6 lg:py-32 lg:pb-12 mx-4 relative'>
            <div className='flex'>
                <div className='flex items-start min-w-fit px-4'><Image src={BlueVector} alt='Blue Vector' className='h-24 w-24'/></div>
                <div className='text-3xl lg:text-4xl text-black/70 max-w-2xl !leading-normal me-40 md:me-0 lg:font-medium'>Empowering Your Digital Vision: Our Comprehensive Tech Services.</div>
            </div>
            <div className='w-screen max-w-full flex overflow-x-scroll my-6 lg:my-12 lg:grid lg:grid-cols-3 gap-16 lg:px-8 py-8'>
                {TechServiceObjects.map((item) => (
                    <div key={item.id} className='flex flex-col justify-between min-h-64 min-w-64 w-auto lg:min-h-80 p-8 border rounded-3xl shadow-lg break-words bg-white'>
                        <div><Image src={item.src} alt={item.alt} /></div>
                        <div className='flex flex-col gap-4'>
                            <div className='text-black/70 text-2xl lg:text-3xl'>{item.Heading}</div>
                            <div className='text-black/60 lg:text-lg'>{item.Text}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='hidden lg:block absolute scale-[2] left-[30%] top-[65%] -z-10'><Image src={BlueVector} alt='Blue Vector' className='h-20 w-20'/></div>
            <div className='hidden lg:block absolute scale-[2] right-[30%] top-1/2 -z-10'><Image src={GreenVector} alt='Green Vector' className='h-20 w-20'/></div>
        </div>
    )
}

export default TechServices
