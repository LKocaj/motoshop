import { Link } from 'react-router-dom'
import {
  Wrench,
  FileSearch,
  Puzzle,
  ClipboardList,
  Calendar,
  MessageSquare,
  Receipt,
  Search,
  ShieldCheck,
  BarChart3,
  Cog,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Users,
  Store,
  Bike,
  DollarSign,
} from 'lucide-react'

const marketStats = [
  { value: '$49.3B', label: 'US motorcycle industry', icon: DollarSign },
  { value: '15,781', label: 'Shops still using paper', icon: Store },
  { value: '9.6M', label: 'Registered motorcycles', icon: Bike },
  { value: '$173B', label: 'Global aftermarket parts', icon: Cog },
]

const problems = [
  {
    pain: 'Shops run on paper work orders and spreadsheets',
    detail: 'The average independent motorcycle shop has zero digital workflow. Scheduling, parts tracking, invoicing — all manual.',
  },
  {
    pain: 'Carfax does not cover motorcycles',
    detail: 'Used bike buyers have no trusted way to check VIN history. CycleVIN is bare-bones. There is no brand trust.',
  },
  {
    pain: 'Parts fitment is a guessing game',
    detail: 'There is no universal cross-reference database. Riders buy wrong parts constantly. Returns eat into margins.',
  },
  {
    pain: 'Existing DMS software costs $450-3,000/month',
    detail: 'Lightspeed is the market leader and it is described by its own users as "archaic" and "not intuitive."',
  },
]

const freeFeatures = [
  'Basic bike lookup by VIN or year/make/model',
  'Community repair cost estimates',
  'Market valuation estimates',
  'Maintenance schedule reminders',
  'Garage — track your bikes and service history',
  'Parts compatibility quick-check',
]

