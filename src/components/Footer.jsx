import { Link } from 'react-router-dom'
import { Wrench } from 'lucide-react'

const footerLinks = {
  Products: [
    { label: 'MotoShop Pro', href: '/#shop-pro' },
    { label: 'BikeCheck', href: '/#bikecheck' },
    { label: 'MotoFit', href: '/#motofit' },
    { label: 'Pricing', href: '/pricing' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center">
                <Wrench className="w-3.5 h-3.5 text-zinc-950" strokeWidth={2.5} />
              </div>
              <span className="text-[15px] font-black text-white tracking-tight">
                MotoShop
              </span>
            </Link>
            <p className="text-[13px] text-zinc-600 leading-relaxed max-w-[38ch]">
              The motorcycle industry runs on paper and overpriced legacy software.
              We built what should have existed ten years ago.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="md:col-span-2">
              <h4 className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-[13px] text-zinc-600 hover:text-zinc-300 transition-colors duration-150 font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-zinc-700 font-medium">
            Built by OnCall Automation
          </p>
          <p className="text-[11px] text-zinc-700 font-medium">
            {new Date().getFullYear()} MotoShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
