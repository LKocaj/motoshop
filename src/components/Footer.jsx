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
    { label: 'About', href: '/#about' },
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
    <footer className="border-t border-slate-800/60 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                <Wrench className="w-4 h-4 text-slate-950" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold text-slate-100 tracking-tight">
                MotoShop
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-[40ch]">
              The motorcycle industry runs on paper and overpriced legacy software.
              We built what should have existed ten years ago.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="md:col-span-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            Built by OnCall Automation
          </p>
          <p className="text-xs text-slate-600">
            {new Date().getFullYear()} MotoShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
