import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Wrench } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'MotoShop Pro', href: '/#shop-pro' },
  { label: 'BikeCheck', href: '/#bikecheck' },
  { label: 'MotoFit', href: '/#motofit' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-[0.96] group-active:scale-[0.92]">
            <Wrench className="w-5 h-5 text-slate-950" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold text-slate-100 tracking-tight">
            MotoShop
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-slate-100 ${
                location.pathname === link.href
                  ? 'text-orange-400'
                  : 'text-slate-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/pricing"
            className="text-sm font-medium text-slate-300 px-4 py-2 rounded-lg border border-slate-700 hover:border-slate-500 transition-all duration-200 hover:text-slate-100 active:scale-[0.98]"
          >
            Log in
          </Link>
          <Link
            to="/pricing"
            className="text-sm font-semibold text-slate-950 bg-orange-500 px-5 py-2 rounded-lg hover:bg-orange-400 transition-all duration-200 active:scale-[0.98]"
          >
            Get started free
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-slate-400 hover:text-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-800/60 bg-slate-950/95 backdrop-blur-xl px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-slate-400 hover:text-slate-100 py-2 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-800/60 space-y-2">
            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className="block text-center text-sm font-medium text-slate-300 px-4 py-2.5 rounded-lg border border-slate-700"
            >
              Log in
            </Link>
            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className="block text-center text-sm font-semibold text-slate-950 bg-orange-500 px-4 py-2.5 rounded-lg"
            >
              Get started free
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
