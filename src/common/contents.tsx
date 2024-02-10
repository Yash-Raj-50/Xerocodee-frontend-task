import { TechObject, TechServiceObject, Company, ReviewObject, SuccessObejct, CrewMember, FooterColumns } from './Types'

export const TechObjectItems: TechObject[] = [
    {
        id: 1,
        Heading: "Front-end",
        Text: "Our frontend developers understand the delicate balance between aesthetics and functionality.",
        src: Monitor,
        alt: "Monitor",
    },
    {
        id: 2,
        Heading: "Back-end",
        Text: "Our backend developers are the architects of efficiency and security. They design and build the databases andAPIs.",
        src: Simcard,
        alt: "Simcard",
    },
    {
        id: 3,
        Heading: "Data Analysts",
        Text: "Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts.",
        src: Driver,
        alt: "Driver",
    },
];

export const TechServiceObjects: TechServiceObject[] = [
    {
        id: 1,
        Heading: "Custom SoftwareDevelopment",
        Text: "Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
        src: DocumentCode,
        alt: "Document Code",
    },
    {
        id: 2,
        Heading: "QA and Testing",
        Text: "Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
        src: Settings,
        alt: "Settings",
    },
    {
        id: 3,
        Heading: "AI and Data Science",
        Text: "Use leading AI, machine learning, and data engineering technologies to unlock business value.",
        src: Data,
        alt: "Driver",
    },
    {
        id: 4,
        Heading: "UX/UI Design",
        Text: "Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.",
        src: Brush,
        alt: "Brush",
    },
    {
        id: 5,
        Heading: "Mobile App Development",
        Text: "Build performant, scalable, and secure mobile applications for iOS and Android devices.",
        src: Mobile,
        alt: "Mobile",
    },
    {
        id: 6,
        Heading: "Platform and Infrastructure",
        Text: "Ensure applications are secure, fault tolerant and highly available with our DevOps and Security engineers.",
        src: Shapes,
        alt: "Shapes",
    },
];

export const Companies: Company[] = [
    {
      id: 1,
      src: Samsung,
      alt: "Samsung"
    },
    {
      id: 2,
      src: Google,
      alt: "Google"
    },
    {
      id: 3,
      src: Microsoft,
      alt: "Microsoft"
    },
    {
      id: 4,
      src: Slack,
      alt: "Slack"
    },
    {
      id: 5,
      src: LG,
      alt: "LG"
    },
    {
      id: 6,
      src: Sony,
      alt: "Sony"
    }
]

export const MyReviews: ReviewObject[] = [
	{
		id: 1,
		Stars: Star,
		Heading: `"Exceptional Solutions, Exceeded Expectations!"`,
		Text: `"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."`,
		ImgSrc: Loom,
		alt: "Profile Picture",
		Name: "Mary Johnson",
		Position: "CEO of TechCraft Solutions"
	},
	{
		id: 2,
		Stars: Star,
		Heading: `"Transformed Our Business with Innovative Tech!"`,
		Text: `"We owe a significant part of our success to [Company Name]. Their custom software solution streamlined our processes, saving us time and resources. Their team's dedication to innovation and problem-solving is unmatched. We're grateful for their partnership."`,
		ImgSrc: Logo_Mark,
		alt: "Profile Picture",
		Name: "Mark Williams",
		Position: "COO of InnovateNow Inc"
	},
	{
		id: 3,
		Stars: Star,
		Heading: `"Sculpted User Experiences Beyond Imagination!"`,
		Text: `"The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level."`,
		ImgSrc: Dovetail,
		alt: "Profile Picture",
		Name: "Emily Clark",
		Position: "CMO of Visionary Apps"
	},
	{
		id: 4,
		Stars: Star,
		Heading: `"Sculpted User Experiences Beyond Imagination!"`,
		Text: `"The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level."`,
		ImgSrc: Dovetail,
		alt: "Profile Picture",
		Name: "Emily Clark",
		Position: "CMO of Visionary Apps"
	}
]

