"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({href, children}) => {
    const pathName = usePathname()
    return (
       <Link
       className={`${pathName === href && 'underline'}`}
       href={href}>{children}</Link>
    );
};

export default NavLink;