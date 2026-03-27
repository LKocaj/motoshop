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
    accent: 'slate',
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
  slate: {
    badge: 'border-slate-700 bg-slate-800/50 text-slate-400',
    button: 'border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-slate-100',
    check: 'text-slate-600',
    ring: '',
  },
  orange: {
    badge: 'border-orange-500/20 bg-orange-500/5 text-orange-400',
    button: 'bg-orange-500 text-slate-950 hover:bg-orange-400',
    check: 'text-orange-400',
    ring: 'ring-1 ring-orange-500/20',
  },
  emerald: {
    badge: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-400',
    button: 'bg-emerald-500 text-slate-950 hover:bg-emerald-400',
    check: 'text-emerald-400',
    ring: '',
  },
  blue: {
    badge: 'border-blue-500/20 bg-blue-500/5 text-blue-400',
    button: 'bg-blue-500 text-slate-950 hover:bg-blue-400',
    check: 'text-blue-400',
    ring: '',
  },
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <>
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 tracking-tighter leading-none mb-4">
              Simple pricing.
              <br />
              <span className="text-slate-500">Start free, upgrade when ready.</span>
            </h1>
            <p className="text-base text-slate-500 leading-relaxed max-w-[55ch]">
              Every rider gets free tools. Premium products are priced for independent shops,
              not corporate dealership budgets.
            </p>
          </div>

          <div className="flex items-center gap-3 mb-12">
            <span className={`text-sm font-medium ${!annual ? 'text-slate-100' : 'text-slate-500'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                annual ? 'bg-orange-500' : 'bg-slate-700'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                  annual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-slate-100' : 'text-slate-500'}`}>
              Annual
            </span>
            {annual && (
              <span className="text-xs font-medium text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded">
                Save 20%
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tiers.map((tier) => {
              const colors = accentMap[tier.accent]
              return (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl border border-slate-800/60 bg-slate-900/30 p-8 ${colors.ring} ${
                    tier.popular ? 'md:scale-[1.02]' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-8">
                      <span className="text-xs font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                        Most popular
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${colors.badge}`}>
                      <tier.icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-100">{tier.name}</h3>
                  </div>

                  <p className="text-sm text-slate-500 mb-4">{tier.description}</p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-bold text-slate-100">{tier.price}</span>
                    <span className="text-sm text-slate-500">{tier.period}</span>
                  </div>

                  {tier.tiers && (
                    <div className="mb-6 space-y-2">
                      {tier.tiers.map((sub) => (
                        <div key={sub.name} className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-800/30">
                          <div>
                            <span className="text-sm font-medium text-slate-300">{sub.name}</span>
                            <span className="text-xs text-slate-500 ml-2">{sub.note}</span>
                          </div>
                          <span className="text-sm font-semibold text-slate-200">{sub.price}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <button
                    className={`w-full text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 active:scale-[0.98] mb-8 ${colors.button}`}
                  >
                    {tier.cta}
                  </button>

                  <div className="space-y-2.5">
                    {tier.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${colors.check}`} />
                        <span className="text-sm text-slate-400">{f}</span>
                      </div>
                    ))}
                    {tier.limits.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <Minus className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600">{f}</span>
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
      <section className="py-24 border-t border-slate-800/40">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight mb-12">
            Common questions
          </h2>
          <div className="divide-y divide-slate-800/40">
            {[
              {
                q: 'Can I use the free tier forever?',
                a: 'Yes. The free tier has no time limit and no credit card required. You get bike lookup, community repair estimates, market valuations, and your personal garage — all free.',
              },
              {
                q: 'How is BikeCheck different from CycleVIN?',
                a: 'BikeCheck pulls from more data sources, includes real-time market valuation based on actual sold listings, and provides open recall alerts. CycleVIN gives you basic title status. We give you the full picture.',
              },
              {
                q: 'I run a small shop with just me. Is MotoShop Pro worth it?',
                a: 'The Solo plan at $49/month replaces your paper work orders, gives you online booking, and lets you text customers when their bike is ready. Most solo mechanics save 5-8 hours per week on admin alone.',
              },
              {
                q: 'Does MotoFit cover older bikes?',
                a: 'We are building the database starting with bikes from 2000 onward, with community-contributed fitment data going back further. If your bike is not covered yet, you can request it and our community fills in the gaps.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes. No contracts, no cancellation fees. You can downgrade to the free tier at any time and keep your data.',
              },
            ].map((faq, i) => (
              <div key={i} className="py-6">
                <h3 className="text-sm font-semibold text-slate-200 mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="py-24 border-t border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tighter mb-4">
            Ready to modernize your shop?
          </h2>
          <p className="text-sm text-slate-500 max-w-[45ch] mx-auto mb-8">
            Join the early access. Free account takes 30 seconds.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-950 bg-orange-500 px-8 py-3 rounded-lg hover:bg-orange-400 transition-all duration-200 active:scale-[0.98]"
          >
            Get started free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