export const SuccessObejcts: SuccessObejct[] = [
    {
        id: 1,
        Heading: "Expertise Across the Tech Spectrum",
        Text: "Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.",
        ExtraCSS: "bg-white",
        ExtraCSS2: "text-black/70e",
        ExtraCSS3: "text-black/60"
    },
    {
        id: 2,
        Heading: "Proven Track Record of Success:",
        Text: "Our portfolio is a testament to our ability to deliver impactful results.",
        ExtraCSS: "bg-gradient-to-tr from-[#EDE14F] to-[#62AE6E]",
        ExtraCSS2: "text-white",
        ExtraCSS3: "text-white"
    },
    {
        id: 3,
        Heading: "Collaborative Approach, Transparent Communication:",
        Text: "We believe in working hand-in-hand with our clients.",
        ExtraCSS: "bg-white",
        ExtraCSS2: "text-black/70",
        ExtraCSS3: "text-black/60"
    },
    {
        id: 4,
        Heading: "Tailored Solutions for Your Unique Needs:",
        Text: "We understand that no two projects are alike.",
        ExtraCSS: "bg-gradient-to-tr from-[#4AC0F2] to-[#3171DE]",
        ExtraCSS2: "text-white",
        ExtraCSS3: "text-white"
    },
]

export const CrewMembers: CrewMember[] = [
    {
        id: 1,
        src: SoftwareDeveloper,
        alt: "Crew Member"
    },
    {
        id: 2,
        src: QAEngineers,
        alt: "Crew Member"
    },
    {
        id: 3,
        src: UX_Designer,
        alt: "Crew Member"
    },
    {
        id: 4,
        src: DataScientist,
        alt: "Crew Member"
    },
    {
        id: 5,
        src: ProjectManager,
        alt: "Crew Member"
    },
]

export const FooterLinks: FooterColumns[] = [
    {
        id: 1,
        Heading: "Product",
        links: [
            {
                id: 1,
                text: "Employee database",
                href: "/"
            },
            {
                id: 2,
                text: "Payroll",
                href: "/"
            },
            {
                id: 3,
                text: "Absences",
                href: "/"
            },
            {
                id: 4,
                text: "Time tracking",
                href: "/"
            },
            {
                id: 5,
                text: "Shift planner",
                href: "/"
            },
            {
                id: 6,
                text: "Recruiting",
                href: "/"
            },
        ]
    },
    {
        id: 2,
        Heading: "Information",
        links: [
            {
                id: 1,
                text: "FAQ",
                href: "/"
            },
            {
                id: 2,
                text: "Blog",
                href: "/"
            },
            {
                id: 3,
                text: "Support",
                href: "/"
            },
        ]
    },
    {
        id: 3,
        Heading: "Company",
        links: [
            {
                id: 1,
                text: "About us",
                href: "/"
            },
            {
                id: 2,
                text: "Careers",
                href: "/"
            },
            {
                id: 3,
                text: "Contact us",
                href: "/"
            },
            {
                id: 4,
                text: "Lift Media",
                href: "/"
            },
        ]
    },
]

export const NavbarMenuItems = [
    "Home",
    "About Us",
    "Services",
    "Contact Us",
];

import Monitor from '../static/svgs/monitor.svg'
import Simcard from '../static/svgs/simcard.svg'
import Driver from '../static/svgs/driver.svg'
import DocumentCode from '../static/svgs/document-code.svg'
import Settings from '../static/svgs/setting-5.svg'
import Data from '../static/svgs/data.svg'
import Brush from '../static/svgs/brush.svg'
import Mobile from '../static/svgs/mobile.svg'
import Shapes from '../static/svgs/shapes.svg'
import Samsung from "../static/svgs/companies/samsung.svg";
import Google from "../static/svgs/companies/google.svg";
import Microsoft from "../static/svgs/companies/microsoft.svg";
import Slack from "../static/svgs/companies/slack.svg";
import LG from "../static/svgs/companies/lg.svg";
import Sony from "../static/svgs/companies/sony.svg";
import Loom from '../static/svgs/companies/Loom.svg'
import Logo_Mark from '../static/svgs/companies/Logo_Mark.svg'
import Dovetail from '../static/svgs/companies/Dovetail.svg'
import Star from '../static/svgs/Stars.jpg'
import SoftwareDeveloper from '../static/Images/Frame 3254.png'
import QAEngineers from '../static/Images/Frame 3254-1.png'
import DataScientist from '../static/Images/Frame 3254-2.png'
import ProjectManager from '../static/Images/Frame 3254-3.png'
import UX_Designer from '../static/Images/UX_Designer.png'
