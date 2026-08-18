const amenities = [
  {
    icon: '◎',
    name: 'Infinity Pool',
    description:
      'Each villa has its own private pool suspended above the valley.',
  },
  {
    icon: '◈',
    name: 'Jungle Spa',
    description: 'Traditional Balinese treatments in open-air pavilions.',
  },
  {
    icon: '◉',
    name: 'Farm-to-Table',
    description: 'Our chef sources everything from the terraces below.',
  },
  {
    icon: '◐',
    name: 'Private Butler',
    description: 'One dedicated host for your entire stay. No front desk.',
  },
];

const Amenity = ({
  icon,
  name,
  description,
}: {
  icon: string;
  name: string;
  description: string;
}) => {
  return (
    <div className="border-t border-[#FDFAF5]/15 pt-6">
      <div className="mb-4 text-[24px] opacity-[0.7]">{icon}</div>
      <div className="fonx-serif mb-2.5 text-[18px] font-light">{name}</div>
      <div className="text-[13px] leading-[1.7] text-fog">{description}</div>
    </div>
  );
};

export default function Amenities() {
  return (
    <div className="bg-earth-deep px-4 py-14 text-white lg:px-12 lg:py-24">
      <div className="mb-10 lg:mb-14">
        <p className="mb-4 text-[10px] tracking-[0.25em] text-fog uppercase">
          The Experience
        </p>
        <h2 className="font-comporant text-[32px] leading-[1.1] lg:text-[44px]">
          Everything,
          <br />
          <em className="italic">thoughtfully placed</em>
        </h2>
      </div>
      <div
        className="mt-10 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-4
          lg:gap-10"
      >
        {amenities.map((amenity, index) => (
          <Amenity key={index} {...amenity} />
        ))}
      </div>
    </div>
  );
}
