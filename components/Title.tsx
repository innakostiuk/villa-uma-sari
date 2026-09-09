export const Title = ({ text }: { text: string }) => {
  const parts = text.split('|');
  return (
    <h1
      className="font-comporant mb-0 text-[42px] leading-none font-light
        text-white lg:mb-6 lg:text-[72px]"
    >
      {parts.map((part, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {index === 1 ? <em className="italic">{part}</em> : part}
        </span>
      ))}
    </h1>
  );
};
