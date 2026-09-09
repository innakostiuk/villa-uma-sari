'use client';

import { useState } from 'react';
import type { Dictionary } from '@/dictionaries';

type SideBarProps = {
  booking: Dictionary['pages']['villas']['details']['booking'];
  priceFrom?: string;
  maxGuests: number;
};

type FormErrors = {
  dateFrom?: string;
  dateTo?: string;
  guests?: string;
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
  value,
  onChange,
  error,
}: {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        aria-invalid={Boolean(error)}
        className="appearance-none border border-sand-dark bg-sand px-4 py-3
          font-jost text-[14px] text-ink transition outline-none
          focus:border-earth"
      />
      {error ? (
        <span className="text-[10px] tracking-[0.08em] text-red-600">
          {error}
        </span>
      ) : null}
    </>
  );
};

const DateInput = ({
  label,
  value,
  onChange,
  error,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) => {
  return (
    <div className="flex flex-1 flex-col gap-1.5">
      <Label label={label} />
      <Input type="date" value={value} onChange={onChange} error={error} />
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

  const [formData, setFormData] = useState({
    dateFrom: '',
    dateTo: '',
    guests: '2',
    specialRequests: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!formData.dateFrom) {
      nextErrors.dateFrom = `${dateFromLabel} is required.`;
    }

    if (!formData.dateTo) {
      nextErrors.dateTo = `${dateToLabel} is required.`;
    }

    if (formData.dateFrom && formData.dateTo) {
      const start = new Date(formData.dateFrom);
      const end = new Date(formData.dateTo);

      if (end < start) {
        nextErrors.dateTo = 'Check-out date must be after arrival date.';
      }
    }

    if (!formData.guests) {
      nextErrors.guests = `${guests.label} is required.`;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(false);

    if (!validateForm()) {
      return;
    }

    setIsSubmitted(true);
    setErrors({});
  };

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
      <form className="flex flex-col" onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-0.5 sm:flex-row">
          <DateInput
            label={dateFromLabel}
            value={formData.dateFrom}
            onChange={(value) => {
              setFormData((current) => ({ ...current, dateFrom: value }));
              setErrors((current) => ({ ...current, dateFrom: undefined }));
            }}
            error={errors.dateFrom}
          />
          <DateInput
            label={dateToLabel}
            value={formData.dateTo}
            onChange={(value) => {
              setFormData((current) => ({ ...current, dateTo: value }));
              setErrors((current) => ({ ...current, dateTo: undefined }));
            }}
            error={errors.dateTo}
          />
        </div>
        <div className="mt-4 flex flex-col gap-1.5">
          <Label label={guests.label} />
          <select
            value={formData.guests}
            onChange={(event) => {
              setFormData((current) => ({
                ...current,
                guests: event.target.value,
              }));
              setErrors((current) => ({ ...current, guests: undefined }));
            }}
            className="appearance-none border border-sand-dark bg-sand px-4 py-3
              font-jost text-[14px] text-ink focus:border-earth
              focus:outline-none"
            aria-invalid={Boolean(errors.guests)}
          >
            {Array.from({ length: maxGuests }).map((_, index) => (
              <option
                key={index}
                value={String(index + 1)}
              >{`${index + 1} ${index === 0 ? guests.one : guests.other}`}</option>
            ))}
          </select>
          {errors.guests ? (
            <span className="text-[10px] tracking-[0.08em] text-red-600">
              {errors.guests}
            </span>
          ) : null}
        </div>
        <div className="mt-4 flex flex-col gap-1.5">
          <Label label={specialRequests.label} />
          <Input
            type="text"
            placeholder={specialRequests.placeholder}
            value={formData.specialRequests}
            onChange={(value) =>
              setFormData((current) => ({
                ...current,
                specialRequests: value,
              }))
            }
          />
        </div>
        <button
          type="submit"
          className="mt-6 w-full cursor-pointer border-none bg-earth-deep p-4
            font-jost text-[11px] tracking-[0.2em] text-white uppercase
            transition-colors duration-200 hover:bg-ink"
        >
          {button}
        </button>
        {isSubmitted ? (
          <p
            className="mt-4 rounded-sm border border-emerald-200 bg-emerald-50
              px-3 py-2 text-center text-[12px] leading-[1.6] text-emerald-700"
          >
            Your request has been sent.
          </p>
        ) : (
          <p className="mt-4 text-center text-[12px] leading-[1.6] text-fog">
            {note}
          </p>
        )}
      </form>
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
