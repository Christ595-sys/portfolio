export default function Footer({ t }) {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="section-container py-10 text-center text-sm text-slate-400">
        <p className="mt-2">{t.footerRole}</p>
        <p className="mt-2">
          {t.footerEmail}: sabbakchrist9@gmail.com
        </p>
        <p className="mt-2">
          Phone Number: +961 71505994
        </p>
        <p className="mt-2">
          {t.footerLinkedIn}:{" "}
          <a
            href="https://linkedin.com/in/chris-sabbak-567801228"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:underline"
          >
            linkedin.com/in/chris-sabbak-567801228
          </a>
        </p>
        
      </div>
    </footer>
  );
}