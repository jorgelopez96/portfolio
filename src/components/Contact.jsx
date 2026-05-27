import { useState, useRef } from "react";
import { useLang } from "../context/LanguageContext";
import { contact } from "../data/contact";
import { SectionTitle } from "./Skills";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../data/emailjs";

const socialLinks = [
  {
    label: "Email", href: `mailto:${contact.email}`,
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
  },
  {
    label: "LinkedIn", href: contact.linkedin,
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: "WhatsApp", href: contact.whatsapp,
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.132 1.528 5.874L.057 23.882a.5.5 0 00.611.611l6.008-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.876 9.876 0 01-5.031-1.378l-.36-.214-3.733.914.933-3.733-.235-.374A9.862 9.862 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z"/></svg>,
  },
];

const inputClass = "w-full bg-[#13131f] border border-white/10 focus:border-purple-500 text-white placeholder-gray-600 px-4 py-3 rounded-xl outline-none transition-colors font-display text-sm";

export default function Contact() {
  const { t } = useLang();
  const formRef = useRef();
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ from_name: "", from_email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      setForm({ from_name: "", from_email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 bg-transparent relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle title={t.contact.title} />
        <div className="mt-14 grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h3 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight mb-4">
              {t.contact.headline1}
            </h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-purple-600/60 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-2">
              {t.contact.headline2}
            </p>
            <p className="text-gray-500 font-mono text-xs tracking-widest uppercase mb-3">// {t.contact.location}</p>
            <p className="font-display font-bold text-white text-lg mb-10">Buenos Aires, Argentina</p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  className="w-11 h-11 rounded-xl border border-white/10 text-gray-400 hover:border-purple-500/50 hover:text-purple-400 transition-all flex items-center justify-center">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form ref={formRef} onSubmit={handleSubmit}
            className="bg-[#0d0d1a] border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs text-purple-500 tracking-widest uppercase">// {t.contact.labelName}</label>
              <input name="from_name" value={form.from_name} onChange={handleChange} required
                placeholder={t.contact.placeholderName} className={inputClass} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs text-purple-500 tracking-widest uppercase">// {t.contact.labelEmail}</label>
              <input name="from_email" value={form.from_email} onChange={handleChange} required type="email"
                placeholder={t.contact.placeholderEmail} className={inputClass} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs text-purple-500 tracking-widest uppercase">// {t.contact.labelMessage}</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={4}
                placeholder={t.contact.placeholderMessage}
                className={`${inputClass} resize-none`} />
            </div>
            <button type="submit" disabled={status === "sending"}
              className="mt-1 w-full py-3.5 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 disabled:opacity-50 text-white font-mono text-sm tracking-widest uppercase rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/25">
              {status === "sending" ? t.contact.sending : status === "success" ? t.contact.sent : t.contact.submitBtn}
            </button>
            {status === "error" && (
              <p className="font-mono text-xs text-red-400 text-center">{t.contact.errorMsg}</p>
            )}
          </form>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-24 pt-8 border-t border-white/[0.06]">
        <p className="font-mono text-xs text-gray-700 text-center tracking-widest">
          © 2026 Jorge López — Full Stack Developer
        </p>
      </div>
    </section>
  );
}
