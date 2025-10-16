---
import Link from 'next/link'
import React from 'react'

export default function Navbar(){
  const [open, setOpen] = React.useState(false)
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-gold font-serif">S</div>
          <div>
            <h1 className="font-serif text-xl">Solomough Photography Hub</h1>
            <p className="text-sm text-gray-600">Out of Darkness to Light</p>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/auth/signin" className="px-4 py-2 border rounded">Sign in</Link>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="menu">☰</button>
      </div>
    </header>
  )
}

---
