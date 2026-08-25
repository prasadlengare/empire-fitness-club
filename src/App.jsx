import {
  Activity,
  CalendarDays,
  ChevronRight,
  Dumbbell,
  Flame,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Timer,
  Trophy,
  Users,
  X,
} from 'lucide-react';
import React, { useState } from 'react';

const navItems = [
  ['Home', '#home'],
  ['About Us', '#about'],
  ['Services', '#services'],
  ['Class Schedule', '#schedule'],
  ['Testimonials', '#testimonials'],
  ['Contact', '#contact'],
];

const services = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    copy: 'Progressive programs, coached compound lifts, and focused hypertrophy work for every level.',
  },
  {
    icon: Flame,
    title: 'Fat Loss Coaching',
    copy: 'High-energy conditioning, sustainable nutrition habits, and tracking that keeps momentum visible.',
  },
  {
    icon: Users,
    title: 'Group Classes',
    copy: 'Small-group sessions that blend form checks, pace, and a strong training-room atmosphere.',
  },
  {
    icon: ShieldCheck,
    title: 'Personal Training',
    copy: 'One-on-one plans for strength, mobility, body recomposition, and confident gym technique.',
  },
];

const schedule = [
  ['Mon', '6:30 AM', 'Strength Foundation', 'Coach-led lifting'],
  ['Tue', '7:00 PM', 'HIIT Burn', 'Conditioning circuit'],
  ['Wed', '6:30 AM', 'Upper Body Build', 'Push and pull focus'],
  ['Thu', '7:00 PM', 'Core & Mobility', 'Stability and recovery'],
  ['Fri', '6:30 AM', 'Leg Day Club', 'Lower-body strength'],
  ['Sat', '8:00 AM', 'Weekend Sweat', 'Full-body class'],
];

const testimonials = [
  {
    name: 'Aarav M.',
    text: 'Clean equipment, helpful trainers, and a motivating floor. The consistency finally feels easy here.',
  },
  {
    name: 'Priya S.',
    text: 'The trainers correct form without making it intimidating. I have gained strength and confidence.',
  },
  {
    name: 'Rohan K.',
    text: 'Great location, solid crowd, and classes that actually push you. Easily my favorite gym in Punawale.',
  },
];

const stats = [
  ['4.8', 'Google rating'],
  ['103', 'Member reviews'],
  ['6', 'Weekly class tracks'],
];

