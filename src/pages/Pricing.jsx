import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Wrench,
  FileSearch,
  Puzzle,
  CheckCircle2,
  ArrowRight,
  Users,
  Minus,
} from 'lucide-react'

const tiers = [
  {
    name: 'Free',
    description: 'For riders who want basic tools and community access.',
    price: '$0',
    period: 'forever',
    cta: 'Create free account',
    icon: Users,
    accent: 'zinc',
    features: [
      'Bike lookup by VIN or year/make/model',
      'Community repair cost estimates',
      'Market valuation estimates',
      'Maintenance schedule reminders',
      'Garage — track your bikes',
      'Basic parts compatibility check',
    ],
    limits: [
      'No VIN history reports',
      'No shop management tools',
      'No API access',
    ],
  },
  {
    name: 'MotoShop Pro',
    description: 'Full shop management for independent motorcycle businesses.',
    price: '$49',
    period: '/month',
    cta: 'Start 14-day free trial',
    icon: Wrench,
    accent: 'orange',
    popular: true,
    tiers: [
      { name: 'Solo', price: '$49/mo', note: '1 user, 50 work orders/mo' },
      { name: 'Shop', price: '$99/mo', note: '5 users, unlimited work orders' },
      { name: 'Enterprise', price: '$199/mo', note: 'Unlimited users + API' },
    ],
    features: [
      'Everything in Free',
      'Digital work orders',
      'Appointment scheduling',
      'Customer SMS/text updates',
      'Parts inventory management',
      'Invoicing & payment processing',
      'Revenue analytics dashboard',
      'Online booking page',
      'Multi-location support (Enterprise)',
      'API access (Enterprise)',
    ],
    limits: [],
  },
  {
    name: 'BikeCheck',
    description: 'VIN history reports for used motorcycle buyers and dealers.',
    price: '$14.99',
    period: '/report',
    cta: 'Run your first report',
    icon: FileSearch,
    accent: 'emerald',
    tiers: [
      { name: 'Single Report', price: '$14.99', note: '1 VIN report' },
      { name: '3-Pack', price: '$34.99', note: '$11.66 per report' },
      { name: 'Unlimited', price: '$99/mo', note: 'For dealers & shops' },
    ],
    features: [
      'Title status verification',
      'Theft record check',
      'Accident & damage history',
      'Open recall alerts',
      'Odometer fraud detection',
      'Registration & lien history',
      'Real-time market valuation',
      'Downloadable PDF report',
      'Dealer dashboard (Unlimited)',
      'Embed on your website (Unlimited)',
    ],
    limits: [],
  },
  {
    name: 'MotoFit',
    description: 'Parts fitment database and cross-reference tool.',
    price: '$0',
    period: 'for riders',
    cta: 'Search parts free',
    icon: Puzzle,
    accent: 'blue',
    tiers: [
      { name: 'Rider', price: 'Free', note: 'Basic fitment lookup' },
      { name: 'Business', price: '$29/mo', note: 'Advanced search + export' },
      { name: 'Enterprise', price: '$99/mo', note: 'API access + bulk lookup' },
    ],
    features: [
      'Year/make/model fitment search',
      'Part number cross-reference',
      'OEM interchange lookup',
      'Aftermarket compatibility',
      'Community-verified data',
      'Bulk fitment lookup (Business)',
      'CSV/JSON export (Business)',
      'REST API access (Enterprise)',
      'Custom integrations (Enterprise)',
      'Priority support (Enterprise)',
    ],
    limits: [],
  },
]

