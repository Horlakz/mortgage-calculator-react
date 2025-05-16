interface MortgageTypeProps {
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function MortgageType({ name, onChange }: MortgageTypeProps) {
  return (
    <label className="flex gap-4 items-center border py-2 border-[#4e6e7e] pl-2 cursor-pointer">
      <input
        type="radio"
        name="payment"
        className="peer hidden"
        value={name.toLowerCase().replace(" ", "_")}
        onChange={onChange}
      />
      <span className="h-4 w-4 rounded-full border border-[#4e6e7e] peer-checked:bg-[#4e6e7e]" />
      <span className="font-bold text-gray-700 peer-checked:text-[#4e6e7e]">
        {name}
      </span>
    </label>
  );
}

export default MortgageType;