export default function Home() {
  return (
    <>
      {/* ───── HERO — Split screen, left-aligned ───── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-slate-950" />
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-xs font-medium text-orange-400 tracking-wide uppercase">
                  Now in early access
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 tracking-tighter leading-none mb-6">
                The motorcycle industry
                <br />
                <span className="text-orange-500">deserves better software.</span>
              </h1>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-[55ch] mb-8">
                Shop management, VIN history reports, and parts fitment — everything
                motorcycle businesses need, built into one platform. No more
                paper. No more $3,000/month legacy tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-950 bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-400 transition-all duration-200 active:scale-[0.98]"
                >
                  Start free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-300 px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 hover:text-slate-100 transition-all duration-200 active:scale-[0.98]"
                >
                  See what we built
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-orange-500/10 rounded-3xl blur-3xl" />
                <div className="relative rounded-2xl border border-slate-800/80 bg-slate-900/80 p-6 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-800/60">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                      <Wrench className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-200">Northside Moto Works</p>
                      <p className="text-xs text-slate-500">3 active work orders</p>
                    </div>
                  </div>
                  {[
                    { bike: '2019 Ducati Monster 821', status: 'In Progress', color: 'text-orange-400 bg-orange-400/10', service: 'Valve adjustment + new chain' },
                    { bike: '2022 Kawasaki ZX-6R', status: 'Waiting Parts', color: 'text-amber-400 bg-amber-400/10', service: 'Clutch basket replacement' },
                    { bike: '2017 Triumph Street Triple', status: 'Ready', color: 'text-emerald-400 bg-emerald-400/10', service: 'Full service + tires' },
                  ].map((order, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between py-3 ${
                        i < 2 ? 'border-b border-slate-800/40' : ''
                      }`}
                    >
                      <div>
                        <p className="text-sm font-medium text-slate-200">{order.bike}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{order.service}</p>
                      </div>
                      <span className={`text-xs font-medium px-2 py-1 rounded-md ${order.color}`}>
                        {order.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── MARKET STATS ───── */}
      <section className="border-y border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {marketStats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <stat.icon className="w-5 h-5 text-slate-600 mb-2 mx-auto md:mx-0" />
                <p className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight">{stat.value}</p>
                <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── THE PROBLEM ───── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="md:pl-[15vw] mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">The problem</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tighter leading-tight max-w-[50ch]">
              The motorcycle world is running on
              <br />
              technology from 2005.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800/30 rounded-2xl overflow-hidden">
            {problems.map((p, i) => (
              <div key={i} className="bg-slate-950 p-8 md:p-10">
                <p className="text-lg font-semibold text-slate-100 mb-2">{p.pain}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FEATURES / 3 PREMIUM PRODUCTS — Zig-zag layout ───── */}
      <section id="features" className="py-24 md:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 max-w-2xl">
            <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">Premium Products</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tighter leading-tight mt-3">
              Three tools the moto world has been missing.
            </h2>
            <p className="text-base text-slate-500 leading-relaxed mt-4 max-w-[55ch]">
              Each one solves a problem that costs shops and riders real money. Use them
              individually or together as one platform.
            </p>
          </div>

          {/* ── PRODUCT 1: MotoShop Pro ── */}
          <div id="shop-pro" className="scroll-mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center mb-32">
            <div className="md:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 mb-4">
                <Wrench className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-xs font-semibold text-orange-400">MotoShop Pro</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight mb-4">
                Run your shop from one screen.
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-[45ch]">
                Work orders, scheduling, parts inventory, customer texting, invoicing, and
                online booking — built for motorcycle shops, not car dealerships.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: ClipboardList, text: 'Digital work orders' },
                  { icon: Calendar, text: 'Appointment scheduling' },
                  { icon: MessageSquare, text: 'Customer text updates' },
                  { icon: Receipt, text: 'Invoicing & payments' },
                  { icon: Cog, text: 'Parts inventory' },
                  { icon: BarChart3, text: 'Revenue analytics' },
                ].map((f) => (
                  <div key={f.text} className="flex items-center gap-2.5">
                    <f.icon className="w-4 h-4 text-orange-400 shrink-0" />
                    <span className="text-sm text-slate-300">{f.text}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold text-slate-400 mt-6">
                From <span className="text-orange-400">$49/mo</span>
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-sm font-semibold text-slate-300">Today's Schedule</h4>
                  <span className="text-xs text-slate-600">March 26, 2026</span>
                </div>
                <div className="space-y-3">
                  {[
                    { time: '9:00 AM', client: 'Marcus Rivera', bike: '2021 Harley Sportster S', job: 'Full service', duration: '2h', status: 'bg-emerald-400' },
                    { time: '11:30 AM', client: 'Kenji Watanabe', bike: '2023 BMW R1250GS', job: 'Fork seal replacement', duration: '3h', status: 'bg-orange-400' },
                    { time: '2:00 PM', client: 'Diana Costello', bike: '2020 Aprilia RSV4', job: 'ECU flash + tune', duration: '1.5h', status: 'bg-slate-600' },
                    { time: '4:00 PM', client: 'Tomasz Kowalski', bike: '2018 KTM 690 Enduro', job: 'Chain + sprockets', duration: '1h', status: 'bg-slate-600' },
                  ].map((appt, i) => (
                    <div key={i} className="flex items-center gap-4 py-3 border-b border-slate-800/40 last:border-0">
                      <span className="text-xs font-mono text-slate-600 w-16 shrink-0">{appt.time}</span>
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${appt.status}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-200 truncate">{appt.client}</p>
                        <p className="text-xs text-slate-500 truncate">{appt.bike} — {appt.job}</p>
                      </div>
                      <span className="text-xs text-slate-600 shrink-0">{appt.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── PRODUCT 2: BikeCheck — reversed layout ── */}
          <div id="bikecheck" className="scroll-mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center mb-32">
            <div className="md:col-span-7 md:order-1">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/40">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-sm font-semibold text-slate-200">VIN Report: JH2RC510XLM200847</p>
                    <p className="text-xs text-slate-500">2020 Honda CBR600RR</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Title Status', value: 'Clean', good: true },
                    { label: 'Theft Record', value: 'None found', good: true },
                    { label: 'Accident History', value: 'None reported', good: true },
                    { label: 'Recall Status', value: '1 open recall (fuel pump)', good: false },
                    { label: 'Odometer', value: '12,847 miles — consistent', good: true },
                    { label: 'Registration History', value: '2 owners (NY, NJ)', good: true },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between py-1">
                      <span className="text-sm text-slate-400">{row.label}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium ${row.good ? 'text-emerald-400' : 'text-amber-400'}`}>
                          {row.value}
                        </span>
                        {row.good ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/40 flex items-center justify-between">
                  <span className="text-sm text-slate-400">Market Value Estimate</span>
                  <span className="text-lg font-bold text-slate-100">$9,200 — $10,800</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-4">
                <FileSearch className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs font-semibold text-emerald-400">BikeCheck</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight mb-4">
                The Carfax that motorcycles never had.
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-[45ch]">
                VIN-based history reports with theft checks, title status, accident records,
                recall alerts, and real market valuations. No more buying blind.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Theft & title verification',
                  'Accident & damage history',
                  'Open recall alerts',
                  'Odometer fraud detection',
                  'Real-time market valuation',
                  'Registration & lien history',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-sm text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-semibold text-slate-400 mt-6">
                <span className="text-emerald-400">$14.99</span> per report or <span className="text-emerald-400">$99/mo</span> unlimited
              </p>
            </div>
          </div>

          {/* ── PRODUCT 3: MotoFit ── */}
          <div id="motofit" className="scroll-mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-4">
                <Puzzle className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-xs font-semibold text-blue-400">MotoFit</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight mb-4">
                Does this part fit my bike? Finally answered.
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-[45ch]">
                The universal parts cross-reference database the motorcycle world has been
                asking for. Enter a part number or your bike — get every compatible option
                across brands.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Cross-brand part compatibility',
                  'Year/make/model fitment lookup',
                  'OEM part number interchange',
                  'Aftermarket cross-reference',
                  'API access for shops & sellers',
                  'Community-verified fitment data',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-sm text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-semibold text-slate-400 mt-6">
                Free for riders. From <span className="text-blue-400">$29/mo</span> for businesses
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                    <div className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-300">
                      2022 Kawasaki ZX-6R brake pads
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mb-4">8 compatible options found</p>
                <div className="space-y-2">
                  {[
                    { brand: 'EBC', part: 'FA679/4HH', type: 'Double-H Sintered', price: '$42.99', match: '100%' },
                    { brand: 'Vesrah', part: 'VD-9031/2JL', type: 'Racing Sintered', price: '$51.50', match: '100%' },
                    { brand: 'Galfer', part: 'FD475G1375', type: 'HH Sintered Ceramic', price: '$46.80', match: '100%' },
                    { brand: 'Brembo', part: '07BB33SA', type: 'SA Sintered Street', price: '$63.20', match: '98%' },
                  ].map((part, i) => (
                    <div key={i} className="flex items-center gap-4 py-3 px-4 rounded-lg bg-slate-800/30 border border-slate-800/40">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-slate-200">{part.brand}</span>
                          <span className="text-xs font-mono text-slate-500">{part.part}</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">{part.type}</p>
                      </div>
                      <span className="text-sm font-medium text-slate-200">{part.price}</span>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                        part.match === '100%' ? 'text-emerald-400 bg-emerald-400/10' : 'text-amber-400 bg-amber-400/10'
                      }`}>
                        {part.match}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── FREE TIER ───── */}
      <section className="py-24 md:py-32 border-t border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">For every rider</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tighter leading-tight mt-3 mb-4">
                A lot of this is free.
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-[50ch]">
                Create an account and get access to tools that riders have needed for years.
                No credit card. No trial expiration. Just useful.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {freeFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-400">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-xs">
                <div className="absolute -inset-8 bg-orange-500/5 rounded-full blur-3xl" />
                <div className="relative rounded-2xl border border-slate-800/60 bg-slate-900/50 p-8 text-center">
                  <Users className="w-10 h-10 text-slate-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-slate-100 tracking-tight">$0</p>
                  <p className="text-sm text-slate-500 mt-1 mb-6">Free forever</p>
                  <Link
                    to="/pricing"
                    className="inline-flex items-center justify-center gap-2 w-full text-sm font-semibold text-slate-950 bg-orange-500 px-5 py-2.5 rounded-lg hover:bg-orange-400 transition-all duration-200 active:scale-[0.98]"
                  >
                    Create account
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── FINAL CTA ───── */}
      <section className="py-24 md:py-32 border-t border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tighter leading-tight mb-4">
            Stop running your shop on paper.
          </h2>
          <p className="text-base text-slate-500 leading-relaxed max-w-[50ch] mx-auto mb-8">
            Join the early access and help shape the tools that 15,000+ motorcycle
            shops and millions of riders actually need.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-950 bg-orange-500 px-8 py-3 rounded-lg hover:bg-orange-400 transition-all duration-200 active:scale-[0.98]"
            >
              Get started free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-300 px-8 py-3 rounded-lg border border-slate-700 hover:border-slate-500 hover:text-slate-100 transition-all duration-200 active:scale-[0.98]"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
