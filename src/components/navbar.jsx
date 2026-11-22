import React from 'react'
import logo from '../assets/logo.svg'
import {navLinks} from '../data/data'

const Navbar = () => {
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
            </div>
        </nav>
    
    </>
  )
}

export default Navbar
