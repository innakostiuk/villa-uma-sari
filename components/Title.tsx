export const Title = ({ text }: { text: string }) => {
  const parts = text.split('|');
  return (
    <h1
      className="mb-6 font-serif text-[72px] leading-none font-light text-white"
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
