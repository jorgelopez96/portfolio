import { useLang } from "../context/LanguageContext";
import { contact } from "../data/contact";
import SectionTitle from "./SectionTitle";
import Tile from "./Tile";
import ContactForm from "./ContactForm";
import { MailIcon, LinkedInIcon, GitHubIcon, WhatsAppIcon, DownloadIcon, ArrowIcon } from "./Icons";

export default function Contact() {
  const { t, lang } = useLang();
  const c = t.contact;

  const links = [
    { label: contact.email, href: `mailto:${contact.email}`, icon: <MailIcon /> },
    { label: "LinkedIn", href: contact.linkedin, icon: <LinkedInIcon />, external: true },
    { label: "GitHub", href: contact.github, icon: <GitHubIcon />, external: true },
    { label: "WhatsApp", href: contact.whatsapp, icon: <WhatsAppIcon />, external: true },
  ];

  return (
    <section id="contact" className="pt-16 md:pt-24 pb-10 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title={c.title} em={c.titleEm} />
        <div className="grid md:grid-cols-5 gap-3 md:gap-4">
          <Tile className="md:col-span-2 p-5 md:p-7 flex flex-col gap-6">
            <p className="text-muted leading-relaxed">{c.text}</p>
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.label} className="border-t border-line first:border-t-0">
                  <a href={l.href} {...(l.external && { target: "_blank", rel: "noreferrer" })}
                    className="flex items-center gap-3 py-3 text-sm hover:text-accent transition-colors break-all">
                    {l.icon} <span className="flex-1">{l.label}</span> <ArrowIcon />
                  </a>
                </li>
              ))}
            </ul>
            <a href={contact.cv[lang]} download
              className="mt-auto flex items-center justify-center gap-2 py-3 rounded-xl border border-line text-sm hover:border-accent hover:text-accent transition-colors">
              <DownloadIcon /> {t.hero.cv}
            </a>
          </Tile>
          <Tile className="md:col-span-3 p-5 md:p-7">
            <ContactForm />
          </Tile>
        </div>
        <p className="mt-16 pt-6 border-t border-line flex flex-col sm:flex-row justify-between gap-2 font-mono text-xs text-dim">
          <span>© 2026 Jorge Manuel López</span>
          <span>{c.footer}</span>
        </p>
      </div>
    </section>
  );
}
