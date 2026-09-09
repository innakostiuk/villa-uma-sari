// const footerLinks = [
//   {
//     url: '#',
//     name: 'Privacy',
//   },
//   {
//     url: '#',
//     name: 'Contact',
//   },
//   {
//     url: '#',
//     name: 'Insagram',
//   },
// ];

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center justify-between gap-5 bg-ink p-8
        text-fog lg:flex-row lg:p-12"
    >
      <div className="font-comporant text-[22px] text-white">Uma Sari</div>
      {/* <div className="flex gap-6">
        {footerLinks.map(({ url, name }, index) => (
          <a
            key={index}
            href={url}
            className="text-[11px] tracking-widest text-fog"
          >
            {name}
          </a>
        ))}
      </div> */}
      <div className="text-center text-[11px] lg:text-left">
        © 2026 Uma Sari Bali
      </div>
    </footer>
  );
}
