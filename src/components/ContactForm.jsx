import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLang } from "../context/LanguageContext";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../data/emailjs";

const inputClass = "w-full bg-ink/60 border border-line focus:border-accent text-cream placeholder-dim px-4 py-3 rounded-xl outline-none transition-colors text-sm";
const empty = { from_name: "", from_email: "", message: "" };

// Los name de los inputs tienen que coincidir con el template de EmailJS
export default function ContactForm() {
  const { t } = useLang();
  const c = t.contact;
  const formRef = useRef();
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState(empty);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      setForm(empty);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1.5 text-sm text-muted">
        {c.labelName}
        <input name="from_name" value={form.from_name} onChange={handleChange} required
          placeholder={c.placeholderName} className={inputClass} />
      </label>
      <label className="flex flex-col gap-1.5 text-sm text-muted">
        {c.labelEmail}
        <input name="from_email" type="email" value={form.from_email} onChange={handleChange} required
          placeholder={c.placeholderEmail} className={inputClass} />
      </label>
      <label className="flex flex-col gap-1.5 text-sm text-muted">
        {c.labelMessage}
        <textarea name="message" rows={4} value={form.message} onChange={handleChange} required
          placeholder={c.placeholderMessage} className={`${inputClass} resize-none`} />
      </label>
      <button type="submit" disabled={status === "sending"}
        className="mt-1 py-3.5 rounded-xl bg-accent text-accent-ink font-semibold text-sm hover:bg-cream disabled:opacity-50 transition-colors">
        {status === "sending" ? c.sending : status === "success" ? c.sent : c.submitBtn}
      </button>
      {status === "error" && <p className="text-sm text-red-400 text-center" role="alert">{c.errorMsg}</p>}
    </form>
  );
}
