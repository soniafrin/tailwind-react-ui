import React from 'react';
import Link from './link';
const navigationData =[
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" }
]

const NavBar = () => {
    return (
        <nav>
                <ul className='flex gap-10'>
                    {
                    navigationData.map(link => <Link link={link}></Link> )
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
        </nav>
    );
};

export default NavBar;