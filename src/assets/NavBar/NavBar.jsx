import React, { useState } from 'react';
import Link from './link';
import { MenuIcon, X } from 'lucide-react';
const navigationData =[
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" }
]

const NavBar = () => {
    const [open, setOpen] = useState()
    const navLinks = navigationData.map(link => <Link link={link}></Link>)
    return (
        < div className='border-b border-gray-300'>
            <nav className='flex justify-between m-8 '>
                <span className='flex gap-3' onClick={()=> setOpen(!open)}>
                    {open ? <X></X> : <MenuIcon className='md:hidden'></MenuIcon>}
                    <ul className={`md:hidden absolute bg-amber-200 rounded duration-1000 ${open ? 'top-14' : '-top-30'}`}>
                        {
                            navLinks
                        }
                    </ul>
                    <h2>My Nav</h2>
                </span>
                    <ul className='md:flex gap-10 hidden'>
                        {
                            navLinks
                        }
                    </ul>
                {/* <ul className='flex gap-10'>
                    {navigationData.map(route  => <li><a href={route.path}>{route.name}</a></li> )}
                </ul> */}
                {/* <ul className='flex gap-1'>
                    <li><a href="http://">about</a></li>
                    <li><a href="http://">home</a></li>
                    <li><a href="http://">contact</a></li>
                </ul> */}
                <button>Log In</button>
            </nav>
        </div>
    );
};

export default NavBar;