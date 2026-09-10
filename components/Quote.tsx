import { Dictionary } from '@/dictionaries';

type QuoteProps = Dictionary['pages']['home']['quote'];
export default function Quote({ text, attribution }: QuoteProps) {
  return (
    <div className="bg-sand-dark px-12 py-20 text-center">
      <div className="mb-6 font-comporant text-[80px] leading-0.5 text-fog">
        &quot;
      </div>
      <p
        className="mx-auto mb-6 max-w-175 font-comporant text-[32px]
          leading-[1.4] text-earth-deep italic"
      >
        {text}
      </p>
      <p
        className="flex items-center justify-center text-[12px] tracking-[0.2em]
          text-earth uppercase before:mr-3 before:inline-block before:h-px
          before:w-2 before:bg-earth"
      >
        {attribution}
      </p>
    </div>
  );
}
