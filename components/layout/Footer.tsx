const footerLinks = [
  {
    url: '#',
    name: 'Privacy',
  },
  {
    url: '#',
    name: 'Contact',
  },
  {
    url: '#',
    name: 'Insagram',
  },
];

export default function Footer() {
  return (
    <footer className="flex items-center justify-between bg-ink p-12 text-fog">
      <div className="font-serif text-[22px] text-white">Uma Sari</div>
      <div className="flex gap-6">
        {footerLinks.map(({ url, name }, index) => (
          <a
            key={index}
            href={url}
            className="text-[11px] tracking-widest text-fog"
          >
            {name}
          </a>
        ))}
      </div>
      <div className="text-[11px]">© 2026 Uma Sari Bali</div>
    </footer>
  );
}
