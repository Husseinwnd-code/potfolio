import hussein from "./assets/hussein.png";

export default function Portfolio() {
  const projects = [
    {
      title: "TKA Werkstatt",
      category: "Business Website / Dashboard",
      description:
        "Responsive workshop website with dashboard and appointment management built using React and Supabase.",
      tech: ["React", "Supabase", "Vite", "CSS"],
      live: "https://tka-werkstatt.vercel.app/",
      github: "https://github.com/Husseinwnd-code/TKA",
    },
    {
      title: "Cannakunst Shop",
      category: "Shop Website",
      description:
        "Modern shop website built as a real-world web project with product presentation and responsive layout.",
      tech: ["React", "Vite", "CSS", "Vercel"],
      live: "https://cannakunst-bjef.vercel.app/",
      github: "https://github.com/Husseinwnd-code/Cannakunst",
    },
    {
      title: "Olive Oil Website",
      category: "Product Landing Page",
      description:
        "Clean product landing page for an olive oil brand focused on responsive design and product presentation.",
      tech: ["HTML", "CSS"],
      live: "https://olive-oil-five.vercel.app/",
      github: "https://github.com/Husseinwnd-code/olive-oil",
    },
  ];

  const skills = [
    "React",
    "JavaScript",
    "Python",
    "Linux",
    "Supabase",
    "Vite",
    "CSS",
    "GitHub",
    "Vercel",
    "Responsive Design",
    "APIs",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-orange-500 selection:text-black">
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-orange-600/40 blur-[120px]" />
        <div className="absolute right-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-blue-600/30 blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[30%] h-[420px] w-[420px] rounded-full bg-red-700/30 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(0,0,0,0.88)_70%)]" />
      </div>

      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-5 md:px-8">
        <nav className="z-20 flex items-center justify-between rounded-3xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-zinc-300 backdrop-blur-xl">
          <a href="#home" className="font-semibold text-white">
            Hussein Ali
          </a>

          <div className="hidden gap-6 md:flex">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="mailto:husseinwnd@gmail.com"
            className="rounded-full border border-white/20 px-4 py-2 text-white hover:bg-white hover:text-black"
          >
            Let’s talk
          </a>
        </nav>

        <div
          id="home"
          className="grid flex-1 items-center gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="relative min-h-[680px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl md:p-10">
            <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.08),transparent_35%,rgba(255,80,0,0.16))]" />
            <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
            <div className="absolute left-1/3 top-0 h-full w-px bg-white/5" />
            <div className="absolute right-1/4 top-0 h-full w-px bg-white/5" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-start justify-between text-sm text-zinc-400">
                <span>Good evening!</span>
                <span className="hidden md:block">
                  React / Python / Linux / Supabase
                </span>
              </div>

              <div className="mt-28 max-w-5xl">
                <p className="mb-4 text-zinc-400">
                  Hi there! this is <span className="text-white">Hussein</span>
                </p>

                <h1 className="text-[4.3rem] font-black uppercase leading-[0.9] tracking-[-0.08em] md:text-[8rem] lg:text-[9rem]">
                  Web
                  <br />
                  Developer
                  <br />
                  <span className="text-orange-600">Portfolio</span>
                </h1>
              </div>

              <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.75fr]">
                <p className="max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
                  Self-taught web developer with 1.5+ years of learning and
                  building real projects. I create modern websites, landing
                  pages, dashboards and responsive user interfaces.
                </p>

                <div className="rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl">
                  <p className="mb-4 border-b border-white/10 pb-4 text-zinc-300">
                    Website Design
                    <br />
                    Frontend Development
                    <br />
                    Business Websites
                    <br />
                    Linux & Python Basics
                  </p>

                  <a
                    href="#projects"
                    className="group flex items-center justify-between text-sm font-semibold underline"
                  >
                    View my work
                    <span className="transition group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <aside className="grid gap-5">
            <div className="group relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <img
                src={hussein}
                alt="Hussein Ali"
                className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 z-20 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
                  Self-Taught Developer
                </p>

                <h2 className="mt-2 text-4xl font-black leading-tight">
                  Hussein Ali
                </h2>

                <p className="mt-3 max-w-xs text-sm text-zinc-300">
                  Building modern web experiences with React, Supabase, Python
                  and Linux fundamentals.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur-xl">
              <p className="mb-10 text-sm text-zinc-400">Available for</p>
              <h2 className="text-4xl font-black leading-tight tracking-tight">
                Freelance,
                <br />
                Mini Jobs &
                <br />
                Junior Roles
              </h2>
              <p className="mt-6 text-zinc-400">
                I work every day until 13:00 and I’m open for afternoon/evening
                web development work.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <p className="text-5xl font-black">3</p>
                <p className="mt-2 text-sm text-zinc-400">
                  Portfolio Projects
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-orange-600 p-6 text-black">
                <p className="text-5xl font-black">1.5+</p>
                <p className="mt-2 text-sm font-semibold">Years Learning</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <p className="text-sm uppercase tracking-[0.4em] text-orange-500">
            About
          </p>

          <div>
            <h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              I build real projects, not only tutorial apps.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
              I have a technical background in automotive mechanics and
              electrical systems since 2018 and currently work in vehicle repair.
              Alongside my work, I’m learning web development independently and
              building real projects with React, Supabase, Python and Linux.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-zinc-300 backdrop-blur-xl transition hover:border-orange-500/60 hover:text-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.4em] text-orange-500">
              Selected Work
            </p>
            <h2 className="text-5xl font-black tracking-tight md:text-7xl">
              Projects
            </h2>
          </div>

          <p className="max-w-md text-zinc-400">
            A collection of practical web projects focused on business websites,
            product presentation and responsive frontend development.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-orange-500/60 md:grid-cols-[0.55fr_1fr]"
            >
              <div className="relative min-h-[280px] overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-orange-950">
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:44px_44px]" />

                <div className="relative z-10 flex min-h-[280px] flex-col justify-between p-8">
                  <span className="text-7xl font-black text-white/20">
                    0{index + 1}
                  </span>

                  <div>
                    <p className="mb-2 text-sm text-orange-400">
                      {project.category}
                    </p>
                    <h3 className="text-4xl font-black tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <p className="mb-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
                  {project.description}
                </p>

                <div className="mb-8 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-orange-500"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white hover:text-black"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-orange-600 p-8 text-black md:p-16">
          <p className="mb-4 font-semibold uppercase tracking-[0.3em]">
            Contact
          </p>

          <h2 className="max-w-4xl text-5xl font-black leading-none tracking-tight md:text-8xl">
            Let’s build something together.
          </h2>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:husseinwnd@gmail.com"
              className="rounded-full bg-black px-8 py-4 font-bold text-white"
            >
              Email Me
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-orange-500 px-8 py-4 font-bold text-black hover:bg-orange-400"
            >
              Download CV
            </a>

            <a
              href="https://github.com/Husseinwnd-code"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black/30 px-8 py-4 font-bold"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}