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
    <nav className="sticky top-0 z-40 border-b border-zinc-800/50 bg-zinc-950/85 backdrop-blur-xl backdrop-saturate-150">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center transition-transform duration-150 group-active:scale-[0.92]">
            <Wrench className="w-4 h-4 text-zinc-950" strokeWidth={2.5} />
          </div>
          <span className="text-[17px] font-black text-white tracking-tight">
            MotoShop
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-[13px] font-semibold transition-colors duration-150 hover:text-white ${
                location.pathname === link.href
                  ? 'text-orange-400'
                  : 'text-zinc-500'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2.5">
          <Link
            to="/pricing"
            className="text-[13px] font-semibold text-zinc-400 px-4 py-2 rounded-lg hover:text-white transition-colors duration-150"
          >
            Log in
          </Link>
          <Link
            to="/pricing"
            className="text-[13px] font-bold text-zinc-950 bg-orange-500 px-5 py-2 rounded-lg hover:bg-orange-400 transition-all duration-150 active:translate-y-px"
          >
            Get started free
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-zinc-500 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-800/50 bg-zinc-950/95 backdrop-blur-xl px-6 py-5 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setOpen(false)}
              className="block text-[14px] font-semibold text-zinc-400 hover:text-white py-2.5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-zinc-800/50 space-y-2.5">
            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className="block text-center text-[14px] font-semibold text-zinc-300 px-4 py-2.5 rounded-lg border border-zinc-700"
            >
              Log in
            </Link>
            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className="block text-center text-[14px] font-bold text-zinc-950 bg-orange-500 px-4 py-2.5 rounded-lg"
            >
              Get started free
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
