'use client';

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"

const links =[
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Skills',
        path: '/skills',
    },
    {
        name: 'Resume',
        path: '/resume',
    },
    {
        name: 'Work',
        path: '/work',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
    
];

const Nav = () => {
    const pathname=usePathname();
    console.log(pathname);
  return(<nav className="flex gap-8">
    {links.map((links,index)=>
        {
            return<Link href={links.path} key={index} className={`${links.path === pathname && "text-accent border-b-2 border-accent "}capitalize font-medium hover:text-accent transition-all`}>{links.name}</Link>
        }    )
    }
    </nav>
  );
};
export default Nav;