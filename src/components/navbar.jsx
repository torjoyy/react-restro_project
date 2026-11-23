import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import {navLinks} from '../data/data'
import { MenuIcon, XIcon } from 'lucide-react'

const Navbar = () => {

    const [mobileOpen, setmobileOpen] = useState(false);

  return (
    <>
        <nav className='fixed top-0 z-20 mx-auto w-full transition-all duration-300'>
            <div className='flex items-center justify-between p-2 font-medium py-4 mx-auto max-w-7xl'>
                {/**navlogo*/}
                <a href=""><img src={logo}/></a>

                {/**navlinks*/}
                <div className='space-x-5 hidden md:flex'>
                    {navLinks.map((links) => (
                        <a key={links.name}>{links.name}</a>
                    ))
                    }
                </div>

                {/**Cta */}
                <a href="" className='hidden md:flex
                px-6 py-3 rounded-2xl bg-orange-500 text-white hover:bg-orange-400'>book a table</a>

                {/**menu button */}
                <button onClick={()=>setmobileOpen(true)}
                className='md:hidden bg-zinc-500 text-white rounded-sm p-2 aspect-square'><MenuIcon/></button>
            </div>
        </nav>


        {/**mobile navigation drawer */}
        <div className={`p-8 fixed inset-0 z-40 bg-gray-500/50 backdrop-blur-md
            transition-transform duration-100
            ${mobileOpen? 'translate-x-0' : 'translate-x-full'}`}>

            <div className='flex flex-col font-medium items-center space-y-5'>
                {navLinks.map((links, index)=>(
                    <a key={index} href="" className="">{links.name}</a>
                ))}

            <button onClick={()=>setmobileOpen(false)}
             className='bg-zinc-500 hover:bg-orange-500 transition duration-300 text-white p-1 rounded-sm aspect-square'><XIcon/></button>
            </div>

        </div>
    
    </>
  )
}

export default Navbar
