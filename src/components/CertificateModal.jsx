import { useLang } from "../context/LanguageContext";
import Modal from "./Modal";
import { ArrowIcon } from "./Icons";

export default function CertificateModal({ degree, onClose }) {
  const { t } = useLang();
  const title = t.education.degrees[degree.key];

  const openPdf = (
    <a href={degree.diplomaUrl} target="_blank" rel="noreferrer"
      className="hidden sm:inline-flex items-center gap-1.5 text-sm px-3 py-2 rounded-xl border border-line hover:border-accent hover:text-accent transition-colors">
      {t.education.openPdf} <ArrowIcon />
    </a>
  );

  return (
    <Modal title={title} subtitle={degree.institution} onClose={onClose} closeLabel={t.projects.close} actions={openPdf}>
      <iframe src={degree.diplomaUrl} title={title} className="w-full h-[70vh] border-0 bg-white" />
    </Modal>
  );
}
