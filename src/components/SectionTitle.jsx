export default function SectionTitle({ title, em }) {
  return (
    <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8 md:mb-12">
      {title} <em className="text-accent">{em}</em>
    </h2>
  );
}