const mapUrl = 'https://share.google/0Zssv01zWPbzM5y4R';

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-empire-ink/88 text-white backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="grid h-10 w-10 place-items-center bg-empire-red font-black text-white">
            EF
          </span>
          <span className="text-base font-black uppercase tracking-wide">Empire Fitness Club</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-semibold text-white/78 transition hover:text-white">
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 bg-empire-red px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-empire-ink lg:inline-flex"
        >
          Join Now
          <ChevronRight size={16} aria-hidden="true" />
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-white/15 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          title="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-empire-ink lg:hidden">
          <div className="section-shell grid gap-1 py-4">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="px-2 py-3 text-sm font-semibold text-white/84"
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] overflow-hidden bg-empire-ink pt-16 text-white"
    >
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-55"
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=80"
        alt="Gym floor with strength training equipment"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,17,20,0.95)_0%,rgba(16,17,20,0.76)_45%,rgba(16,17,20,0.28)_100%)]" />

      <div className="section-shell relative grid min-h-[calc(92vh-4rem)] content-center py-16">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-3 py-2 text-sm font-bold backdrop-blur">
            <Star size={16} className="fill-empire-gold text-empire-gold" aria-hidden="true" />
            4.8 rating from 103 reviews
          </div>
          <h1 className="text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
            Empire Fitness Club
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
            Train stronger in Punawale with sharp coaching, practical programs, and a gym floor built for real progress.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#schedule"
              className="inline-flex items-center justify-center gap-2 bg-empire-red px-6 py-4 text-sm font-black uppercase text-white transition hover:bg-white hover:text-empire-ink"
            >
              View Classes
              <CalendarDays size={18} aria-hidden="true" />
            </a>
            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/24 px-6 py-4 text-sm font-black uppercase text-white transition hover:border-white hover:bg-white/10"
            >
              Get Directions
              <MapPin size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="section-kicker">About Us</p>
          <h2 className="section-title">A focused fitness space for Punawale lifters, beginners, and comeback stories.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Empire Fitness Club combines structured strength training, energetic classes, and practical coaching so members know what to do the moment they walk in.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map(([value, label]) => (
              <div key={label} className="border border-slate-200 bg-slate-50 p-5">
                <div className="text-3xl font-black text-empire-ink">{value}</div>
                <div className="mt-1 text-sm font-semibold text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=1200&q=80"
            alt="Athlete training with battle ropes"
          />
          <div className="absolute bottom-5 left-5 right-5 bg-white p-5 shadow-xl">
            <div className="flex items-center gap-3">
              <Trophy className="text-empire-red" size={28} aria-hidden="true" />
              <p className="font-black text-empire-ink">Goal-led training, not guesswork.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-empire-mist py-20 sm:py-24">
      <div className="section-shell">
        <p className="section-kicker">Services</p>
        <h2 className="section-title">Everything you need to train with clarity.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid h-12 w-12 place-items-center bg-empire-ink text-white">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-black text-empire-ink">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section id="schedule" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Class Schedule</p>
            <h2 className="section-title">A weekly rhythm built for consistency.</h2>
          </div>
          <div className="inline-flex w-fit items-center gap-2 bg-empire-ink px-4 py-3 text-sm font-bold text-white">
            <Timer size={18} aria-hidden="true" />
            Morning and evening batches
          </div>
        </div>

        <div className="mt-10 overflow-hidden border border-slate-200">
          {schedule.map(([day, time, title, type]) => (
            <div
              key={`${day}-${title}`}
              className="grid gap-3 border-b border-slate-200 p-5 last:border-b-0 sm:grid-cols-[90px_110px_1fr_180px] sm:items-center"
            >
              <div className="text-lg font-black text-empire-red">{day}</div>
              <div className="font-bold text-empire-ink">{time}</div>
              <div className="text-xl font-black text-empire-ink">{title}</div>
              <div className="text-sm font-semibold text-slate-500">{type}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="bg-empire-ink py-20 text-white sm:py-24">
      <div className="section-shell">
        <p className="section-kicker text-empire-gold">Testimonials</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
          Members rate the experience 4.8 from 103 reviews.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map(({ name, text }) => (
            <figure key={name} className="border border-white/12 bg-white/8 p-6">
              <div className="flex gap-1 text-empire-gold" aria-label="Five star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={17} className="fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-5 leading-7 text-white/82">"{text}"</blockquote>
              <figcaption className="mt-5 font-black">{name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Visit Empire Fitness Club in Punawale.</h2>
          <div className="mt-8 space-y-5 text-slate-700">
            <p className="flex gap-3 leading-7">
              <MapPin className="mt-1 shrink-0 text-empire-red" size={22} aria-hidden="true" />
              Wardhaman Palmrose Floor, No.3, Pandhare Wasti Rd, Kate Wasti, Punawale, Pune, Pimpri-Chinchwad, Maharashtra 411033
            </p>
            <p className="flex gap-3 leading-7">
              <MessageCircle className="mt-1 shrink-0 text-empire-red" size={22} aria-hidden="true" />
              Ask about membership plans, personal training, and class availability.
            </p>
            <p className="flex gap-3 leading-7">
              <Phone className="mt-1 shrink-0 text-empire-red" size={22} aria-hidden="true" />
              Drop in or use the directions link to plan your visit.
            </p>
          </div>
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-empire-red px-6 py-4 text-sm font-black uppercase text-white transition hover:bg-empire-ink"
          >
            Open Google Map
            <MapPin size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="min-h-[430px] overflow-hidden border border-slate-200 bg-slate-100">
          <iframe
            title="Empire Fitness Club location map"
            src="https://www.google.com/maps?q=Empire%20Fitness%20Club%20Wardhaman%20Palmrose%20Punawale%20Pune&output=embed"
            className="h-full min-h-[430px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Schedule />
        <Testimonials />
        <Contact />
      </main>
      <footer className="bg-empire-ink py-8 text-white">
        <div className="section-shell flex flex-col gap-3 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Empire Fitness Club. Built for stronger daily training.</p>
          <div className="flex items-center gap-2">
            <Activity size={16} aria-hidden="true" />
            <span>Punawale, Pune</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
