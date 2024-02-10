import React from "react";
import Link from "next/link";
import { Divider } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import Arrow from "../static/svgs/arrows-down-top-move-1.svg"
import logo from '../static/svgs/Logo.svg'
import LinkedIn from "../static/svgs/companies/Linkedin.svg";
import Facebook from "../static/svgs/companies/Facebook.svg";
import Twitter from "../static/svgs/companies/Twitter.svg";
import { FooterLinks } from '@/common/contents'

const MyFooter = () => {
    return (
        <div className="flex flex-col gap-8 p-8 px-8 xl:px-32 sm:my-40 lg:my-0">
            <div className="grid grid-cols-2 lg:grid-cols-5">
                {FooterLinks.map((column) => (
                    <div key={column.id} className={`flex flex-col gap-4 p-4 lg:py-10 px-8 ${(column.id === 1) ? "order-3 lg:order-first" : ""}`}>
                        <div className="text-[#0A142F] font-normal">{column.Heading}</div>
                        {column.links.map((link) => (
                            <Link key={link.id} className="text-[#0A142F]/[0.6] font-normal" href={link.href}>{link.text}</Link>
                        ))}
                    </div>
                ))}
                <div className="col-span-2 flex justify-center my-8 order-last">
                    <div className="bg-[#203C86]/5 rounded-3xl lg:mx-12 h-[300px] w-[420px] p-12 flex flex-col gap-6">
                        <div className="text-[#0A142F] text-lg">Subscribe</div>
                        <div>
                            <Input type="email" variant="bordered" radius="full" label="Email address" classNames={{
                                inputWrapper: ["bg-white",],
                                label: ["bg-white", "text-[#0A142F]/[0.6]", "mx-4", "text-md"],
                            }}
                                endContent={
                                    <button className="absolute right-0 bottom-0 bg-[#3171DE] p-5 rounded-full">
                                        <Image src={Arrow} alt="Arrow" className="scale-150" />
                                    </button>
                                }
                            />
                        </div>
                        <div className="text-[#0A142F]/60 text-sm leading-6">Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</div>
                    </div>
                </div>
            </div>
            <Divider />
            <div className="grid grid-cols-6 lg:grid-cols-3 gap-4">
                <div className="flex justify-start col-span-1"><Image src={logo} alt="logo"/></div>
                <div className="flex justify-center col-span-5 lg:col-span-1 items-center gap-12">
                    <Link href="#" className="text-[#0A142F] font-normal">Terms</Link>
                    <Link href="#" className="text-[#0A142F] font-normal">Privacy</Link>
                    <Link href="#" className="text-[#0A142F] font-normal">Cookies</Link>
                </div>
                <div className="flex col-span-6 lg:col-span-1 lg:justify-end items-center gap-4 order-first lg:order-last">
                    <Link href="#"><Image src={LinkedIn} alt="LinkedIn" /></Link>
                    <Link href="#"><Image src={Facebook} alt="Facebook" /></Link>
                    <Link href="#"><Image src={Twitter} alt="Twitter" /></Link>
                </div>
            </div>
        </div>
    );
};

export default MyFooter;
