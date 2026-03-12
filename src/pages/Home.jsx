import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Briefcase,
  GraduationCap,
  Download,
} from "lucide-react";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import ExperienceTimeline from "../components/ExperienceTimeline";
import getProjects from "../data/projects";
import getExperience from "../data/experience";

export default function Home({ t }) {
  const projects = getProjects(t);
  const experience = getExperience(t);

  const skills = [
    "JavaScript",
    "React",
    "Vue.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "WordPress",
    "WooCommerce",
    "REST APIs",
    "Tailwind CSS",
    "Git",
    "Docker",
  ];

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="absolute left-[-100px] top-16 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-[-100px] top-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="section-container relative py-24 md:py-32">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-sky-400"
              >
                {t.heroEyebrow}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-6xl font-extrabold leading-tight"
              >
                {t.heroTitle} <span className="text-gradient">Chris Sabbak</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="mt-6 max-w-xl text-lg leading-8 text-slate-400"
              >
                {t.heroDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  to="/projects"
                  className="rounded-2xl bg-sky-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
                >
                  {t.viewProjects}
                </Link>

                <Link
                  to="/about"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
                >
                  {t.aboutMe}
                </Link>

                <a
                  href="/CV.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-2xl border border-sky-400/25 bg-sky-400/10 px-6 py-3 font-semibold text-sky-300 transition hover:bg-sky-400/15"
                >
                  <Download size={18} />
                  {t.downloadCV}
                </a>
              </motion.div>
            </div>
              
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="glass soft-shadow rounded-[2rem] p-6"
            >
              <div className="mb-4 h-72 overflow-hidden rounded-[1.5rem] border border-white/10">
                  <img
                    src="/Profile.png"
                    alt="Chris Sabbak"
                    className="h-full w-full object-cover object-center"
                  />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <Code2 className="mb-3 text-sky-400" />
                  <h3 className="font-semibold">{t.frontend}</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    React, Vue.js, Tailwind CSS, responsive UI.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <Database className="mb-3 text-sky-400" />
                  <h3 className="font-semibold">{t.backend}</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Node.js, Express.js, APIs, authentication, databases.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <Globe className="mb-3 text-sky-400" />
                  <h3 className="font-semibold">{t.focusValue}</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Business websites, e-commerce, landing pages, dashboards.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <Briefcase className="mb-3 text-sky-400" />
                  <h3 className="font-semibold">Client Work</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Freelance delivery, scalable code, practical solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <br></br>
      <br></br>
      <br></br>
      <section className="section-container py-20">
        <Reveal>
          <SectionTitle
            eyebrow={t.skillsEyebrow}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </section>


       <br></br>
       <br></br>     
       <br></br>
      <section className="section-container py-20">
        <Reveal>
          <SectionTitle
            eyebrow={t.experienceEyebrow}
            title={t.experienceTitle}
            
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass rounded-[2rem] p-8">
            <ExperienceTimeline items={experience} />
          </div>
        </Reveal>
      </section>


       <br></br>
       <br></br>
       <br></br>     
      <section className="section-container py-20">
        <Reveal>
          <SectionTitle
            eyebrow={t.educationEyebrow}
            title={t.educationTitle}
            subtitle={t.educationSubtitle}
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="glass rounded-3xl p-6 h-full">
              <GraduationCap className="mb-4 text-sky-400" />
              <h3 className="text-xl font-semibold">{t.mba}</h3>
              <p className="mt-2 text-slate-300">{t.liu}</p>
              <p className="mt-2 text-slate-400">{t.mbaPeriod}</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass rounded-3xl p-6 h-full">
              <GraduationCap className="mb-4 text-sky-400" />
              <h3 className="text-xl font-semibold">{t.mare}</h3>
              <p className="mt-2 text-slate-300">{t.palermo}</p>
              <p className="mt-2 text-slate-400">{t.marePeriod}</p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="glass rounded-3xl p-6 h-full">
              <GraduationCap className="mb-4 text-sky-400" />
              <h3 className="text-xl font-semibold">{t.bachelors}</h3>
              <p className="mt-2 text-slate-300">{t.liu}</p>
              <p className="mt-2 text-slate-400">{t.bachelorPeriod}</p>
            </div>
          </Reveal>
        </div>
      </section>


      <br></br>
      <br></br>
      <br></br>
      <section className="section-container py-20">
        <Reveal>
          <SectionTitle
            eyebrow={t.featuredEyebrow}
            
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 6).map((project, index) => (
            <Reveal key={project.title} delay={index * 0.07}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>



      <br></br>
      <br></br>
      <br></br>
      <section className="section-container py-20">
        <Reveal>
          <div className="glass soft-shadow rounded-[2rem] p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t.contactTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400 leading-7">
              {t.contactDescription}
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}