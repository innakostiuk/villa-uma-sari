type HeroTitleProps = {
  firstLine: string | undefined;
  accent: string | undefined;
  lastLine?: string | undefined;
};

export const Title = ({ firstLine, accent, lastLine }: HeroTitleProps) => {
  return (
    <h1
      className="mb-6 font-comporant text-[42px] leading-none font-light
        text-white lg:text-[72px]"
    >
      {firstLine}
      <br />
      <em className="italic">{accent}</em>
      {lastLine && (
        <>
          <br />
          {lastLine}
        </>
      )}
    </h1>
  );
};
