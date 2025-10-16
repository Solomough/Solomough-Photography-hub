---
import Link from 'next/link'

const SERVICES = [
  { id: 'photography', title: 'Photography & Shoots', desc: 'On-location and studio sessions, multi-tier packages.' },
  { id: 'retouch', title: 'Photo Retouching', desc: 'High-end retouching and color grading.' },
  { id: 'training', title: 'Training & Workshops', desc: 'AI literacy, SEO, Web dev for creators.' },
]

export default function Services(){
  return (
    <section className="container mx-auto p-8">
      <h3 className="font-serif text-2xl mb-6">Core Services</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {SERVICES.map(s=> (
          <article key={s.id} className="p-6 border rounded">
            <h4 className="font-semibold mb-2">{s.title}</h4>
            <p className="text-gray-600 mb-4">{s.desc}</p>
            <Link href={`/services/${s.id}`} className="text-accent underline">Customize</Link>
          </article>
        ))}
      </div>
    </section>
  )
}

---
