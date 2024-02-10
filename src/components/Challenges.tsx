import Image from 'next/image'
import {TechObjectItems} from '@/common/contents'

const Challenges = () => {

    return (
        <div className='flex flex-col items-center py-8 mx-4'>
            <div className='text-3xl lg:text-4xl text-black/70 leading-relaxed me-40 md:me-0'>We have multidisciplinary teams to meet any <span className='bg-gradient-to-b from-[#3171DE] to-[#704AF2] text-transparent bg-clip-text'>challenge.</span></div>
            <div className='border rounded-3xl w-full my-12 flex flex-col lg:flex-row justify-around shadow-lg lg:px-8'>
                {TechObjectItems.map((item) => (
                    <div key={item.id} className='flex flex-col justify-between h-64 lg:h-72 p-8'>
                        <div><Image src={item.src} alt={item.alt} /></div>
                        <div className='flex flex-col gap-4'>
                            <div className='text-black/70 text-2xl lg:text-3xl'>{item.Heading}</div>
                            <div className='text-black/60 lg:text-lg'>{item.Text}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Challenges