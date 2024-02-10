import { StaticImageData } from 'next/image';

interface TechObject {
    id: React.Key;
    Heading: String;
    Text: String;
    src: string;
    alt: string;
}

interface TechServiceObject {
    id: React.Key;
    Heading: String;
    Text: String;
    src: string;
    alt: string;
}

interface Company {
    id: React.Key;
    src: string;
    alt: string;
}

interface ReviewObject {
	id: React.Key;
	Stars: any;
	Heading: String;
	Text: String;
	ImgSrc: string;
	alt: string;
	Name: String;
	Position: String;
}

interface SuccessObejct {
    id: React.Key;
    Heading: String;
    Text: String;
    ExtraCSS: String;
    ExtraCSS2: String;
    ExtraCSS3: String;
}

interface CrewMember {
    id: React.Key;
    src: StaticImageData;
    alt: string;
}

interface FooterLink {
    id: React.Key;
    text: string;
    href: string;
}

interface FooterColumns {
    id: React.Key;
    Heading: string;
    links: FooterLink[];
}

export type { TechObject, TechServiceObject, Company, ReviewObject, SuccessObejct, CrewMember, FooterColumns};
