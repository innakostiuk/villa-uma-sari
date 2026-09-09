import type { Dictionary } from '@/dictionaries';

type SideBarProps = {
  booking: Dictionary['pages']['villas']['details']['booking'];
  priceFrom?: string;
  maxGuests: number;
};

const Label = ({ label }: { label: string }) => {
  return (
    <label className="text-[10px] tracking-[0.18em] text-earth uppercase">
      {label}
    </label>
  );
};

const Input = ({
  type,
  placeholder,
}: {
  type: string;
  placeholder?: string;
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="appearance-none border border-sand-dark bg-sand px-4 py-3
        font-jost font-[14px] text-ink"
    />
  );
};

const DateInput = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-col gap-1.5">
      <Label label={label} />
      <Input type="date" />
    </div>
  );
};

export const Sidebar = ({ booking, priceFrom, maxGuests }: SideBarProps) => {
  const {
    label,
    tagline,
    dateFromLabel,
    dateToLabel,
    guests,
    specialRequests,
    button,
    note,
    perks,
  } = booking;
  return (
    <aside
      className="self-start px-4 py-8 lg:sticky lg:top-18.25 lg:px-10 lg:py-16"
    >
      {/* Price block */}
      <div className="mb-8 border-b border-sand-dark pb-8">
        <p className="mb-2 text-[11px] tracking-[0.15em] text-earth uppercase">
          {label}
        </p>
        <p
          className="font-comporant text-[40px] leading-none text-ink
            md:text-[48px]"
        >
          {priceFrom}
        </p>
        <p className="mt-1 text-[13px] text-[#6B5F52]">{tagline}</p>
      </div>
      {/* Booking form */}
      <div className="flex flex-col">
        <div className="flex flex-col gap-0.5 sm:flex-row">
          <DateInput label={dateFromLabel} />
          <DateInput label={dateToLabel} />
        </div>
        <div className="mt-4 flex flex-col gap-1.5">
          <Label label={guests.label} />
          <select
            className="appearance-none border border-sand-dark bg-sand px-4 py-3
              font-jost font-[14px] text-ink focus:border-earth
              focus:outline-none"
          >
            {Array.from({ length: maxGuests }).map((_, index) => (
              <option
                key={index}
                value={index + 1}
              >{`${index + 1} ${index === 0 ? guests.one : guests.other}`}</option>
            ))}
          </select>
        </div>
        <div className="mt-4 flex flex-col gap-1.5">
          <Label label={specialRequests.label} />
          <Input type="text" placeholder={specialRequests.placeholder} />
        </div>
        <button
          className="mt-6 w-full cursor-pointer border-none bg-earth-deep p-4
            font-jost text-[11px] tracking-[0.2em] text-white uppercase
            transition-colors duration-200 hover:bg-ink"
        >
          {button}
        </button>
        <p className="mt-4 text-center text-[12px] leading-[1.6] text-fog">
          {note}
        </p>
      </div>
      {/* Sidebar perks */}
      <div className="mt-8 flex flex-col gap-3 border-t border-sand-dark pt-8">
        {perks.map((perk, index) => (
          <div
            className="flex items-center gap-2.5 text-[12px] text-[#6B5F52]"
            key={index}
          >
            <span className="text-[14px] text-earth">◎</span>
            <span>{perk}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};