const accentMap = {
  zinc: {
    badge: 'border-zinc-700 bg-zinc-800/60 text-zinc-400',
    button: 'border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white',
    check: 'text-zinc-600',
    ring: '',
    sub: 'bg-zinc-800/40',
  },
  orange: {
    badge: 'border-orange-500/15 bg-orange-500/[0.06] text-orange-400',
    button: 'bg-orange-500 text-zinc-950 hover:bg-orange-400',
    check: 'text-orange-400/70',
    ring: 'ring-1 ring-orange-500/15',
    sub: 'bg-orange-500/[0.04]',
  },
  emerald: {
    badge: 'border-emerald-500/15 bg-emerald-500/[0.06] text-emerald-400',
    button: 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400',
    check: 'text-emerald-400/70',
    ring: '',
    sub: 'bg-emerald-500/[0.04]',
  },
  blue: {
    badge: 'border-blue-500/15 bg-blue-500/[0.06] text-blue-400',
    button: 'bg-blue-500 text-zinc-950 hover:bg-blue-400',
    check: 'text-blue-400/70',
    ring: '',
    sub: 'bg-blue-500/[0.04]',
  },
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <>
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <h1 className="text-4xl md:text-[3.5rem] font-black text-white tracking-[-0.035em] leading-[1.05] mb-5">
              Simple pricing.
            </h1>
            <p className="text-[15px] text-zinc-500 leading-relaxed max-w-[48ch]">
              Every rider gets free tools. Premium products are priced for independent
              shops — not corporate dealership budgets.
            </p>
          </div>

          <div className="flex items-center gap-3 mb-14">
            <span className={`text-[13px] font-semibold transition-colors ${!annual ? 'text-white' : 'text-zinc-600'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                annual ? 'bg-orange-500' : 'bg-zinc-700'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                  annual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-[13px] font-semibold transition-colors ${annual ? 'text-white' : 'text-zinc-600'}`}>
              Annual
            </span>
            {annual && (
              <span className="text-[10px] font-bold text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded-full border border-orange-400/20 tracking-wide">
                SAVE 20%
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tiers.map((tier) => {
              const colors = accentMap[tier.accent]
              return (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 ${colors.ring} transition-colors duration-200 hover:bg-zinc-900/80`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-8">
                      <span className="text-[10px] font-bold text-orange-400 bg-orange-500/10 border border-orange-500/15 px-3 py-1 rounded-full tracking-wide">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${colors.badge}`}>
                      <tier.icon className="w-4 h-4" strokeWidth={2} />
                    </div>
                    <h3 className="text-[17px] font-black text-white">{tier.name}</h3>
                  </div>

                  <p className="text-[13px] text-zinc-500 mb-5 font-medium">{tier.description}</p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-black text-white tracking-tight">{tier.price}</span>
                    <span className="text-[13px] text-zinc-600 font-medium">{tier.period}</span>
                  </div>

                  {tier.tiers && (
                    <div className="mb-6 space-y-1.5">
                      {tier.tiers.map((sub) => (
                        <div key={sub.name} className={`flex items-center justify-between py-2.5 px-3.5 rounded-lg ${colors.sub} border border-zinc-800/40`}>
                          <div>
                            <span className="text-[13px] font-semibold text-zinc-300">{sub.name}</span>
                            <span className="text-[11px] text-zinc-600 ml-2 font-medium">{sub.note}</span>
                          </div>
                          <span className="text-[13px] font-bold text-zinc-200">{sub.price}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link
                    to={tier.name === 'Free' ? '/' : `/#${tier.name === 'MotoShop Pro' ? 'shop-pro' : tier.name === 'BikeCheck' ? 'bikecheck' : 'motofit'}`}
                    className={`block text-center w-full text-[13px] font-bold px-5 py-3 rounded-xl transition-all duration-150 active:translate-y-px mb-8 ${colors.button}`}
                  >
                    {tier.cta}
                  </Link>

                  <div className="space-y-2.5">
                    {tier.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${colors.check}`} strokeWidth={2} />
                        <span className="text-[13px] text-zinc-400 font-medium">{f}</span>
                      </div>
                    ))}
                    {tier.limits.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <Minus className="w-3.5 h-3.5 text-zinc-800 shrink-0 mt-0.5" />
                        <span className="text-[13px] text-zinc-700 font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="py-24 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-14">
            Common questions
          </h2>
          <div className="divide-y divide-zinc-800/40">
            {[
              {
                q: 'Can I use the free tier forever?',
                a: 'Yes. No time limit, no credit card. You get bike lookup, community repair estimates, market valuations, and your personal garage — all free.',
              },
              {
                q: 'How is BikeCheck different from CycleVIN?',
                a: 'BikeCheck pulls from more data sources, includes real-time market valuation based on actual sold listings, and provides open recall alerts. CycleVIN gives you basic title status. We give you the full picture.',
              },
              {
                q: 'I run a small shop with just me. Is MotoShop Pro worth it?',
                a: 'The Solo plan at $49/month replaces paper work orders, gives you online booking, and lets you text customers when their bike is ready. Most solo mechanics save 5-8 hours per week on admin.',
              },
              {
                q: 'Does MotoFit cover older bikes?',
                a: 'We are building the database starting with 2000+ models, with community-contributed fitment data going further back. You can request coverage for any model.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes. No contracts, no cancellation fees. Downgrade to free at any time and keep your data.',
              },
            ].map((faq, i) => (
              <div key={i} className="py-7">
                <h3 className="text-[14px] font-bold text-white mb-2.5">{faq.q}</h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="py-24 border-t border-zinc-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-orange-500/3 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <h2 className="text-3xl md:text-[2.5rem] font-black text-white tracking-[-0.03em] mb-4">
            Ready to modernize your shop?
          </h2>
          <p className="text-[14px] text-zinc-500 max-w-[40ch] mx-auto mb-8 font-medium">
            Join the early access. Free account takes 30 seconds.
          </p>
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2.5 text-[15px] font-bold text-zinc-950 bg-orange-500 px-8 py-3.5 rounded-xl hover:bg-orange-400 transition-all duration-200 active:translate-y-px"
          >
            Get started free
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </>
  )
}
