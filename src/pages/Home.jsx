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
    pain: 'Shops run on paper work orders',
    detail: 'The average independent motorcycle shop has zero digital workflow. Scheduling, parts, invoicing — all manual.',
  },
  {
    pain: 'Carfax does not cover motorcycles',
    detail: 'Used bike buyers have no trusted way to check VIN history. There is no brand trust in this space.',
  },
  {
    pain: 'Parts fitment is a guessing game',
    detail: 'No universal cross-reference database exists. Riders buy wrong parts constantly. Returns destroy margins.',
  },
  {
    pain: 'Legacy DMS costs $450-3,000/month',
    detail: 'Lightspeed is the market leader and its own users call it "archaic" and "not intuitive."',
  },
]

const freeFeatures = [
  'Bike lookup by VIN or year/make/model',
  'Community repair cost estimates',
  'Market valuation estimates',
  'Maintenance schedule reminders',
  'Garage — track your bikes and service history',
  'Parts compatibility quick-check',
]

export default function Home() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="relative overflow-hidden border-b border-zinc-800/50">
        {/* Background glow */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left — Copy */}
            <div className="lg:col-span-6 pt-4">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-orange-500/15 bg-orange-500/[0.06] mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[11px] font-semibold text-orange-400 tracking-widest uppercase">
                  Early access — free to join
                </span>
              </div>

              <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-black text-white tracking-[-0.035em] leading-[1.05] mb-6">
                The motorcycle industry deserves better software.
              </h1>

              <p className="text-[17px] text-zinc-400 leading-[1.7] max-w-[48ch] mb-10">
                Shop management. VIN history reports. Parts fitment. One platform,
                built for motorcycle businesses — not car dealerships.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/pricing"
                  className="group inline-flex items-center justify-center gap-2.5 text-[15px] font-bold text-zinc-950 bg-orange-500 px-7 py-3.5 rounded-xl hover:bg-orange-400 transition-all duration-200 active:translate-y-[1px] active:scale-[0.98]"
                >
                  Start free
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 text-[15px] font-semibold text-zinc-300 px-7 py-3.5 rounded-xl border border-zinc-700/80 hover:border-zinc-500 hover:text-white transition-all duration-200 active:translate-y-[1px]"
                >
                  See what we built
                </a>
              </div>
            </div>

            {/* Right — Dashboard preview */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -inset-3 bg-linear-to-b from-orange-500/8 to-transparent rounded-3xl blur-2xl pointer-events-none" />
                <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/90 shadow-2xl shadow-black/40 overflow-hidden">
                  {/* Title bar */}
                  <div className="flex items-center gap-2 px-5 py-3.5 border-b border-zinc-800/80 bg-zinc-900">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="text-[11px] text-zinc-600 font-medium bg-zinc-800/50 px-4 py-1 rounded-md">
                        motoshop.app/dashboard
                      </div>
                    </div>
                  </div>

                  {/* Dashboard content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center">
                          <Wrench className="w-3.5 h-3.5 text-orange-400" />
                        </div>
                        <div>
                          <p className="text-[13px] font-bold text-zinc-200">Northside Moto Works</p>
                          <p className="text-[11px] text-zinc-600">3 active work orders</p>
                        </div>
                      </div>
                      <span className="text-[11px] text-zinc-600 font-medium">Today</span>
                    </div>

                    {[
                      { bike: '2019 Ducati Monster 821', status: 'In Progress', color: 'text-orange-400 bg-orange-400/10 border-orange-400/20', service: 'Valve adjustment + new chain' },
                      { bike: '2022 Kawasaki ZX-6R', status: 'Waiting Parts', color: 'text-amber-400 bg-amber-400/10 border-amber-400/20', service: 'Clutch basket replacement' },
                      { bike: '2017 Triumph Street Triple', status: 'Ready', color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20', service: 'Full service + tires' },
                    ].map((order, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between py-3.5 ${
                          i < 2 ? 'border-b border-zinc-800/50' : ''
                        }`}
                      >
                        <div>
                          <p className="text-[13px] font-semibold text-zinc-200">{order.bike}</p>
                          <p className="text-[11px] text-zinc-500 mt-0.5">{order.service}</p>
                        </div>
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border ${order.color}`}>
                          {order.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── MARKET STATS ───── */}
      <section className="border-b border-zinc-800/50 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {marketStats.map((stat) => (
              <div key={stat.label}>
                <stat.icon className="w-4 h-4 text-zinc-700 mb-3" strokeWidth={1.5} />
                <p className="text-2xl md:text-[2rem] font-black text-white tracking-tight">{stat.value}</p>
                <p className="text-[13px] text-zinc-600 mt-1.5 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── THE PROBLEM ───── */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:pl-[12vw] mb-16">
            <div className="inline-flex items-center gap-2 mb-5">
              <AlertTriangle className="w-3.5 h-3.5 text-red-500" strokeWidth={2.5} />
              <span className="text-[11px] font-bold text-red-400 uppercase tracking-widest">The problem</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-black text-white tracking-[-0.03em] leading-[1.1] max-w-[22ch]">
              The motorcycle world is running on technology from 2005.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-zinc-800/40 rounded-2xl overflow-hidden border border-zinc-800/40">
            {problems.map((p, i) => (
              <div key={i} className="bg-zinc-950 p-8 md:p-10 hover:bg-zinc-900/50 transition-colors duration-300">
                <p className="text-[17px] font-bold text-white mb-2.5">{p.pain}</p>
                <p className="text-[14px] text-zinc-500 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── PREMIUM PRODUCTS ───── */}
      <section id="features" className="py-28 md:py-36 border-t border-zinc-800/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 max-w-xl">
            <span className="text-[11px] font-bold text-orange-400 uppercase tracking-widest">Premium Products</span>
            <h2 className="text-3xl md:text-[2.75rem] font-black text-white tracking-[-0.03em] leading-[1.1] mt-4">
              Three tools the moto world has been missing.
            </h2>
            <p className="text-[15px] text-zinc-500 leading-relaxed mt-5 max-w-[48ch]">
              Each solves a problem that costs shops and riders real money.
              Use them alone or together as one platform.
            </p>
          </div>

          {/* ── PRODUCT 1: MotoShop Pro ── */}
          <div id="shop-pro" className="scroll-mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-36">
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/15 bg-orange-500/[0.06] mb-5">
                <Wrench className="w-3 h-3 text-orange-400" />
                <span className="text-[11px] font-bold text-orange-400 tracking-wide">MotoShop Pro</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-[1.15] mb-4">
                Run your entire shop from one screen.
              </h3>
              <p className="text-[14px] text-zinc-500 leading-relaxed mb-8 max-w-[42ch]">
                Work orders, scheduling, parts inventory, customer texting,
                invoicing, and online booking. Built for motorcycle shops.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {[
                  { icon: ClipboardList, text: 'Digital work orders' },
                  { icon: Calendar, text: 'Appointment scheduling' },
                  { icon: MessageSquare, text: 'Customer text updates' },
                  { icon: Receipt, text: 'Invoicing & payments' },
                  { icon: Cog, text: 'Parts inventory' },
                  { icon: BarChart3, text: 'Revenue analytics' },
                ].map((f) => (
                  <div key={f.text} className="flex items-center gap-2.5">
                    <f.icon className="w-3.5 h-3.5 text-orange-400/70 shrink-0" strokeWidth={2} />
                    <span className="text-[13px] text-zinc-300 font-medium">{f.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-zinc-800/50">
                <span className="text-[13px] text-zinc-500">From </span>
                <span className="text-xl font-black text-orange-400">$49</span>
                <span className="text-[13px] text-zinc-500">/month</span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 overflow-hidden shadow-xl shadow-black/20">
                <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/60 bg-zinc-900/90">
                  <h4 className="text-[13px] font-bold text-zinc-300">Today's Schedule</h4>
                  <span className="text-[11px] text-zinc-600 font-medium">March 26, 2026</span>
                </div>
                <div className="divide-y divide-zinc-800/40">
                  {[
                    { time: '9:00 AM', client: 'Marcus Rivera', bike: '2021 Harley Sportster S', job: 'Full service', duration: '2h', status: 'bg-emerald-500' },
                    { time: '11:30 AM', client: 'Kenji Watanabe', bike: '2023 BMW R1250GS', job: 'Fork seal replacement', duration: '3h', status: 'bg-orange-500' },
                    { time: '2:00 PM', client: 'Diana Costello', bike: '2020 Aprilia RSV4', job: 'ECU flash + tune', duration: '1.5h', status: 'bg-zinc-600' },
                    { time: '4:00 PM', client: 'Tomasz Kowalski', bike: '2018 KTM 690 Enduro', job: 'Chain + sprockets', duration: '1h', status: 'bg-zinc-600' },
                  ].map((appt, i) => (
                    <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-zinc-800/20 transition-colors duration-150">
                      <span className="text-[11px] font-mono text-zinc-600 w-[4.5rem] shrink-0 tabular-nums">{appt.time}</span>
                      <div className={`w-2 h-2 rounded-full shrink-0 ${appt.status}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-semibold text-zinc-200 truncate">{appt.client}</p>
                        <p className="text-[11px] text-zinc-500 truncate">{appt.bike} — {appt.job}</p>
                      </div>
                      <span className="text-[11px] text-zinc-600 font-mono tabular-nums shrink-0">{appt.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── PRODUCT 2: BikeCheck — reversed ── */}
          <div id="bikecheck" className="scroll-mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-36">
            <div className="lg:col-span-7 lg:order-1">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 overflow-hidden shadow-xl shadow-black/20">
                <div className="flex items-center gap-3 px-6 py-4 border-b border-zinc-800/60 bg-zinc-900/90">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <div>
                    <p className="text-[13px] font-bold text-zinc-200">VIN Report: JH2RC510XLM200847</p>
                    <p className="text-[11px] text-zinc-600">2020 Honda CBR600RR</p>
                  </div>
                </div>
                <div className="px-6 py-2 divide-y divide-zinc-800/30">
                  {[
                    { label: 'Title Status', value: 'Clean', good: true },
                    { label: 'Theft Record', value: 'None found', good: true },
                    { label: 'Accident History', value: 'None reported', good: true },
                    { label: 'Recall Status', value: '1 open recall (fuel pump)', good: false },
                    { label: 'Odometer', value: '12,847 mi — consistent', good: true },
                    { label: 'Registration', value: '2 owners (NY, NJ)', good: true },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between py-3.5">
                      <span className="text-[13px] text-zinc-500">{row.label}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-[13px] font-semibold ${row.good ? 'text-emerald-400' : 'text-amber-400'}`}>
                          {row.value}
                        </span>
                        {row.good ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/60" />
                        ) : (
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-500/60" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mx-6 py-4 border-t border-zinc-800/60 flex items-center justify-between mb-2">
                  <span className="text-[13px] text-zinc-500">Market Value</span>
                  <span className="text-lg font-black text-white tracking-tight">$9,200 — $10,800</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:order-2 lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/15 bg-emerald-500/[0.06] mb-5">
                <FileSearch className="w-3 h-3 text-emerald-400" />
                <span className="text-[11px] font-bold text-emerald-400 tracking-wide">BikeCheck</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-[1.15] mb-4">
                The Carfax that motorcycles never had.
              </h3>
              <p className="text-[14px] text-zinc-500 leading-relaxed mb-8 max-w-[42ch]">
                VIN-based history with theft checks, title status, accident
                records, recall alerts, and real market valuations.
              </p>
              <ul className="space-y-3">
                {[
                  'Theft & title verification',
                  'Accident & damage history',
                  'Open recall alerts',
                  'Odometer fraud detection',
                  'Real-time market valuation',
                  'Registration & lien history',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/70 shrink-0" strokeWidth={2} />
                    <span className="text-[13px] text-zinc-300 font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-zinc-800/50">
                <span className="text-xl font-black text-emerald-400">$14.99</span>
                <span className="text-[13px] text-zinc-500"> per report or </span>
                <span className="text-xl font-black text-emerald-400">$99</span>
                <span className="text-[13px] text-zinc-500">/mo unlimited</span>
              </div>
            </div>
          </div>

          {/* ── PRODUCT 3: MotoFit ── */}
          <div id="motofit" className="scroll-mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/15 bg-blue-500/[0.06] mb-5">
                <Puzzle className="w-3 h-3 text-blue-400" />
                <span className="text-[11px] font-bold text-blue-400 tracking-wide">MotoFit</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-[1.15] mb-4">
                Does this part fit my bike? Finally answered.
              </h3>
              <p className="text-[14px] text-zinc-500 leading-relaxed mb-8 max-w-[42ch]">
                The universal parts cross-reference the motorcycle world
                has been asking for. Enter a part or your bike — get every
                compatible option across brands.
              </p>
              <ul className="space-y-3">
                {[
                  'Cross-brand part compatibility',
                  'Year/make/model fitment lookup',
                  'OEM part number interchange',
                  'Aftermarket cross-reference',
                  'API access for shops & sellers',
                  'Community-verified fitment data',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400/70 shrink-0" strokeWidth={2} />
                    <span className="text-[13px] text-zinc-300 font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-zinc-800/50">
                <span className="text-[13px] text-zinc-500">Free for riders. From </span>
                <span className="text-xl font-black text-blue-400">$29</span>
                <span className="text-[13px] text-zinc-500">/mo for businesses</span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 overflow-hidden shadow-xl shadow-black/20">
                <div className="px-6 py-4 border-b border-zinc-800/60 bg-zinc-900/90">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                    <div className="w-full bg-zinc-800/60 border border-zinc-700/40 rounded-lg pl-10 pr-4 py-2.5 text-[13px] text-zinc-300 font-medium">
                      2022 Kawasaki ZX-6R brake pads
                    </div>
                  </div>
                  <p className="text-[11px] text-zinc-600 mt-3 font-medium">8 compatible options found</p>
                </div>
                <div className="divide-y divide-zinc-800/30">
                  {[
                    { brand: 'EBC', part: 'FA679/4HH', type: 'Double-H Sintered', price: '$42.99', match: '100%' },
                    { brand: 'Vesrah', part: 'VD-9031/2JL', type: 'Racing Sintered', price: '$51.50', match: '100%' },
                    { brand: 'Galfer', part: 'FD475G1375', type: 'HH Sintered Ceramic', price: '$46.80', match: '100%' },
                    { brand: 'Brembo', part: '07BB33SA', type: 'SA Sintered Street', price: '$63.20', match: '98%' },
                  ].map((part, i) => (
                    <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-zinc-800/20 transition-colors duration-150">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2.5">
                          <span className="text-[13px] font-bold text-zinc-200">{part.brand}</span>
                          <span className="text-[11px] font-mono text-zinc-600">{part.part}</span>
                        </div>
                        <p className="text-[11px] text-zinc-500 mt-0.5">{part.type}</p>
                      </div>
                      <span className="text-[13px] font-bold text-zinc-200 tabular-nums">{part.price}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                        part.match === '100%'
                          ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
                          : 'text-amber-400 bg-amber-400/10 border-amber-400/20'
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
      <section className="py-28 md:py-36 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold text-zinc-600 uppercase tracking-widest">For every rider</span>
              <h2 className="text-3xl md:text-[2.75rem] font-black text-white tracking-[-0.03em] leading-[1.1] mt-4 mb-5">
                A lot of this is free.
              </h2>
              <p className="text-[14px] text-zinc-500 leading-relaxed mb-10 max-w-[48ch]">
                Create an account and get tools riders have needed for years.
                No credit card. No trial. Just useful.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                {freeFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-600 shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[13px] text-zinc-400 font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[280px]">
                <div className="absolute -inset-12 bg-orange-500/[0.03] rounded-full blur-3xl pointer-events-none" />
                <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/80 p-10 text-center shadow-xl shadow-black/20">
                  <Users className="w-8 h-8 text-zinc-700 mx-auto mb-5" strokeWidth={1.5} />
                  <p className="text-4xl font-black text-white tracking-tight">$0</p>
                  <p className="text-[13px] text-zinc-500 mt-1 mb-8 font-medium">Free forever</p>
                  <Link
                    to="/pricing"
                    className="group inline-flex items-center justify-center gap-2 w-full text-[14px] font-bold text-zinc-950 bg-orange-500 px-5 py-3 rounded-xl hover:bg-orange-400 transition-all duration-200 active:translate-y-[1px]"
                  >
                    Create account
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── FINAL CTA ───── */}
      <section className="py-28 md:py-36 border-t border-zinc-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-orange-500/3 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <h2 className="text-3xl md:text-[2.75rem] font-black text-white tracking-[-0.03em] leading-[1.1] mb-5">
            Stop running your shop on paper.
          </h2>
          <p className="text-[15px] text-zinc-500 leading-relaxed max-w-[46ch] mx-auto mb-10">
            Join the early access. Help shape the tools that 15,000+ motorcycle
            shops and millions of riders actually need.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/pricing"
              className="group inline-flex items-center justify-center gap-2.5 text-[15px] font-bold text-zinc-950 bg-orange-500 px-8 py-3.5 rounded-xl hover:bg-orange-400 transition-all duration-200 active:translate-y-[1px]"
            >
              Get started free
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 text-[15px] font-semibold text-zinc-300 px-8 py-3.5 rounded-xl border border-zinc-700/80 hover:border-zinc-500 hover:text-white transition-all duration-200 active:translate-y-[1px]"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
