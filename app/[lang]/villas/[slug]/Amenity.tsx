// 1. Array of your 4 unique symbols in order
const symbolPattern = ['◎', '◈', '◉', '◐'];

export const Amenity = ({
  amenity,
  index,
}: {
  amenity: string;
  index: number;
}) => {
  // 2. The core logic: index % 4 always returns 0, 1, 2, or 3
  const symbol = symbolPattern[index % symbolPattern.length];
  return (
    <div
      className="flex items-center gap-4 border-b border-sand-dark p-[20px_0]
        odd:pr-8 even:pl-8 lg:odd:border-r"
    >
      <span className="w-5 text-center text-[18px] text-earth">{symbol}</span>
      <span className="text-[13px] tracking-[0.05em]">{amenity}</span>
    </div>
  );
};
