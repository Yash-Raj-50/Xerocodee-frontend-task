'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { ChevronDown } from 'lucide-react';
import logo from '../static/svgs/Logo.svg'
import Image from "next/image";
import { NavbarMenuItems } from '@/common/contents'

export default function MyNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["EN"]));
    const [activeLink, setActiveLink] = React.useState(0);
    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll maxWidth="2xl" className="mt-4">
            <NavbarContent>
                <NavbarBrand>
                    <Image src={logo} alt="logo" />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden lg:flex gap-16 px-20 rounded-full h-12 bg-[#F7F7FD]" justify="center">
                {NavbarMenuItems.map((item, index) => (
                    <NavbarItem key={`${item}-${index}`} isActive={index === activeLink}>
                        <Link
                            className={`w-full text-[#0A142F] text-lg font-normal ${index === activeLink ? "text-[#3171DE]" : ""}`}
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent className="hidden lg:flex gap-2" justify="end">
                <NavbarItem>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="light" className="capitalize">{selectedValue}<ChevronDown /></Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Single selection example"
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedKeys}
                            onSelectionChange={() => setSelectedKeys}
                        >
                            <DropdownItem key="EN">EN</DropdownItem>
                            <DropdownItem key="FR">FR</DropdownItem>
                            <DropdownItem key="ES">ES</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} radius="full" className="bg-[#3171DE] text-white h-12" href="#" variant="flat">
                        <span className="mx-2">
                            Schedule a Call
                        </span>
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="lg:hidden" justify="end">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="lg:hidden"
                />
            </NavbarContent>
            <NavbarMenu>
                {NavbarMenuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color="foreground"
                            className="w-full pt-8"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
