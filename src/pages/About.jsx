import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import ExperienceTimeline from "../components/ExperienceTimeline";
import getExperience from "../data/experience";

export default function About({ t }) {
  const experience = getExperience(t);

  const certifications = [
    t.cert1,
    t.cert2,
    t.cert3,
    t.cert4,
    t.cert5,
    t.cert6,
    t.cert7,
    t.cert8,
    t.cert9,
    t.cert10,
  ];

  const skillGroups = [
    {
      title: t.frontend,
      items: ["JavaScript", "React", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: t.backend,
      items: ["Node.js", "Express.js", "REST APIs", "Authentication", "WordPress"],
    },
    {
      title: t.databaseTools,
      items: ["MongoDB", "MySQL", "PostgreSQL", "Git", "Docker", "Vite"],
    },
  ];

  return (
    <section className="section-container py-20">
      <br></br>
      <br></br>
      <Reveal>
        <SectionTitle
          eyebrow={t.aboutPageEyebrow}
        />
      </Reveal>

      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="glass rounded-[2rem] p-8 text-slate-300 leading-8">
            <p>{t.aboutParagraph1}</p>
            <p className="mt-5">{t.aboutParagraph2}</p>
            <p className="mt-5">{t.aboutParagraph3}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="glass rounded-[2rem] p-8">
            <div className="mb-4 h-72 overflow-hidden rounded-[1.5rem] border border-white/10">
                  <img
                    src="/Profile.png"
                    alt="Chris Sabbak"
                    className="h-full w-full object-cover object-middle"
                  />
              </div>

            <div className="space-y-3 text-sm text-slate-300">
              <p><span className="font-semibold text-white">{t.nameLabel}:</span> Chris Sabbak</p>
              <p><span className="font-semibold text-white">{t.roleLabel}:</span> {t.roleValue}</p>
              <p><span className="font-semibold text-white">{t.focusLabel}:</span> {t.focusValue}</p>
              <p><span className="font-semibold text-white">{t.emailLabel}:</span> sabbakchrist9@gmail.com</p>
              <p><span className="font-semibold text-white">{t.locationLabel}:</span> {t.locationValue}</p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.08}>
            <div className="glass rounded-3xl p-6 h-full">
              <h3 className="mb-4 text-xl font-semibold">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-sm text-sky-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <Reveal>
          <SectionTitle
            eyebrow={t.experienceEyebrow}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="glass rounded-[2rem] p-8">
            <ExperienceTimeline items={experience} />
          </div>
        </Reveal>
      </div>

      <div className="mt-20">
        <Reveal>
          <SectionTitle
            eyebrow={t.certificationsEyebrow}
            title={t.certificationsTitle}
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((certificate, index) => (
            <Reveal key={certificate} delay={index * 0.04}>
              <div className="glass rounded-2xl p-4 text-slate-300">
                {certificate}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}