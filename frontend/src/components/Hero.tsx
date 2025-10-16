---
import React from 'react'

export default function Hero(){
  return (
    <section className="container mx-auto p-8 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h2 className="font-serif text-4xl mb-4">Solomon — Photography & Digital Mastery</h2>
        <p className="text-gray-700 mb-6">Professional photography, retouching, training in AI literacy, SEO mastery, and web development — crafted to elevate creators and agencies.</p>
        <div className="flex gap-4">
          <a href="/services" className="px-6 py-3 border border-black rounded font-medium">View Services</a>
          <a href="/services/customize" className="px-6 py-3 bg-gold text-black rounded font-medium">Customize Your Service</a>
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-gray-100 border h-72 rounded flex items-center justify-center">Hero image placeholder</div>
      </div>
    </section>
  )
}

---
