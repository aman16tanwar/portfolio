import { site, links, about, skills, projects, experience, contact } from "@/content";
import { ContactForm } from "@/components/contact-form";

// `mobile: false` links are hidden on phones so the header fits on one line.
const nav = [
  { href: "#about", label: "About", mobile: false },
  { href: "#projects", label: "Projects", mobile: true },
  { href: "#experience", label: "Experience", mobile: false },
  { href: "#contact", label: "Contact", mobile: true },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 sm:px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="font-semibold">
          {site.name}
        </a>
        <nav className="flex gap-4 text-sm text-muted sm:gap-6">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className={`hover:text-text ${n.mobile ? "" : "hidden sm:inline"}`}>
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="py-20 sm:py-28">
      {site.availability.open && (
        <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {site.availability.text}
        </p>
      )}
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Hi, I&apos;m {site.name}.
        <span className="mt-2 block text-muted">{site.role}</span>
      </h1>
      <p className="mt-6 max-w-2xl text-xl leading-relaxed">{site.headline}</p>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">{site.intro}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#contact" className="rounded-lg bg-accent px-5 py-3 font-semibold text-bg hover:opacity-90">
          Get in touch
        </a>
        <a href="#projects" className="rounded-lg border border-border px-5 py-3 font-semibold hover:bg-surface">
          See my work
        </a>
      </div>
    </section>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-border py-16">
      <h2 className="mb-8 text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About me">
      <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
        {about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="What I work with">
      <div className="grid gap-6 sm:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group}>
            <h3 className="mb-3 font-semibold">{s.group}</h3>
            <ul className="space-y-1.5 text-muted">
              {s.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-6">
        {projects.map((p) => (
          <article key={p.title} className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <span className="text-sm text-muted">{p.tag}</span>
            </div>
            <dl className="mt-5 space-y-3 leading-relaxed">
              <Row label="The problem">{p.problem}</Row>
              <Row label="What I built">{p.built}</Row>
              <Row label="The result">{p.result}</Row>
            </dl>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {p.stack.map((t) => (
                <span key={t} className="rounded-md bg-bg px-2.5 py-1 text-xs text-muted">
                  {t}
                </span>
              ))}
              {"link" in p && p.link && (
                <a href={p.link.href} className="ml-auto text-sm font-semibold text-accent hover:underline">
                  {p.link.label} →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="sm:grid sm:grid-cols-[8rem_1fr] sm:gap-4">
      <dt className="text-sm font-semibold text-accent">{label}</dt>
      <dd className="text-muted">{children}</dd>
    </div>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {experience.map((e) => (
          <div key={e.role + e.period}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">
                {e.role} <span className="font-normal text-muted">· {e.org}</span>
              </h3>
              <span className="text-sm text-muted">{e.period}</span>
            </div>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted">
              {e.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title={contact.title}>
      <p className="mb-8 max-w-2xl leading-relaxed text-muted">{contact.text}</p>
      <ContactForm />
      <div className="mt-6 flex gap-6 text-sm font-semibold">
        <a href={links.linkedin} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
          LinkedIn →
        </a>
        <a href={links.github} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
          GitHub →
        </a>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted">
      © {new Date().getFullYear()} {site.name} · {site.location}
    </footer>
  );
}
